const express = require('express')
const app = express()
const port = 8080

// serve static content. 'Public' folder has priority over the routes
app.use(express.static('public'));

// This code won't use because we have a static content instead, so it doesn't this route '/'
// app.get('/', (req, res) => {
//   res.send('Home page, this will not be displayed')
// })
// app.get('/pruebita', (req, res) => {
//   res.send('Pruebita has not priority over what is in the public folder, so this will not be displayed')
// })

app.get('/hello-world', (req, res) => {
  res.send('Hello World page')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404-page.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})