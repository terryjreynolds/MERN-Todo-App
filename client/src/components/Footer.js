
import React, { Component } from "react";


class Footer extends Component {
    render() {
      console.log('rendering Footer');
     
      return (
          <div> 

          <footer className="footer"><p style={{margin: '.5vw'}}>Obligatory Todo App  <a href="https://terryjreynolds.github.io" target="_blank" 
        rel="noopener noreferrer"
        style={{color: '#7f5a83', margin: '.2vw'}}>  Terry Reynolds </a>, 2018 {'\u00A9'}</p>
        </footer> 

          </div>      
      );
    }
  }
  
  export default Footer;










