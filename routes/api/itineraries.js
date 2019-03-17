const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const itineraryModel = require('../../models/itinerary')

router.get('/', (req, res) => {
    itineraryModel.find()
    //telling mongoose to populate the field city in the itineraries model with the value of id and name of the model city
        // .populate('city', ['id', 'name'])
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    let cityRequested = req.params.id
    console.log(cityRequested)
    itineraryModel.find({'city' : cityRequested}, (err, itineraryList) =>{
        if (err) throw err;
        console.log(itineraryList)
        res.send(itineraryList)
    })
});

module.exports = router