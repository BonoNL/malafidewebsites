const shell = require('shelljs');

const inputFile = '../README.md';
shell.exec(`cat ${inputFile} | tr -d "/" | sort | uniq > ${inputFile}`);
