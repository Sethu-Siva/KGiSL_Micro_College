const fs = require('fs');

// fs.writeFileSync('Sample.txt', "Sample text to be inside the file");
fs.appendFileSync('Sample.txt', "\nNext Line");