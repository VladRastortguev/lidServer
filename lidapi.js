require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookiePareser = require('cookie-parser')
const router = require('./router')

const PORT = process.env.PORT || 5001
const app = express()

app.use(express.json())
app.use(cookiePareser())
app.use(cors({
    credentials: true
}))
app.use('/lidapi', router)

const start = async () => {
    try { 
        app.listen(5001, () => {
            console.log(`Server started on PORT = ${PORT}`);            
        })
    } catch (e) {
        console.log(e);        
    }
}

start()