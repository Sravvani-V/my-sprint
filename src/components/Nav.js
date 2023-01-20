import { Component } from "react";

import "./NavbarStyles.css";

import { MenuItems } from "./MenuItems";

import { Link } from "react-router-dom";



class Navbar extends Component {
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
        <h1 className="navbar-logo"> eAuction </h1>
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
          <button>Login</button>
        </ul>
      </nav>
      </div>
     

    );

  }

}

export default Navbar;