const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userModel = require('../../models/user');

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



module.exports = router