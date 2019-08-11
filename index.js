const { json, send } = require('micro')
const { router, get, post } = require('micro-fork')
const fetch = require('node-fetch');

const getData = async (req, res) => {
	const { url } = req.query
	const response = await fetch(`${url}`)
	const json = await response.json()
	send(res, 200, json)
}

const sendData = async (req, res) => {
	const body = await json(req)
	const toSend = await fetch(`${body.url}`, { method: 'POST', body: `${JSON.stringify(body.data)}` })
	const response = await toSend.json()
	send(res, 200, response)
}

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router()(
	get('/api', getData),
	post('/api', sendData),
	get('/*', notfound),
)

