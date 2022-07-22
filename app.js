require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nameAuthor: 'Diego Gonzales',
    titlePage: 'Home'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nameAuthor: 'Diego Gonzales',
    titlePage: 'Generic'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nameAuthor: 'Diego Gonzales',
    titlePage: 'Elements'
  });
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})