// require('dotenv').config()
import express from 'express'

// const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send('umesh1.com')
})
app.get('/login',(req,res)=>{
res.send('<h1> please login at chsai or code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>jai ist dev</h2>')
    
})
app.get('/youtube123',(req,res)=>{  // if we wan t to send the json data
  
  res.json({ username: 'Flavio' })
})

app.listen(process.env.PORT||3000, () => {
  console.log(`Example app listening on port ${port}`)
})
