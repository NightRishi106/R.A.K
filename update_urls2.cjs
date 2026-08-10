const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(/%26/g, '&');

fs.writeFileSync('src/data.ts', data);
