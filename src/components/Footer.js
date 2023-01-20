import React from "react";

import "./FooterStyles.css";



function Footer() {

    return (

        <section>

            <footer>

                <div className="main-footer">

                    <div className="box-container">

                        {/*  Column1 */}

                        <div className="row">

                            <div>

                                <center>

                                    <p><a href="/copyrightpolicy">Copyrightpolicy</a></p>

                                    <p>Best viewed in IE 11 & above. Resolution 1024 x 768 pixels or higher</p>

                                </center>

                            </div>

                        </div>



                        <center>

                            <p><div className="credit"> © Copyright 2023 <span>Group 4</span> </div></p>

                        </center>

                    </div>

                </div></footer>



        </section>



    );

}



export default Footer;