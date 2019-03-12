const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    name: String,
    country: String,
    
})

//name if module is the singular of how the database is called
module.exports = mongoose.model('city', citiesSchema)