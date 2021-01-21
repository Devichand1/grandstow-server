const express = require('express')
const app = express()
const port = 5000

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

