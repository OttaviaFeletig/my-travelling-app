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
        username: req.user.username,
        avatarPicture: req.user.avatarPicture,
        message: req.body.message,
        itineraryId: req.body.itineraryId
    })

    console.log(newComment)

    newComment
        .save()
        .then(comment => res.json(comment))
        .catch(err => console.log(err));
})

router.get('/', (req, res) => {
    commentsModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});


router.get('/itineraries/:id', (req, res) => {
    let currentItineary = req.params.id;
    console.log(currentItineary)
    commentsModel.find({'itineraryId': currentItineary}, (err, itineraryList) => {
        if (err) throw err;
        console.log(itineraryList);
        res.send(itineraryList);
    });
});
module.exports = router

