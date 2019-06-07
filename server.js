require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const cors = require("cors");

const passport = require("passport");

const app = express();

//importing the mongoURI
const db = require("./config/keys").mongoURI;

// const googleKey = require("./config/keys").google.googleKey;

// const cookieSession = require("cookie-session");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
//importing the routes
const cityRoutes = require("./routes/api/cities");
const itineraryRoutes = require("./routes/api/itineraries");
const userRoutes = require("./routes/api/users");
const commentRoutes = require("./routes/api/comments");

// const db = {
//     mongoURI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}-ikrcd.mongodb.net/myTravellingApp?retryWrites=true`,

// };

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("connected!"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());
// app.use(passport.session());
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [googleKey]
//   })
// );
//passport configuration
require("./config/passport")(passport);

//using the routes for a specific api
app.use("/api/cities", cityRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
  console.log(process.env.MONGODB_NAME);
});
