var oApp = {};

oApp.sysExpressApp = require('./sys-express/app.js');

oApp.sysExpressApp.setPath(__dirname);
oApp.sysExpressApp.setPort(8082);
oApp.sysExpressApp.run();