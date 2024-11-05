const Sequelize = require('sequelize')
const sequelize = new Sequelize('food_receipe','root','Mathan@123',{
    host:'localhost',
    dialect:'mysql'
})
sequelize.authenticate().then(()=>{
    console.log("connected successfully")
}).catch(()=>{
    console.log("failed to connected")
})
module.exports = sequelize;