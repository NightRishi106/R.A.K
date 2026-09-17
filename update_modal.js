const fs = require('fs');

const path = 'src/components/InvestigationFormModal.tsx';
let content = fs.readFileSync(path, 'utf8');

// We will do a full rewrite in the next step, just checking if node is available.
console.log('Node is ready');
