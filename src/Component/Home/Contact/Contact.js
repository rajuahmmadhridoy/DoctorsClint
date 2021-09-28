import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div id="contactContainer" className="container">
        <div className="contactContent">
          <h4>CONTACT US</h4>
          <h3>Always Connect With Us</h3>
          <form action="">
            <input placeholder="Email Address*" type="email" name="email" id="" />
            <br />
            <input placeholder="Subject*" type="text" name="" id="" />
            <br />
            <textarea placeholder="Your Message"></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    </div>
  );
};

export default Contact;
