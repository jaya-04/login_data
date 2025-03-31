const express = require('express');
const mongoose = require('mongoose');

const SignUp = require('./models/signUp.model');
console.log(SignUp);

const app = express();
app.use(express.json());

const port = 4000;
const mongodb_uri = 'mongodb+srv://kruthan08:lKTr7TfSp7VIC1f4@auction.cxp8n.mongodb.net/auction_system';

mongoose.connect(mongodb_uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });

app.get('/', (req, res) => {
    res.send('Hello! The sign up  is working.');
});

app.post('/signin', async(req, res) => {
    console.log("signup GET request is called");

    const {rollNo , password} = req.body;

    if(!rollNo || !password){
        return res.status(400).json({error: " in valid"});
    }
    const user = await SignUp.findOne({rollNo});

   
    
    SignUp.find()
        .then(auctions => res.json(auctions))
        .catch(err => res.status(400).json('Error: ' + err));
});
app.post('/signup', (req, res) => {
    console.log("info is added");
    const newSignUp = new SignUp(req.body);
    newSignUp.save()
        .then(() => res.json("data added "))
        .catch(err => res.status(400).json("Error: " + err));
});

