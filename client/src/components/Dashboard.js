import React from "react";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
        ready: false
    };



  }
  componentDidMount() {
    this.setState({
      ready: true
    });
  }

  render() {
   console.log('rendering Dashboard');
    return (
      //state style change to combat FOUC
        <div className="dashboardTitle" style={{visibility: this.state.ready ? 'visible' : 'hidden'}}> 
            <h1>The Obligatory ToDo App</h1>
            <h4>Todo Together</h4>      
      </div>
    );
  }
}

export default Dashboard;