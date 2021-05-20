// import preval from 'preval.macro';
// const fs = require('fs');
// import * as fs from 'fs';

function getState(){
	// const data = preval`const fs = require('fs');return fs.readFileSync('state.json', 'utf8');`;
	// let data = fs.readFileSync('./state.json', 'utf8');
	return JSON.parse(data);
}

function setState(state){
	fs.writeFileSync('./state.json', JSON.stringify(state, null, 4));
}

export default {
	getState,
	setState
};