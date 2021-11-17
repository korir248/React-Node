require('dotenv').config()
const mssql = require('mssql')
const express = require('express')
const config = require('./config/db.config')
const {getUsers, getSpecificUser, deleteUser, updateUser, addUser, getCars} = require('./controllers/carsController')
const PORT = process.env.PORT


const app = express()
app.use(express.json())



app.get("/",(req,res)=>{
    res.status(200).send("Welcome Home")
    console.log('welcome home');
})

app.get("/cars",(req,res)=>{
    try {
        getCars().then
    } catch (error) {
        console.log(error.message);
        
    }
})


app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})