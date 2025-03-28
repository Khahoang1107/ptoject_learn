const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Port number
const path = require('path');
const hostname = process.env.HOST_NAME; // Hostname
require('dotenv').config()
// check env
console.log('Environment:', process.env);

// Khai báo routeroute
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/* app.get('/', (req, res) => {
    res.render('index','./src/views/sample.ejs')
  }) */
  app.get('/', (req, res) => {
    res.render('index', __dirname + '/src/views/sample.ejs')    
  })
/* Khai báoo routeroute
app.get('/abcabc', (req, res) => {
    res.send('Hello World!')
  })
*/
// config template engine
app.set('views', './src/views')   
app.set('view engine', 'ejs')

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})