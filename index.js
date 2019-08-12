const fetch = require('node-fetch')
const { json, send } = require('micro')
const { router, get, post, options } = require('micro-fork')
const sendToSentry = require('micro-sentry');
// 'https://<key>:<secret>@sentry.io/<project>'
const sentry_api = 'https://a4f9e6888bc04ece9af0d22b76409194:5cd1cca794d8407688be183d27144ee3@sentry.io/1528487'
const microCors = require('micro-cors')
const cors = microCors({
	origin: '*',
	allowMethods: [
		'POST', 
		'GET', 
		'PUT', 
		'PATCH', 
		'DELETE', 
		'OPTIONS'
	],
	allowHeaders: [
		'X-Requested-With', 
		'Access-Control-Allow-Origin', 
		'X-HTTP-Method-Override', 
		'Content-Type', 
		'Authorization', 
		'Accept'
	]
})

const getData = sendToSentry(sentry_api)(async (req, res) => {
	const { url } = req.query
	const response = await fetch(`${url}`)
	const json = await response.json()
	send(res, 200, json)
})

const sendData = sendToSentry(sentry_api)(async (req, res) => {
	const { url } = req.query
	const body = await json(req)
	let fields = {
		method: 'POST'
	}
	if (body.data) {
		fields.data = JSON.stringify(body.data);
		console.log(`D: ${fields}`)
	}
	console.log(`URL: ${url}`)
	const toSend = await fetch(`${url}`, fields)
	const response = await toSend.json()
	send(res, 200, response)
})

const optData = sendToSentry(sentry_api)(async (req, res) => {
	const { url } = req.query
	const response = await fetch(`${url}`)
	send(res, 200, {})
})

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = cors(
	router()(
		get('/api', getData),
		options('/api', optData),
		post('/api', sendData),
		get('/*', notfound),
	)
)

