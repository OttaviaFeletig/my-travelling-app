const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("../models/user");
const key = require("./keys");
const isEmpty = require("is-empty");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;
const googleOpts = {};
googleOpts.clientID = key.google.clientID;
googleOpts.clientSecret = key.google.clientSecret;
googleOpts.callbackURL = "http://localhost:5000/api/users/google/redirect";

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      //jwt payload used for authentication
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user && user.loggedIn) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new GoogleStrategy(
      googleOpts,
      (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value;
        const username = profile.displayName;
        const avatarPicture = profile.photos[0].value;
        User.findOne({ email: email }).then(currentUser => {
          if (!isEmpty(currentUser)) {
            //login with google
            console.log("user already exists");
            currentUser.loggedIn = true;
            console.log("currentUser", currentUser);
            currentUser.save().then(res => done(null, res));
          } else {
            const newUser = new User({
              username: username,
              email: email,
              avatarPicture: avatarPicture,
              oAuth: true,
              favoriteItineraries: [],
              loggedIn: true
            });
            newUser.save().then(user => {
              console.log("new user created" + user);
              done(null, user);
            });
          }
        });
      }
    )
  );
};
