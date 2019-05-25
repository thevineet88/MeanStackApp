require ('./config/config.js');
require ('./models/db.js');
require('./config/passportConfig')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const rtsIndex = require('./routes/index.routes.js') 


var app = express()  

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use('/api',rtsIndex); 

app.listen(process.env.PORT, () => console.log(`Server started at the port: ${process.env.PORT}`))