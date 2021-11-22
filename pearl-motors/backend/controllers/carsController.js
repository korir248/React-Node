const mssql = require('mssql')
const config = require('../config/db.config')

const getCars = async()=> {
     try {
        let pool= await mssql.connect(config)
        let sql = `select * from car_data`       
        let cars = await pool.request().query(sql)
        console.log(cars.recordset.length)

        const u =cars.recordset.map(car=>{
            
            return {
                car_id: car.id,
                name: car.make.trim(),
                model: car.model.trim(),
                price: car.price
            }
        })
        return u
     } catch (err) {
         console.log(err.message);
     }
 }

const addCar = async(username,model,password)=>{
    try {
        let pool = await mssql.connect(config)
        let sql = `insert into car_data(username,model,password) values(${username},${model},${password})`
        let result = await pool.request().query(sql,(err,result)=>{
            // .execute('addUser'
            if (err) {
                console.log(err.message);
                return err.message         
            } else {
                return result
                
            }
        })

        return result
        
    } catch (err) {
        console.log(err.message);
    }
}
 module.exports = {getCars,addCar}