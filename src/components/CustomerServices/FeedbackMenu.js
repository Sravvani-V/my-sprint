import React, { useState } from "react";



import './FeedbackStyles.css';

import { Link } from "react-router-dom";




const FORM_ENDPOINT = ""; // TODO - fill on the later step



const FeedbackMenu = () => {

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

      <div className="w">

        <div className="v">



          <h3>Name</h3>

          <input type="text" placeholder="Your name" name="name" required />

        </div>

        <div>

          <h3>Feedback</h3>

          <textarea placeholder="Your message" name="message" required />

        </div>

        <div>

          <button type="submit"> submit your Feedback </button>

        </div>

      </div>

    </form>

  );

};



export default FeedbackMenu;