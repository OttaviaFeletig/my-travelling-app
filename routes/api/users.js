const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userModel = require('../../models/user');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

router.post('/register', (req, res) => {

    //check if email already exists in database
    userModel.findOne({email: req.body.email})
        .then(user => {
            if(user){
                return res
                    .status(400)
                    .json({error: 'This email has been already used!'});
            }
            if(req.body.password !== req.body.passwordConfirmation){
                return res
                    .status(400)
                    .json({error: 'The passwords do not match'})
            }

            //create new user
            const newUser = new userModel({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatarPicture: req.body.avatarPicture  
            });
          
            //hash password before saving it
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        });
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //find user by email

    userModel.findOne({email}).then(user => {
        //check if user exists
        if(!user) {
            return res.status(400).json({emailnotfound: 'Email not found'});
        }

        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                //create JWT payload
                const payload = {
                    username: user.username,
                    avatarPicture: user.avatarPicture
                };

                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3600 
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: token,
                        });
                    }
                );
            } else {
                return res 
                    .status(400)
                    .json({ passwordincorrect: 'Password incorrect' })
            }
        })
        .catch(err => console.log(err));
    });
});



module.exports = router