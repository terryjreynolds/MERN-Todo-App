//this file instantiates the server
const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const routes = require("./routes/api");
const users = require("./routes/users");

require("dotenv").config();

//Init app
const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose
  .connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;
/* The following part sets rules for requests. the app.use indicates this and so it's middleware*/

/*this one and the body parser below lack paths, which means they get applied to EVERY SINGLE REQUEST --TJR*/

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(require("body-parser").urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

// app.use(cookieParser());

//Set Public Folder
app.use(express.static(path.join(__dirname, "public")));

//Express Session Middleware
app.use(
  session({
    secret: "keyboard cat", //pick random string to make generated hash session id
    resave: false, //required
    saveUninitialized: false //required
  })
);

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});
//Flash Messages
app.use(require("connect-flash")());

//Express Messages Middleware
// app.use(function (req, res, next) {
//   res.locals.messages = require('express-messages')(req, res);
//   next();
// });

//Passport Config
require("./config/passport")(passport);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Home api route ie: the routes/api file
app.use("/api", routes);

//Route User Files here
app.use("/users", users);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
