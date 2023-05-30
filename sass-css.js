require('shelljs/global');

const sOptions = '--style compressed';

var oSassFiles = require('./grunt/sass/files.js');
var sSass = '';

for(var i in oSassFiles.o){
	sSass += `${oSassFiles.o[i]}:${i} `;
}

exec(`sass ${sSass} ${sOptions}`);

process.on('message', (msg) => {
	if(typeof msg.watch != 'undefined' && msg.watch){
		exec(`sass --watch ${sSass} ${sOptions}`);
	}
});