import React, { Component } from "react";
import axios from "axios";

import { truncateDate } from "../helpers";

class Input extends Component {

  constructor(props) {
    super(props);

  //create a ref to the todo input field
 this.textInput = React.createRef();


  this.state = {
    action: "",
    edited: truncateDate(Date()),
  };

}

componentDidMount(){
  this.textInput.current.focus();
}
componentDidUpdate(){
  this.textInput.current.focus();
}

  addTodo = e => {
    e.preventDefault();
const self = this;
    const task = { action: this.state.action, edited: (this.state.edited)[0]};
    console.log('task', task);

    if (task.action && task.action.length > 0) {
      axios
        .put("/api/todos", task)
        .then(res => {
          console.log("res", res);
          if((res.data).hasOwnProperty('failure')) {
            //push the failure msg to an array so the flash functions
            //receive the correct data structure
            let messages = [];
             messages.push(res.data.failure);
            console.log('messages', messages);
           
          const delay = 2000;
                   
          //displays the flash messages
          function display(str) {
            console.log(str);
            self.props.controlDisplayFlash(true, str);         
          }
          
          //loop through the messages and pass to function that will display them
          const flashErrors = (fn, delay) => {
            return (msg, i) => {
              setTimeout(() => {
                //the function to setState
                fn(msg);
              }, i * delay);
            }
          };
          
          messages.forEach(flashErrors(display, delay));
                    
           setTimeout(function() {
           self.setState({
            action: '',
            edited: []
          }); 
              
          }, delay);

        } else if (res.data){

            this.props.getTodos();
            self.setState({ action: "" });
        }
      
      })
    
      .catch(err => console.log(err));
    } 
        
  };      

  handleChange = e => {
    this.setState({
      action: e.target.value
    });
  };


  render() {
    console.log('rendering input')
    let { action } = this.state;

  

    return (
<div>
     
      <form onSubmit={this.addTodo}>
      
        <input
        ref={this.textInput}
          placeholder="Create a new to-do item"
          type="text"
          onChange={this.handleChange}
          value={action}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
      
    );
  }
}

export default Input;
