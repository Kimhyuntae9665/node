const express = require('express')
const app = express()

app.get('/', function (req, res) {
    req = "whatup";
  res.send(req);
})

app.listen(3000)