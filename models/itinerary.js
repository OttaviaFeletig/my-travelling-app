const mongoose = require('mongoose')

const itinerariesSchema = new mongoose.Schema({
    city: {
        // //telling mongoose that I will be referencing other objects from other collections
        // type: mongoose.Schema.Types.ObjectId,
        // //telling mongoose which model to use
        // ref: 'city'
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    profilePic: String,
    rating: Number,
    duration: {
        type: Number,
        required: true
    },
    price: Number,
    hashtag: Array
})

//name if module is the singular of how the database is called
module.exports = mongoose.model('itinerary', itinerariesSchema)