import React from "react";
import Navbar from "./Navbar";
import StyleHome from "./StyleHome";
import image from "../assets/contact.jpg";
import img from "../assets/contact2.jpg";
import Footer from "./Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <StyleHome/>
        <Footer/>

        {/* <div className='html'>

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active">

                            <img class="d-block w-100" src="https://plus.unsplash.com/premium_photo-1658506826316-f21670ec809e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80" alt="First slide" />

                        </div>

                        <div class="carousel-item">

                            <img class="d-block w-100" src={img} alt="Second slide" />

                        </div>

                        <div class="carousel-item">

                            <img class="d-block w-100" src={image} alt="Third slide" />

                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                        <span class="sr-only">Previous</span>

                    </a>

                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">

                        <span class="carousel-control-next-icon" aria-hidden="true"></span>

                        <span class="sr-only">Next</span>

                    </a>

                </div>


            </div> */}
        </>
    
    ); 
        
    
}
export default Home;
