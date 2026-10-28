import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TransparentLineScrollbarProps {
  /** If omitted, binds to the main browser window/document scroll */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Visual & z-index placement variant for each page type */
  variant?: 'window' | 'overlay' | 'modal';
  /** Optional key that triggers recalculation when page route/content changes */
  watchKey?: string | number;
  /** Optional className override */
  className?: string;
}

export const TransparentLineScrollbar: React.FC<TransparentLineScrollbarProps> = ({
  containerRef,
  variant = 'window',
  watchKey,
  className = '',
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollState, setScrollState] = useState({
    scrollTop: 0,
    scrollHeight: 1000,
    clientHeight: 500,
    canScroll: true,
  });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startY: number; startScrollTop: number }>({
    startY: 0,
    startScrollTop: 0,
  });

  const getScrollMetrics = useCallback(() => {
    if (containerRef) {
      const el = containerRef.current;
      if (!el) {
        return { scrollTop: 0, scrollHeight: 1, clientHeight: 1, canScroll: false };
      }
      const scrollTop = el.scrollTop;
      const scrollHeight = Math.max(el.scrollHeight, 1);
      const clientHeight = Math.max(el.clientHeight, 1);
      return {
        scrollTop,
        scrollHeight,
        clientHeight,
        canScroll: scrollHeight > clientHeight + 4,
      };
    } else {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || docEl.scrollTop || (body ? body.scrollTop : 0) || 0;
      const scrollHeight = Math.max(
        docEl.scrollHeight || 0,
        body ? body.scrollHeight : 0,
        1
      );
      const clientHeight = Math.max(window.innerHeight || docEl.clientHeight || 1, 1);
      return {
        scrollTop,
        scrollHeight,
        clientHeight,
        canScroll: scrollHeight > clientHeight + 4,
      };
    }
  }, [containerRef]);

  const scrollToPosition = useCallback(
    (nextScrollTop: number, smooth = false) => {
      if (containerRef) {
        const el = containerRef.current;
        if (!el) return;
        el.scrollTo({
          top: nextScrollTop,
          behavior: smooth ? 'smooth' : 'auto',
        });
      } else {
        window.scrollTo({
          top: nextScrollTop,
          behavior: smooth ? 'smooth' : 'auto',
        });
      }
    },
    [containerRef]
  );

  const updateMetrics = useCallback(() => {
    const metrics = getScrollMetrics();
    setScrollState((prev) => {
      if (
        Math.abs(prev.scrollTop - metrics.scrollTop) < 0.5 &&
        Math.abs(prev.scrollHeight - metrics.scrollHeight) < 1 &&
        Math.abs(prev.clientHeight - metrics.clientHeight) < 1 &&
        prev.canScroll === metrics.canScroll
      ) {
        return prev;
      }
      return metrics;
    });
  }, [getScrollMetrics]);

  useEffect(() => {
    updateMetrics();

    const targetEl = containerRef ? containerRef.current : window;
    if (!targetEl) return;

    const handleScroll = () => {
      updateMetrics();
    };

    targetEl.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateMetrics, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateMetrics();
      });
      if (containerRef?.current) {
        resizeObserver.observe(containerRef.current);
        Array.from(containerRef.current.children).forEach((child) => {
          resizeObserver?.observe(child);
        });
      } else if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    let mutationObserver: MutationObserver | null = null;
    if (typeof MutationObserver !== 'undefined') {
      const rootNode = containerRef?.current || document.body;
      if (rootNode) {
        mutationObserver = new MutationObserver(() => {
          updateMetrics();
        });
        mutationObserver.observe(rootNode, {
          childList: true,
          subtree: true,
        });
      }
    }

    const t1 = window.setTimeout(updateMetrics, 120);
    const t2 = window.setTimeout(updateMetrics, 450);

    return () => {
      targetEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMetrics);
      if (resizeObserver) resizeObserver.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [containerRef, watchKey, updateMetrics]);

  // Pointer drag handling for smooth thumb dragging along the line
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!trackRef.current) return;
      const trackRect = trackRef.current.getBoundingClientRect();
      const trackHeight = Math.max(trackRect.height, 1);
      const { scrollHeight, clientHeight } = getScrollMetrics();
      const maxScroll = Math.max(scrollHeight - clientHeight, 1);

      const thumbRatio = Math.min(Math.max(clientHeight / Math.max(scrollHeight, 1), 0.08), 1);
      const thumbHeightPx = Math.max(trackHeight * thumbRatio, 32);
      const availableTrack = Math.max(trackHeight - thumbHeightPx, 1);

      const deltaY = e.clientY - dragStartRef.current.startY;
      const scrollDelta = (deltaY / availableTrack) * maxScroll;

      scrollToPosition(
        Math.min(Math.max(dragStartRef.current.startScrollTop + scrollDelta, 0), maxScroll),
        false
      );
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging, getScrollMetrics, scrollToPosition]);

  const { scrollTop, scrollHeight, clientHeight, canScroll } = scrollState;
  const maxScroll = Math.max(scrollHeight - clientHeight, 1);
  const progress = canScroll ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
  const thumbHeightPercent = canScroll
    ? Math.min(Math.max((clientHeight / Math.max(scrollHeight, 1)) * 100, 8), 90)
    : 100;
  const thumbTopPercent = canScroll ? progress * (100 - thumbHeightPercent) : 0;

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current || !canScroll) return;
    e.stopPropagation();

    const trackRect = trackRef.current.getBoundingClientRect();
    const clickRatio = Math.min(
      Math.max((e.clientY - trackRect.top) / Math.max(trackRect.height, 1), 0),
      1
    );
    const targetScrollTop = clickRatio * maxScroll;

    scrollToPosition(targetScrollTop, false);
    dragStartRef.current = {
      startY: e.clientY,
      startScrollTop: targetScrollTop,
    };
    setIsDragging(true);
  };

  const handleThumbPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canScroll) return;
    e.stopPropagation();
    e.preventDefault();
    dragStartRef.current = {
      startY: e.clientY,
      startScrollTop: scrollTop,
    };
    setIsDragging(true);
  };

  const handleStepScroll = (direction: 'up' | 'down', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!canScroll) return;
    const step = Math.max(clientHeight * 0.45, 260);
    const next =
      direction === 'up' ? Math.max(scrollTop - step, 0) : Math.min(scrollTop + step, maxScroll);
    scrollToPosition(next, true);
  };

  const positionClasses =
    variant === 'window'
      ? 'fixed right-2 sm:right-3.5 top-20 bottom-20 z-[75]'
      : variant === 'overlay'
        ? 'fixed right-2 sm:right-3.5 top-20 bottom-20 z-[88]'
        : 'fixed right-2 sm:right-4 top-[10vh] bottom-[10vh] z-[110]';

  return (
    <div
      className={`${positionClasses} flex flex-col items-center select-none pointer-events-auto group ${className}`}
      aria-label="Page Scrollbar"
    >
      {/* Top Scroll Up Button */}
      <button
        type="button"
        onClick={(e) => handleStepScroll('up', e)}
        title="Scroll Up"
        className="w-5 h-5 rounded-full bg-black/25 hover:bg-black/55 border border-[#D4AF37]/35 hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all cursor-pointer focus:outline-none backdrop-blur-[2px] mb-1"
      >
        <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>

      {/* Transparent Vertical Line Track */}
      <div
        ref={trackRef}
        onPointerDown={handleTrackPointerDown}
        className="relative flex-1 w-4 flex justify-center cursor-pointer bg-transparent py-0.5"
      >
        {/* Continuous Transparent Vertical Line Guide */}
        <div className="h-full w-[2px] bg-gradient-to-b from-[#D4AF37]/25 via-[#D4AF37]/45 to-[#D4AF37]/25 group-hover:via-[#D4AF37]/65 transition-colors rounded-full shadow-[0_0_6px_rgba(0,0,0,0.6)]" />

        {/* Active Draggable Line Thumb */}
        <div
          onPointerDown={handleThumbPointerDown}
          style={{
            top: `${thumbTopPercent}%`,
            height: `${thumbHeightPercent}%`,
            minHeight: '32px',
          }}
          className={`absolute left-1/2 -translate-x-1/2 rounded-full transition-[width,background-color,box-shadow] duration-150 cursor-grab active:cursor-grabbing ${
            isDragging
              ? 'w-[5px] bg-[#F3D068] shadow-[0_0_14px_rgba(212,175,55,0.95)]'
              : 'w-[3.5px] group-hover:w-[5px] bg-gradient-to-b from-[#E5C158]/90 via-[#D4AF37] to-[#B8860B]/90 shadow-[0_0_10px_rgba(212,175,55,0.65)]'
          }`}
        />
      </div>

      {/* Bottom Scroll Down Button */}
      <button
        type="button"
        onClick={(e) => handleStepScroll('down', e)}
        title="Scroll Down"
        className="w-5 h-5 rounded-full bg-black/25 hover:bg-black/55 border border-[#D4AF37]/35 hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all cursor-pointer focus:outline-none backdrop-blur-[2px] mt-1"
      >
        <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </div>
  );
};

export default TransparentLineScrollbar;
