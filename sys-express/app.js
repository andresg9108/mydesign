var oApp = {};

oApp.host = 'localhost';
oApp.path = '';
oApp.port = 8080;
oApp.express = require('express');
oApp.http = require('http');
oApp.app = {};

oApp.setPath = (sPath) => {
	oApp.path = sPath;
}

oApp.setPort = (sPort) => {
	oApp.port = sPort;
}

oApp.run = () => {
	oApp.app = oApp.express();

	oApp.app.use(oApp.express.static(oApp.path));
	
	let oServer = oApp.http.Server(oApp.app);
	oServer.listen(oApp.port, () => {
		let sRoute = `http://${oApp.host}:${oApp.port}/web`;

		console.log('');
		console.log(`Port: ${oApp.port}`);
		console.log(`Route: ${sRoute}`);
		console.log('');
	});
}

exports.setPath = oApp.setPath;
exports.setPort = oApp.setPort;
exports.run = oApp.run;