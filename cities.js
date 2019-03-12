const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in find cities')
    collection.find().toArray((err, results) => {
        if (err) throw err;
        console.log(results)
        res.send(results)
        callback()
    });
});