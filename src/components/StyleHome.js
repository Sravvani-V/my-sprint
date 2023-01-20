import "./StyleHome.css";

import React from "react";
import about from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";
import auction from "../assets/auction.jpg";

function StyleHome() {
    return (
        <div>
            
           


            {/* <div className="hero">
        <img alt="HerpImg" src="https://plus.unsplash.com/premium_photo-1658506826316-f21670ec809e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"/>

        <div className="hero-text" >
            <h1>Your Product At Your Price</h1>
            <p>Choose best Products at best prices</p>
            <br></br><br></br>
            <center><a href="/" className="show">
                Auction Ideas
            </a></center>

            

        </div> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">

                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>

                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

                </ol>

                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <img src={about} class="d-block w-100"  alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <h3><b>Get Your Product At Your Price</b></h3>

                            {/* <p>WELCOME to eAuction</p> */}

                        </div>

                    </div>

                    <div class="carousel-item">

                        <img src={about2} class="d-block w-100"  alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <h5>WELCOME TO</h5>

                            <p>E-Auction</p>

                        </div>

                    </div>

                    <div class="carousel-item">

                        <img src={auction} class="d-block w-100"  alt="..." />

                        <div class="carousel-caption d-none d-md-block">

                            <h4><b>Find Best Products at Best Prices</b></h4>

                            {/* <p>E-Auction</p> */}

                        </div>

                    </div>

                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                    <span class="sr-only">Previous</span>

                </a>

                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">

                    <span class="carousel-control-next-icon" aria-hidden="true"></span>

                    <span class="sr-only">Next</span>

                </a>

            </div>
        </div>
    );


}
export default StyleHome;