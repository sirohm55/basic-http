//express library for creating own service
//npm init allows you to install some libraries

const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) //only once, req = request, res = response
app.post('/login', (req, res) => {
  console.log (req.body)

  res.send('created')
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//type in address bar, it only use method get
app.get('/bye', (req, res) => {
  res.send('Hello')
})

app.get('/bye/acc', (req, res) => {
  res.send('Hi')
})

app.post('/register', (req, res) => {
  res.send('Account created')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//default cns = 80
//ftp = 21