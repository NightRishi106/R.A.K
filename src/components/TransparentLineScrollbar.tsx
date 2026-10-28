import React, { useEffect, useState, useRef, useCallback } from 'react';

interface TransparentLineScrollbarProps {
  /** If omitted, binds to the main browser window/document scroll */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Fixed to viewport right edge ('fixed') or sticky/absolute inside a modal ('modal') */
  variant?: 'window' | 'overlay' | 'modal';
  /** Optional className override */
  className?: string;
}

export const TransparentLineScrollbar: React.FC<TransparentLineScrollbarProps> = ({
  containerRef,
  variant = 'window',
  className = '',
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollState, setScrollState] = useState({
    scrollTop: 0,
    scrollHeight: 1,
    clientHeight: 1,
    canScroll: false,
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
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      return {
        scrollTop,
        scrollHeight,
        clientHeight,
        canScroll: scrollHeight > clientHeight + 8,
      };
    } else {
      const docEl = document.documentElement;
      const scrollTop = window.scrollY || docEl.scrollTop || 0;
      const scrollHeight = Math.max(
        docEl.scrollHeight,
        document.body ? document.body.scrollHeight : 0
      );
      const clientHeight = window.innerHeight || docEl.clientHeight || 1;
      return {
        scrollTop,
        scrollHeight,
        clientHeight,
        canScroll: scrollHeight > clientHeight + 8,
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
        prev.scrollHeight === metrics.scrollHeight &&
        prev.clientHeight === metrics.clientHeight &&
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
        if (containerRef.current.firstElementChild) {
          resizeObserver.observe(containerRef.current.firstElementChild);
        }
      } else if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    const timer = window.setTimeout(updateMetrics, 250);

    return () => {
      targetEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMetrics);
      if (resizeObserver) resizeObserver.disconnect();
      window.clearTimeout(timer);
    };
  }, [containerRef, updateMetrics]);

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
      const thumbHeightPx = Math.max(trackHeight * thumbRatio, 28);
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

  if (!scrollState.canScroll) return null;

  const { scrollTop, scrollHeight, clientHeight } = scrollState;
  const maxScroll = Math.max(scrollHeight - clientHeight, 1);
  const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
  const thumbHeightPercent = Math.min(Math.max((clientHeight / scrollHeight) * 100, 7), 92);
  const thumbTopPercent = progress * (100 - thumbHeightPercent);

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
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
    const step = Math.max(clientHeight * 0.45, 220);
    const next = direction === 'up' ? Math.max(scrollTop - step, 0) : Math.min(scrollTop + step, maxScroll);
    scrollToPosition(next, true);
  };

  const positionClasses =
    variant === 'window'
      ? 'fixed right-1.5 sm:right-2.5 top-20 bottom-20 z-[75]'
      : variant === 'overlay'
        ? 'fixed right-1.5 sm:right-2.5 top-16 bottom-20 z-[88]'
        : 'fixed right-2 sm:right-4 top-[10vh] bottom-[10vh] z-[110]';

  return (
    <div
      className={`${positionClasses} flex flex-col items-center select-none pointer-events-auto group ${className}`}
      aria-hidden="true"
    >
      {/* Top Line Cap — Click to Scroll Up */}
      <button
        type="button"
        onClick={(e) => handleStepScroll('up', e)}
        title="Scroll Up"
        className="w-4 h-4 flex items-center justify-center bg-transparent text-[#D4AF37]/45 hover:text-[#D4AF37] transition-colors cursor-pointer focus:outline-none"
      >
        <span className="block w-1.5 h-1.5 border-t border-l border-current rotate-45 translate-y-0.5" />
      </button>

      {/* Transparent Vertical Line Track */}
      <div
        ref={trackRef}
        onPointerDown={handleTrackPointerDown}
        className="relative flex-1 w-4 flex justify-center cursor-pointer bg-transparent"
      >
        {/* Continuous Hairline Guide */}
        <div className="h-full w-[1.5px] bg-gradient-to-b from-[#D4AF37]/15 via-[#D4AF37]/30 to-[#D4AF37]/15 group-hover:via-[#D4AF37]/45 transition-colors rounded-full" />

        {/* Active Draggable Line Thumb */}
        <div
          onPointerDown={handleThumbPointerDown}
          style={{
            top: `${thumbTopPercent}%`,
            height: `${thumbHeightPercent}%`,
            minHeight: '26px',
          }}
          className={`absolute left-1/2 -translate-x-1/2 rounded-full transition-[width,background-color,box-shadow] duration-150 cursor-grab active:cursor-grabbing ${
            isDragging
              ? 'w-[3.5px] bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)]'
              : 'w-[2px] group-hover:w-[3px] bg-[#D4AF37]/65 group-hover:bg-[#D4AF37]/95 shadow-[0_0_8px_rgba(212,175,55,0.45)]'
          }`}
        />
      </div>

      {/* Bottom Line Cap — Click to Scroll Down */}
      <button
        type="button"
        onClick={(e) => handleStepScroll('down', e)}
        title="Scroll Down"
        className="w-4 h-4 flex items-center justify-center bg-transparent text-[#D4AF37]/45 hover:text-[#D4AF37] transition-colors cursor-pointer focus:outline-none"
      >
        <span className="block w-1.5 h-1.5 border-b border-r border-current rotate-45 -translate-y-0.5" />
      </button>
    </div>
  );
};

export default TransparentLineScrollbar;
