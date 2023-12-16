require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("hdkamboj")
})

app.get('/login', (req,res)=>{
    res.send('<h1> Please login at above link </h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2> TUT hell se niklo </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})