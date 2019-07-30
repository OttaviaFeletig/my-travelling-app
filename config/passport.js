const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const key = require("./keys");
const isEmpty = require("is-empty");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const BearerStrategy = require("passport-http-bearer").Strategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;
const googleOpts = {};
googleOpts.clientID = key.google.clientID;
googleOpts.clientSecret = key.google.clientSecret;
googleOpts.callbackURL = "http://localhost:5000/api/users/google/redirect";

module.exports = passport => {
  // passport.use(
  //   new BearerStrategy(function(token, done) {
  //     console.log(token);
  //     User.findOne({ token: token }, function(err, user) {
  //       if (err) {
  //         return done(err);
  //       }
  //       if (!user) {
  //         return done(null, false);
  //       }
  //       return done(null, user, { scope: "all" });
  //     });
  //   })
  // );
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      //jwt payload used for authentication
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
  // passport.serializeUser((user, done) => {
  //   console.log(user);
  //   done(null, user[0]._id);
  // });
  // passport.deserializeUser((id, done) => {
  //   User.findById(id).then(user => {
  //     done(null, user);
  //   });
  // });

  passport.use(
    new GoogleStrategy(
      googleOpts,
      (accessToken, refreshToken, profile, done) => {
        //passport callback function
        // console.log(profile);
        const email = profile.emails[0].value;
        const username = profile.displayName;
        const avatarPicture = profile.photos[0].value;
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);

        User.find({ email: email }).then(currentUser => {
          // console.log(user);
          if (!isEmpty(currentUser)) {
            //login with google
            console.log("user already exists");
            done(null, currentUser);
          } else {
            const newUser = new User({
              username: username,
              email: email,
              avatarPicture: avatarPicture,
              password: "null"
            });
            // console.log(newUser);
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
