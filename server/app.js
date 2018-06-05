const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3004
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const fileUpload = require("express-fileupload");

app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(logger('dev'));
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/ping', (req, res, next) => {
  res.json({ message: 'pong!' })
})
app.get('/', (req, res, next) => {
  const index = path.join(__dirname, '../client/build/index.html')
  res.sendFile(index)
})

//get all the memeges
app.get('/api/memeges', (req, res, next) => {
  knex('memeges').orderBy("votes", "desc").then(memeges => res.json({memeges: memeges}))
});

//add a meme
app.post('/api/memeges', (req, res, next) => {
  knex('memeges').insert(req.body).then(() => {
    knex('memeges').orderBy("votes", "desc").then(memeges => res.json(memeges))
  })
})

//edit a meme
app.patch('/api/memeges/:id', (req, res, next) => {
  knex('memeges').update(req.body)
  .where('id', req.params.id)
  .then(() => {
    knex('memeges').orderBy("votes", "desc").then(memeges => res.json(memeges))
  })
})

//delete a meme
app.delete('/api/memeges/:id', (req, res, next) => {
  knex('memeges').del().where('id', req.params.id)
  .then(() => {
    knex('memeges').orderBy("votes", "desc").then(memeges => res.json(memeges))
  })
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
