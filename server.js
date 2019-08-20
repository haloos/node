const express = require('express'); 

const app = express(); 

app.get('/', (req, res) => {
  res.send("helllooooo"); 
})

app.listen(3000);