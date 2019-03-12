require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const cityRoutes = require('./routes/api/cities');
// const uri = "mongodb+srv:/newUser1/:newUser1@my-travelling-app-ikrcd.mongodb.net/myTravellingApp?retryWrites=true";
const mongoDb = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}-ikrcd.mongodb.net/myTravellingApp?retryWrites=true`;
console.log(mongoDb)
mongoose.connect(mongoDb, {useNewUrlParser: true})
    .then(() => console.log('connected to '))
    .catch(err => console.log(err));


app.use('/api/cities', cityRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running on ' + port + 'port')
    console.log(process.env.MONGODB_NAME)
    }
    
);

// const router = express.Router();

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://newUser1:newUser1@my-travelling-app-ikrcd.mongodb.net/myTravellingApp?retryWrites=true";

// const client = new MongoClient(uri, {
//     useNewUrlParser: true
// });

// client.connect(err => {
//     console.log('connected!')
//     console.log('error in connect ' + err)
//     const collection = client.db("myTravellingApp").collection("cities");

//     findCities(collection, function() {
//         console.log('in callback function')
//         client.close();
//     })
//     postCities(collection, function() {
//         console.log('in callback function')
//         client.close();
//     }) 

//     app.listen(port, () =>
//     console.log('Server is running on ' + port + 'port')
//     );
// });

// const findCities = (collection, callback) => {
//     router.get('/cities', (req, res) => {
//         console.log('in find cities')
//         collection.find().toArray((err, results) => {
//             if (err) throw err;
//             console.log(results)
//             res.send(results)
//             callback()
//         });
//     });
// }
// const postCities = (collection, callback) => {
//     router.post('/cities', (req, res) => {
//         var city = {
//             name: req.body.name,
//             country: req.body.country
//         };
//         collection.insertOne(city, (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.send('city added successfully');
//             callback();
//         })
//     });
// }


