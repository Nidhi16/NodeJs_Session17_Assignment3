// Load require modules
var http = require('http');
var fs = require('fs');

// Reading file as streams of data
var readStream = fs.createReadStream('./big.txt');
// Writing file as streams of data
var writeStream = fs.createWriteStream('./big2.txt');

// Piping Operation
readStream.pipe(writeStream);