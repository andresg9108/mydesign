require('shelljs/global');


const oCommands = {
	'test': [
		'echo',
		'Hello World'
	]
};


const sCommandName = process.argv[2];
const aCommand = oCommands[sCommandName];

if(typeof aCommand !== 'undefined'){
	let sCommand = "";
	for (let i=0; i < aCommand.length; i++) {
		sCommand += (i==0) ? aCommand[i] : ' ' + aCommand[i];
	}

	exec(sCommand);
}else{
	console.log('Incorrect command.');
}

/*process.argv.forEach((val, index) => {
	console.log(`${index}: ${val}`);
});*/