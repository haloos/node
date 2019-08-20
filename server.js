const express = require('express'); 

const app = express(); 

app.use((req, res, next) => {
  console.log('<h1>HELLOS</h1>') 
  next();
})

app.get('/', (req, res) => {
  res.send("helllooooo"); 
})

app.listen(3000);