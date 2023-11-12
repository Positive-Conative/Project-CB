const execSync = require('child_process').execSync;

console.log(execSync('ls -al').toString());
