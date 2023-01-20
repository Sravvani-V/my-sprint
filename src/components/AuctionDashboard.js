import { Component } from "react";
import { MenuItems } from "./AuctionMenu";
import { Link } from "react-router-dom";

class AuctionDashboard extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        return (
            <div class="bg-img">
                <img src="https://cdn.siasat.com/wp-content/uploads/2021/07/E-Auction.jpg"></img>

                <nav className="NavbarItems">
                    <h1 className="navbar-logo"> <b>Auction Management</b> </h1>
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
                    </ul>
                </nav>
            </div>
        );

    }
}
export default AuctionDashboard;