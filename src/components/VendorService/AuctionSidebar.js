import React from "react";

import { Link } from 'react-router-dom';

// import Navbar from "./Navbar";
import "./AuctionSidebar.css";



import {  IoIosArrowDroprightCircle,  IoIosHome} from "react-icons/io";

const AuctionSidebar = () => {

    return (

        <div className="sidebar2">

            <ul className="ulitem">

                <li>

                    <IoIosHome className="icon" />

                   

                    <Link to="/auction/dashboard"><p className="text">Home</p></Link>

                   

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                   

                    <Link to="/auction/create"><p className="text">Create Auction</p></Link>

                   

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/auction/update"><p className="text">Update Auction</p></Link>

                </li><br></br>

                <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/auction/view/auctions"><p className="text">View All Auctions</p></Link>

                </li><br/><br/>

                {/* <li>

                    <IoIosArrowDroprightCircle className="icon" />

                    <Link to="/product/all"><p className="text">All Products</p></Link>

                </li> */}

            </ul>

            <div>

            </div>

        </div>

    )

}

export default AuctionSidebar;