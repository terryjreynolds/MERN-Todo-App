
const mongoose = require("mongoose");
const express = require('express');
const router= express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Bring in User Model

let User = require('../models/users');


//Register Process
router.use(express.json());


//Validation begins ---Express-based
const { check, validationResult } = require('express-validator');



// router.get("/register", (req, res, next) => {
//     //this will return all the data, exposing only the id and action field to the client
//     User.find({})
//       .then(data => res.json(data))
//       .catch(next);
//   });


 

router.post('/register', [   
    //name is not empty
    check('name', 'Name is required').notEmpty(),
    //email is not empty
check('email', 'Valid email is required')
.notEmpty()
.isEmail()
.withMessage('Valid email is required')
    .custom(async value => {
 
      const user = await User.exists({ email: value })

        if (user) {
            
            throw new Error('Email already registered');
          
        } else {
        return value;
        }
    }),
    // username is not empty
    check('username', 'Username is required')
    .notEmpty()
    .custom(async value => {
        const username = await User.exists({ username: value })

        if(username) {
            throw new Error('Username already registered');
        }else {
            return value;
        }
    }),

  
    // password must be at least 5 chars long and be confirmed
    check("password", 'Valid password is required')
    .notEmpty()
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 chars long')
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.password2) {
                // throw error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        }),
        check('password2', 'Password Confirmation required')
        .notEmpty()
        .isLength({min: 5})
        .withMessage('Password Confirmation required')

        
    
  ], (req, res) => {
    
//Finds the validation errors and wraps in object with handy functions
const errors = validationResult(req);
if (!errors.isEmpty()) {
    //uses the express Result array of objects to isolate the error message
    const errMsg = ((errors.array())[0]).msg
    
   console.log('errors', errMsg);

  return res.json({ errors: errors.array() });
  
} else {


    //create a User object that obeys the mongoose schema- User
  const newUser = new User({     
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        tasks: []
    })
   


//hash the password, store it in newUser object and save to MongoDB
        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(newUser.password, salt, function(err, hash) {
                if(err){
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save(function(err){
                    if(err) {
                        console.log('didnt work', err);
                        return handleError(err);
                    } else {
                        
                        console.log('successful registration');
                    
                        // req.flash('success','You are now registered and can log in');
                         //res.redirect('/');
                    }
                });
            });
        });
        const success = 'Registration Successful'
        return res.json({success});
    } 
    });

    //Login post route
    router.post('/login', function(req, res, next){
        console.log('requestbody', req);
        next();
    },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      const userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
  }
  
    );

module.exports = router;