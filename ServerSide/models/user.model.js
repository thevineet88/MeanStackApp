const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var userSchema = new mongoose.Schema(
    {
        Name:
        {
            type : String
        },
        email:
        {
            type : String
        },
        password:
        {
            type : String
        },
        DOB:
        {
            type : String
        }
    }
)

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function(password)
{
    return bcrypt.compareSync(password,this.password)
}

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User',userSchema)

