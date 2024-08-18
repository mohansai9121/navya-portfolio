import React from "react";
import "./Contact.css";
import phone from "../assests/phone.jpg";
import mail from "../assests/mail.jpg";
import linkedin from "../assests/linkedin.png";
import github from "../assests/github.png";
import location from "../assests/location.jpg";
import refresh from "../assests/refresh.png";
import { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const refreshHandler = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ca14e9b8-fdee-4b3b-be7d-c51ee616debc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div id="contact">
      <div className="heading">
        <h1>Connect with me</h1>
        <p>Feel free to send me a message. You can contact me at any time</p>
      </div>
      <div className="contactDetails">
        <div className="connecting">
          <div className="contact">
            <img src={phone} alt="call" height={30} width={20} />{" "}
            <span>+1 7797778418</span>
          </div>
          <div className="contact">
            <img src={mail} alt="mail" height={20} width={30} />{" "}
            <span> navyaankireddy8418@gmail.com</span>
          </div>
          <div className="contact">
            <img src={linkedin} alt="linkedin" height={25} width={25} />{" "}
            <a
              href="https://www.linkedin.com/in/navya-sri-ankireddy-983392183/"
              target="_blank"
              className="location"
              rel="noreferrer"
            >
              <span style={{ color: "black" }}> My LinkedIn Profile</span>
            </a>
          </div>
          <div className="contact">
            <img
              src={github}
              alt="github"
              height={25}
              width={25}
              style={{ backgroundColor: "white" }}
            />{" "}
            <a
              href="https://github.com/navya9989"
              target="_blank"
              className="location"
              rel="noreferrer"
            >
              <span style={{ color: "black" }}>GitHub profile</span>
            </a>
          </div>
          <div className="contact">
            <img src={location} alt="location" height={30} width={20} />{" "}
            <a
              href="https://maps.app.goo.gl/qnUEv1oGsZy2KULcA"
              target="_blank"
              className="location"
              rel="noreferrer"
            >
              {" "}
              <span style={{ color: "black" }}>Dekalb, IL, USA.</span>
            </a>
          </div>
        </div>
        <div>
          <form className="form" onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter your name..."
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email..."
            />
            <label htmlFor="message">Message:</label>
            <textarea
              rows={5}
              id="message"
              name="Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your mesaage..."
            />
            <center>
              <button type="submit" className="submit">
                Send Message
              </button>
              <img
                src={refresh}
                alt="refresh"
                height={20}
                width={20}
                onClick={refreshHandler}
                className="refresh"
                title="Refresh"
              />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
