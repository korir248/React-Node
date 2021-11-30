require('dotenv').config()
const express = require('express')
const { getUsers, addUser } = require('./controllers/usersController')
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Welcome Home")
    console.log('welcome home');
})

app.get("/users",(req,res)=>{
    try {
        getUsers().then((result,error)=>{
            if (error) {
                return error.message
                
            }
            return res.send(result)
        })
        
    } catch (error) {
        console.log(error.message);
    }
})

app.post("/register",(req,res)=>{
    try {
        addUser().then((result,err)=>{
            if (err) {
                return res.status(401).send(err.message    )            
            }
            return res.status(200).send(result)
        })
    } catch (error) {
        console.log(error.message);
        
    }
})

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})