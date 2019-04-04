//connecting to mongo database

module.exports = {
    mongoURI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}-ikrcd.mongodb.net/myTravellingApp?retryWrites=true`,
    secretOrKey: "secret"    
};