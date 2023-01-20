import { Component } from "react";

import "./VendorStyles.css";

import { VendorMenu } from "./VendorMenu";

import { Link } from "react-router-dom";



class VendorDashboard extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="home-img">
      {/* //creating nav bar */}
      
      <nav className="NavbarItems">
        {/* adding the logo */}
        <h1 className="navbar-logo"> Vendor </h1>
        {/* To make our website responsive */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {VendorMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button>LogOut</button>
        </ul>
      </nav>
      </div>
     

    );

  }

}

export default VendorDashboard;