require('dotenv').config()
const express = require('express')
<<<<<<< HEAD
const { getUsers } = require('./controllers/usersController')
=======
>>>>>>> a286842160dbc8b032ccd812d15093efa17d51c7
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
<<<<<<< HEAD
    res.status(200).send("Welcome Home")
    console.log('welcome home');
})

app.get("/users",(req,res)=>{
    try {
        getUsers().then((result,error)=>{
            if (error) {
                return error.message
                
            }
            return result
        })
        
    } catch (error) {
        console.log(error.message);
    }
})
=======
    res.send('Welcome Home!')
})

>>>>>>> a286842160dbc8b032ccd812d15093efa17d51c7

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
})