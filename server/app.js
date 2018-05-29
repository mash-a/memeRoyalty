const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3004
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/ping', (req, res, next) => {
  res.json({ message: 'pong!' })
})
app.get('/', (req, res, next) => {
  const index = path.join(__dirname, '../client/build/index.html')
  res.sendFile(index)
})
// handle error
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})
// not found
app.use((req, res, next) => {
  res.status(404).json( {error: { message: "Not found."}})
})

app.listen(port, listener)
