const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())         //server teke data frontend e show korte help korbe
app.use(express.json()) //front end teke data server e aste help korbe

const users = [
    {"id":1,"name":"sabana","email":"sabana88@gmail.com"},
    {"id":2,"name":"nabana","email":"nabana89@gmail.com"},
    {"id":3,"name":"tabana","email":"tabana90@gmail.com"}
]

app.get('/', (req, res) => {
  res.send('Hello World!users management server is running')
})

app.get("/users",(req,res)=>{
    res.send(users)
})
app.post("/users",(req,res)=>{
    console.log('post API is hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`server is running at http://localhost:${port}`)
})