require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('Welcome Home!')
})


app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})