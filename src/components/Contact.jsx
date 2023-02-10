import React from "react";
import '../App.css';


const Contact = () => {
    return (
        <div>
            <div className="contact-box">
                <h1 className="contact-title">Contact</h1>
            </div>
            <div className="cont" id="Contact">
                <form action="./send-main.php">
                    <label for="fname" className="name1">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className="name"/>
                    <label for="lname" className="lname1">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="lname" />
                    <label for="email" className="mail1">Email</label>
                    <input id="email" name="subject" placeholder="Your Email adresse" className="mail"/>
                    <label for="subject" className="text1">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." className="text"></textarea>
                    <input type="submit" value="Submit"className="button"/>
                </form>
                <div>
                    <p className="contact-text">To contact me, nothing simpler. Simply enter your Last Name, First Name, and a valid email address, so that I can answer you the best</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;