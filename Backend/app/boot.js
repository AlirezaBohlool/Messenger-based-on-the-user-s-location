const mongodbStart = require('../db/connections/mongoose')
module.exports  = ()=>{
   console.log('start')
   mongodbStart
}