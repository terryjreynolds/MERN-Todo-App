const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const User = require('../models/users');

router.get("/get/todos", (req, res, next) => {
  console.log('im in getting todos');
  //this will return all the data, exposing only the id and action field to the client
  const userid = req.user._id
  console.log('userid', userid);
  User.findById(userid, function(err, user) {

    if (err) {console.log('error', err);}
    
  })
    .then(user => res.json(user.tasks))
    .catch(next);
});

// take the object passed to req --action and edited--
// find the document registered to the current session and create those 
//properties in a sub-object on the document. If no document, redirect to signup screen
router.post("/todos", (req, res, next) => {
  console.log('im in post todo');
  if (req.body.action) {
    console.log("resbody", req.body.action);
    User.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty"
    });
  }
});

router.delete("/delete/todos/:id", (req, res, next) => {
  console.log('im in deleting todos', req.params.id);
  User.findById(req.user._id, function(err, user) {

    ///Some Javascript to manipulate the tasks array
   let array = user.tasks;

   //find the index of the element in array that has the given id
//use that index to splice the array and remove that element
//set the old array to the new array
 array.splice(array.findIndex((element) => element.id === req.params.id), 1);
      
    if (err) throw err;
    
    //save the updated array by saving the entire user object
    user.save(function(err){
      if(err) throw err;
    })  
     })
     const success = 'Successful Deletion';
     return res.json({success});
});

//user account is verified and will be deleted by user's choice

router.delete("/deleteAccount/:id", function (req, res){
  User.findByIdAndDelete(req.params.id, function (err){
      if(!err) {
        
          res.send({success: 'Account Deleted'});
      }else {
          res.send({error: 'Error: Account Not Deleted'});
      }
  })
  });

/*Terry made this one as a first step toward editing db posts. I think it should identify a post by its id and allow me to call a function to update its contents, but idk*/
router.put("/todos/", (req, res, next) => {
  console.log('im in put');
  console.log('put req',req.body);
  const task = req.body.task;
  const isEmpty = (req.user.tasks).length;
 console.log('isEmpty', isEmpty);
 if(isEmpty.length !== 0) {
   console.log('im in regular update');
  User.updateOne(
    { _id: req.user._id},
    
    {$push: {tasks: req.body}}
    
  )
  .then(data => res.json(data))
    .catch(next);
 } else {
   console.log('im in update else');
  User.updateOne(
    { _id: req.user._id},
    
    {tasks: task}
    
  )
  .then(data => res.json(data))
    .catch(next);
 }
    
});

//a put route to handle updating pre-existing tasks userid.tasks.editatbleId
router.put("/update/todos/:editableId/:action/:date/", (req, res) => {
 User.findById(req.user._id, function(err, user) {

//Some Javascript to manipulate the tasks array
//find the index of the tasks element with the editableId 
   const arr = user.tasks;
   const arrElementById = (el) => el.id === req.params.editableId;

//use the found index to update the action and date from user input
user.tasks[arr.findIndex(arrElementById)].action = req.params.action;
user.tasks[arr.findIndex(arrElementById)].edited = req.params.date;
   
if (err) throw err;

//save the updated array by saving the entire user object
user.save(function(err){
  if(err) throw err;
})  
 })
 const success = 'Successful Task Update';
 return res.json({success});
});

module.exports = router;
