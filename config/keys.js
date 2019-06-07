//connecting to mongo database

module.exports = {
  mongoURI: `mongodb+srv://${process.env.MONGODB_USER}:${
    process.env.MONGODB_PASSWORD
  }@${
    process.env.MONGODB_NAME
  }-ikrcd.mongodb.net/myTravellingApp?retryWrites=true`,
  secretOrKey: `${process.env.SECRET_KEY}`,
  google: {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    // googleKey: `${process.env.GOOGLE_SECRET_KEY}`
  }
};
