require('shelljs/global');

var oChildProcess = require('child_process');
var oSp1 = oChildProcess.fork(`./server.js`);

exec('npm run grunt');