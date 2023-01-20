import React from "react";

import { Component } from "react";

import "./About.css";

import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";

import "./Navbar";
import Navbar from "./Navbar";





function About() {

    return (

        

        <div className="about">
            <Navbar/>

            <h1>About Us</h1>

            <p>What is E-Auction</p>

            <br />

            <p>

                An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder. Some exceptions to this definition exist and are described in the section about different types.

            </p>

            <br />

            <p>

                E-auction is the process of conducting an auction to sell assets,

                natural resources or other goods through online competitive bidding.

                What does a typical e-auction involve? First, the value of the asset being auctioned is ascertained and a floor price — the minimum amount that will be acceptable by the seller — is worked out. Then, those interested in participating have to register themselves on the seller’s online platform. Thereafter, earnest money is collected from the shortlisted buyers.

            </p>

            <br />



            <h3>Browse through some of our videos</h3>

            <br />

            <div className="videos">

                <iframe

                    width="772" height="393"

                    src="https://www.youtube.com/embed/TjizRJBE35Q"

                    title="Online Auction & Bid Complete Details ! How to Buy Cheap Property & Car from Bank's e-Auction"

                    frameborder="0"

                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                    allowfullscreen>

                </iframe>

                <iframe

                    width="699" height="393"

                    src="https://www.youtube.com/embed/Cxb0-EUB2TE"

                    title="Introduction to e-Auctions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                    allowfullscreen></iframe>

                <iframe width="699" height="393" src="https://www.youtube.com/embed/WqB_kioKVQU"

                    title="how to participate in e auction | how to bid online auction | online auction in india" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                    allowfullscreen></iframe>



                <iframe width="755" height="393" src="https://www.youtube.com/embed/QQEEyFN2MI4" title="E AUCTION BIDDER ENROLMENT PROCESS | Registration | मोफत ई लिलाव साठी नोंदणी करा  | Auction Guru |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

        </div>

    );

}



export default About;