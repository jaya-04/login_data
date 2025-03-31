const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
        name:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        dob: {
            type: String,
            require: true
        },
        rollNo:{
            type: String,
            require: true,
            unique: true
        },
        collegeName:{
            type: String,
            require: true
        }
    },{
      Timestamps: true,
    },{ collection: 'signup' }
);

const SignUp = mongoose.model('SignUp', signUpSchema);

module.exports = SignUp;