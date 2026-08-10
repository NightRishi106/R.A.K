const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(/\/Bespoke Vintage Tri-Field EMF Meter\.jpg/g, '/Bespoke%20Vintage%20Tri-Field%20EMF%20Meter.jpg');
data = data.replace(/\/Seismic Infrasound Micro-Barometer\.jpg/g, '/Seismic%20Infrasound%20Micro-Barometer.jpg');
data = data.replace(/\/Narrow-Spectrum Infrared Bolometer\.jpg/g, '/Narrow-Spectrum%20Infrared%20Bolometer.jpg');
data = data.replace(/\/Radon & Ionization Chamber Ion-Counter\.jpg/g, '/Radon%20%26%20Ionization%20Chamber%20Ion-Counter.jpg');
data = data.replace(/\/Sub-surface Ground Penetrating Radar\.jpg/g, '/Sub-surface%20Ground%20Penetrating%20Radar.jpg');

fs.writeFileSync('src/data.ts', data);
