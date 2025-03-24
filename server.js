//step1 import....
const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')

//const authRouter = require('./routes/auth')
//const categoryRouter = require('./routes/category')


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//app.use('/api',authRouter)
//app.use('/api',categoryRouter)
readdirSync('./routes').map((c)=> app.use('/api', require('./routes/' +c)) )

 


//step3 router
//app.post('/api',(req,res)=>{
  //  const { username,password } = req.body
    //console.log(username,password)
    //res.send('Jukku')
//})
//step 2 Start Server
app.listen(5000,()=> console.log('Server is running on port 5000'))
