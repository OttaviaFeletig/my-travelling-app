require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

const cityRoutes = require('./routes/api/cities');
const itineraryRoutes = require('./routes/api/itineraries')

const mongoDb = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}-ikrcd.mongodb.net/myTravellingApp?retryWrites=true`;

mongoose.connect(mongoDb, {useNewUrlParser: true})
    .then(() => console.log('connected!'))
    .catch(err => console.log(err));


app.use('/api/cities', cityRoutes);
app.use('/api/itineraries', itineraryRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running on ' + port + 'port')
    console.log(process.env.MONGODB_NAME)
    }
    
);


