import React, { useState } from "react";
import Navbar from "./Navbar";

import './Contact.css';

import { Link } from "react-router-dom";



const FORM_ENDPOINT = ""; // TODO - fill on the later step



const Contact = () => {

   

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);

    };



    if (submitted) {

        return (

            <>

                <h2>Thank you!</h2>

                <div>We'll be in touch soon.</div>

            </>

        );

    }



    return (

        <form

            action={FORM_ENDPOINT}

            onSubmit={handleSubmit}

            method="POST"

            target="we will be in touch soon"

        >

            <div className="s">

                <h3>Name</h3>

                <input type="text" placeholder="Your name" name="name" required />

            </div>

            <div>

                <h3>Email</h3>

                <input type="email" placeholder="Email" name="email" required />

            </div>

            <div>

                <h3>Message</h3>

                <textarea placeholder="Your message" name="message" required />

            </div>

            <div>

                <button type="submit"> Send a message </button>

            </div>

        </form>

    );

};



export default Contact;