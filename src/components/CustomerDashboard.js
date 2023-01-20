import { Component } from "react";

import "./CustomerStyles.css";

import { MenuItems } from "./CustomerMenu";

import { Link } from "react-router-dom";



class CustomerDashboard extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="home-img">
        
        {/* <img src={"https://media.istockphoto.com/id/1278040502/photo/businessman-touching-global-networking-data-online-shopping-with-icon-customer-worldwide.jpg?b=1&s=170667a&w=0&k=20&c=TqfhTEHlandRzXi2UzQNCkK5dITj8_gojslGiDSLQxU="}></img> */}

        <img src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1c3RvbWVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></img>
      

        
        
      {/* //creating nav bar */}
      <nav className="NavbarItems">
        {/* adding the logo */}
        <h1 className="navbar-logo" style={{color:"blue"}}> <b>Customer</b> </h1>
        {/* To make our website responsive */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button>Logout</button>
        </ul>
      </nav>
      </div>
     

    );

  }

}

export default CustomerDashboard;