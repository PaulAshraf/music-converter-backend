const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const marked = require('marked')

const config = require('./config')
const parseConroller = require('./controllers/parseController')
const convertController = require('./controllers/convertController')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (_, res) => {
  let path = __dirname + '/README.md'
  fs.readFile(path, 'utf8', (err, data) => {
    if(err) {
      console.log(err)
    }
    res.send(marked(data.toString()))
  })
})

app.use('/parse', parseConroller)
app.use('/convert', convertController)

const port = config.port || 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})