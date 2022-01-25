require('shelljs/global');

var oChildProcess = require('child_process');

var oSp1 = oChildProcess.fork(`./server.js`);
var oSp2 = oChildProcess.fork(`./sass-css.js`);

oSp2.send({
	watch: true
});

exec('npm run grunt');