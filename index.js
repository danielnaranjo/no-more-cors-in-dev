const fetch = require('node-fetch')
const { json, send } = require('micro')
const { router, get, post, options } = require('micro-fork')
const microCors = require('micro-cors')
const cors = microCors({
	origin: '*',
	allowMethods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	allowHeaders: ['X-Requested-With', 'Access-Control-Allow-Origin', 'X-HTTP-Method-Override', 'Content-Type', 'Authorization', 'Accept']
})

const getData = async (req, res) => {
	const { url } = req.query
	const response = await fetch(`${url}`)
	const json = await response.json()
	send(res, 200, json)
}

const sendData = async (req, res) => {
	console.log('test',JSON.stringify(body))
	const body = await json(req)
	let pass = {}
	if (body.data) {
		pass = JSON.stringify(body.data);
	}
	const toSend = await fetch(`${body.url}`, { method: 'POST' })
	const response = await toSend.json()
	send(res, 200, response)
}

const optData = async (req, res) => {
	const { url } = req.query
	const response = await fetch(`${url}`)
	send(res, 200, {})
}

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = cors(
	router()(
		get('/api', getData),
		options('/api', optData),
		post('/api', sendData),
		get('/*', notfound),
	)
)

