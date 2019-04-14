const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const isEmpty = require('is-empty');

const commentsModel = require('../../models/comment');
const userModel = require('../../models/user');



router.post('/', passport.authenticate("jwt", { session: false }), (req, res) => {
    // console.log(req);
    userModel.findById(req.user.id, (err, user) => {
        if(err) throw new Error(err);
    })

    console.log(req);
    console.log(req.user);
    const newComment = new commentsModel({
        user: req.user.id,
        message: req.body.message,
        itineraryId: req.body.itineraryId
    })

    console.log(newComment)

    newComment
        .save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));
})
// router.post('/', (req, res) => {
//     const { message, username, email, avatarPicture, itineraryId } = req.body;
//     userModel.findOne({ email: email })
//         .then(user => {
//             if(!user){
//                 return res
//                     .status(401)
//                     .json({error: 'You do not have an account, please create one first'})
//             }

//             if(isEmpty(message)){
//                 return res 
//                     .status(401)
//                     .json({error: 'The message cannot be empty'})
//             }

//             const newComment = new commentsModel({
//                 // user: req.body.user,
//                 username: username,
//                 email: email,
//                 avatarPicture: avatarPicture,
//                 message: message,
//                 itineraryId: itineraryId
//             })
//             newComment
//                 .save()
//                 .then(comment => res.json(comment))
//                 .catch(err => console.log(err));

//         })
// })

router.get('/', (req, res) => {
    commentsModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});


// router.get('/itineraries/:id', (req, res) => {
//     let currentItineary = req.params.id;
//     console.log(currentItineary)
//     commentsModel.find({'itineraryId': currentItineary}, (err, itineraryList) => {
//         if (err) throw err;
//         console.log(itineraryList);
//         res.send(itineraryList);
//     });
// });
module.exports = router

