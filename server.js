const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')

const corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/api',productRoute)
app.use('/user',userRoute)

app.get('/',(req,res)=>{
    console.log('home page');
res.json({message : "hello world"})
})


app.listen(port,()=>{
console.log(`port working ${port}`);
})