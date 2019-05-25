const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, (err) => 
{
if(!err)
{
    console.log('MONGO DB CONNECTED Yay!!!')
}
else{
    console.log('Not CONNECTED'  + JSON.stringify(err,undefined,2))
}
}
);
require('./user.model')
