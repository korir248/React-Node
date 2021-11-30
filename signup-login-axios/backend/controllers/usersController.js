const mssql = require('mssql')
const config = require('../config/db.config')


const getUsers = async()=>{
    try {
        let pool = await mssql.connect(config)
        let sql = "select id,username,email from users where isDeleted = 0" 
        let users = await pool.request().query(sql)
        const u = users.recordset.map(user=>{
            return {
                user_id: user.id,
                username: user.username,
                email: user.email    
             }
        })
        return u

    } catch (error) {
        console.log(error.message);
        
    }
    
}

const addUser = async(req,res)=>{
    const {username,fullname, email,password,cpassword} = req.body

    if(cpassword !== password) return res.status(401).send({
        error: "Confirm that both passwords match!"
    })
    try {
        let pool = await mssql.connect(config)
        let sql2 = "select * from users where isDeleted = 0"
        const users = pool.request().query(sql2,(err,result)=>{
            if(err) return res.status(401).send("An error occured")
            let user = result.recordset.find(user=>{
                user.email === email || user.username === username
            })
            if(user) return res.status(401).send("Email or Username is already taken")

            let sql = `insert into dbo.users([fullname],[username],[email],[password])values('${fullname}','${username}','${email}','${password}');`
    
            let resquery= pool.request().query(sql,(err,result)=>{
                if (err) return res.status(401).send(err.message)
                return res.status(200).send({
                    message: "Signup was successful",
                    data: result.recordset
                })
            })
            return resquery
        })        
        return users
    } catch (error) {
        console.log("error: ",error.message);
        
    }
}

module.exports = { getUsers,addUser}
