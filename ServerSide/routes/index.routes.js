const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
require('../models/user.model')
const passport = require('passport')
const jwtHelper = require('../config/jwtHelper')
const _ = require('lodash')


//const ctrlUser = require('../controller/user.controller')
router.post('/register',function(req,res)
{
   // ctrlUser.register
   // console.log("Into the terminal")
   var user = new User();
   user.Name = req.body.Name;
   user.email = req.body.email;
   user.password = req.body.password;
   user.DOB = req.body.DOB;
   user.save((err,doc) =>
   {
    if(!err)
    {
        res.send(doc)
    }
   })
})

router.post('/authenticate',function(req,res) 
{
    ///module.exports.authenticate = (req, res, next) => {
        // call for passport authentication
        passport.authenticate('local', (err, user, info) => {       
            // error from passport middleware
            if (err) return res.status(400).json(err);
            // registered user
            else if (user) return res.status(200).json({ "token": user.generateJwt() });
            // unknown user or wrong password
            else return res.status(404).json(info);
        })(req, res);
    })

    router.get('/userprofile',jwtHelper.verifyJwtToken,function(req,res)
    {
        // module.exports.userProfile = (req, res, next) =>{
            User.findOne({ _id: req._id },
                (err, user) => {
                    if (!user)
                        return res.status(404).json({ status: false, message: 'User record not found.' });
                        else if (err)
                        return res.status(400).json(err)
                        else
                        return res.status(200).json({ status: true, user : _.pick(user,['Name','email','DOB']) });
                    //else 
                       // return res.status(200).json({ status: true, user : _.pick(user,['Name','email','DOB']) });
                }
            );
        
    })

module.exports = router 