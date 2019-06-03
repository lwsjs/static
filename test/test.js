const Tom = require('test-runner').Tom
const Static = require('../')
const Lws = require('lws')
const fetch = require('node-fetch')
const a = require('assert')

const tom = module.exports = new Tom('static')

tom.test('simple', async function () {
  const port = 8000 + this.index
  const lws = Lws.create({
    port,
    stack: [ Static ],
    directory: 'test/fixture'
  })
  const response = await fetch(`http://localhost:${port}/one.html`)
  const body = await response.text()
  a.strictEqual(body, 'one\n')
  lws.server.close()
})
