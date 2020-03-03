import React from "react";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
        
    };

  }
  

  render() {
   console.log('rendering Dashboard');
   
    return (
        <div className="dashboardTitle" > 
            <h1>The Obligatory ToDo App</h1>
            <h4>Todo Together</h4>      
      </div>
    );
  }
}

export default Dashboard;