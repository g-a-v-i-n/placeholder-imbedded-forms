// server/index.js

const app = require('./app')

const PORT = process.env.PORT || 5000

const http = require('http')

const server = http.createServer(app)

server.listen(PORT)
server.on('listening', () => { console.log('listenin') })
