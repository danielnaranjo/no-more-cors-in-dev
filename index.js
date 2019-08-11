const fetch = require('node-fetch');
const request = require('request');

module.exports = async (req, res) => {
	const { protocol, url, endpoint } = req.params;
	console.log(`${ protocol }://${url}/${endpoint}`);
	const response = await fetch('https://ecoven.cl/app/v1/index.php/getIdiomas'); 
	const json = await response.json();
	return json;
};

