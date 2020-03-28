const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");
const bcrypt = require("bcryptjs");

module.exports = function(passport) {
  //Local Strategy
  passport.use(
    new LocalStrategy(function(username, password, done) {
      console.log("passport", username, password);
      //Match Username
      User.findOne({ username: username }, function(err, user) {
        console.log("findingOne");
        if (err) {
          return done(err);
        }

        if (!user) {
          console.log("its not the user");
          return done(null, false, { message: "No user found" });
        }
        //Match Password
        bcrypt.compare(password, user.password, function(err, isMatch) {
          // if(err)  { return done(err) };
          if (isMatch) {
            console.log("its a match");
            return done(null, user);
          } else {
            console.log("its not a match");
            return done(null, false, { message: "Wrong password" });
          }
        });
      });
    })
  );

  //Called when user is added into the session. Only stores user id in the session
  passport.serializeUser(function(user, done) {
    console.log("serialize user", user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log("deserialize", id, user);
      done(err, user);
    });
  });
};
