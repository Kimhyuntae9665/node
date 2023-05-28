const express = require('express')

var cors = require('cors')

const app = express()

// app.use(cors())

app.get('/', function (req, res) {
    req = "whatup";
  res.send(req);
})

app.get('/sound/:name', (req, res)=>{
  const {name} = req.params;

  if(name=="dog"){
    res.json({'sounds':'멍멍'})
  } else if(name=="cat"){
    res.json({'sounds':'야옹'})
  } else if(name=="pig"){
    res.json({'sounds':'꿀꿀'})
  } else{
    res.json({'sounds':'알 수 없음'})
  }

})

app.get('/cat', function (req, res) {
  req = "<h1>Eiyahong</h1>";
res.send(req);
})



app.listen(3000)