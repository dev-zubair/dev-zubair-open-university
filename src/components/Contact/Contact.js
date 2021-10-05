import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-field">
      <h2>Contact Us</h2>
      <div className="input-field">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="email" name="" id="" placeholder="Email" />
        <input type="text" name="" id="" placeholder="Comment" />
      </div>
      <div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
