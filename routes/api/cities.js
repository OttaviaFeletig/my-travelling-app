const express = require('express');
const router = express.Router();

const cityModel = require('../../models/city')
//in this way we can create different routes for the same page
router.get('/', (req, res) => {
    console.log('in find cities')
    cityModel.find({})
        .then(files => {
            console.log(files)
            res.send(files)
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    let addCity = new cityModel({
        name: req.body.name,
        country: req.body.country
    })
    console.log(addCity)
    addCity.save((err, files) => {
        if(err) {console.log(err)}
        console.log(files)
        res.status(201).json(files)
    })
        
    });

module.exports = router;