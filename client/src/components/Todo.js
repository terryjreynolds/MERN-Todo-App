
import React, { Component } from "react";
import axios from "axios";
import Input from "./Input";
import ListTodo from "./ListTodo";
import Modal from "./Modal";
import "../App.css";
import { truncateDate } from "../helpers";

/*This is the stateful class component that gets displayed in the main 
React App component*/
class Todo extends Component {

  constructor(props) {
    super(props);

  this.state = {
    todos: [],
    show: false,
    action: "",
    editableId: "",
    buttonState: "",
    date: "",
    displayFlash: false,
    msg: ''
  };
  }
  /*upon page load, an array of todos is queried from db and displayed.*/

  componentDidMount() {   
  this.getTodos(); 
  }
  
  findUserName = () => {
    console.log('infindUserName');
     const user = this.props.location.state.username;
     console.log('user', user);
  if (user) {
    return user;
  }else {
    return '';
  }
  }
  /* function follows the axios route to retrieve an array of all actions
and their corresponding id*/

  getTodos = () => {
    axios
      .get("/api/get/todos")
      .then(res => {
        if (res.data) {
          console.log("resdata", res.data);
          this.setState({
            todos: res.data,
            show: false,
            action: "",
            editableId: ""
          });
        }else {
          console.log('nothing');
        }
      })
      .catch(err => console.log(err));
  };

  /* function follows the axios route to delete a db entry
upon click of the todo item itself-TJR*/
  deleteTodo = (id) => {
    
    axios
      .delete(`/api/delete/todos/${id}`)
      .then(res => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch(err => console.log(err));
  };

  editTodoModal = (id, action) => {
    this.setState({
      show: true,
      action: action,
      editableId: id,
      date: truncateDate(Date(Date.now))
    });

    console.log("im in showmodal", id, action);
  };
  modalUpdate = e => {
    this.setState({
      action: e.target.value
    });
  };

  /* function follows the axios route to a put function called findOneAndUpdate to edit an entry selected by id-TJR*/
  sendModalActionToDatabase = e => {
    e.preventDefault();
    console.log("im in sendModalActionToDatabase");
    console.log("todoarray", this.state.todos);
    console.log('editableId', this.state.editableId);
    axios
      .put(
        `/api/update/todos/${this.state.editableId}/${this.state.action}/${
          this.state.date
        }`
      )
      .then(res => {
        if (res.data) {
          console.log("send Modal resdata", res.data);
          this.getTodos();
        }
      })
      .catch(err => console.log(err));
  };

  cancelEditing = () => {
    this.setState({
      show: false,
      action: "",
      editableId: "",
    });


  };
//function is passed as props to input.js so it may display flash here
  controlDisplayFlash = (toggle, msg) => {
    console.log('in controlDisplayFlash');
    this.setState({
      displayFlash: toggle,
      msg: msg
    });
const self = this;
    setTimeout(function() {
      self.setState({
        displayFlash: false,
       msg: ''
     }); 
         console.log('stateafterTodoflash', this.state);
     }, 2000);
  };

  render() {
    console.log('rendering Todo');
    let { todos } = this.state;
    console.log('todos', todos);
    const defaultTitle = 'The Obligatory Todo App';
    const name = `${this.props === {} ? defaultTitle : `Welcome, ${this.props.location ? this.props.location.state.username : ''}!`}`;
   
  
    return (      
      <div className='slideIn'>
             
          <h1>{name}</h1>
          <h5 className={this.state.displayFlash ? 'displayFlash' : 'hideFlash'}>{this.state.msg}</h5>
        <Modal
          cancelEditing={this.cancelEditing}
          modalUpdate={this.modalUpdate}
          sendModalActionToDatabase={this.sendModalActionToDatabase}
          action={this.state.action}
          editableId={this.state.editableId}
          show={this.state.show}
        />

        <div className={this.state.show ? "hideInput" : "showInput"}>
          <Input controlDisplayFlash={this.controlDisplayFlash} getTodos={this.getTodos} />
        </div>

        <ListTodo
          show={this.state.show}
          editTodoModal={this.editTodoModal}
          onFocus={this.onFocus}
          todos={todos}
          deleteTodo={this.deleteTodo}
        />
        
      </div>
      
    );
  }
}

export default Todo;
