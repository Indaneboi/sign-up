import React, { useState } from "react";
import "./App.css";
import TopNavigation from "./topnav.js";
import Footer from "./Footer";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    phn: "",
    email: "",
    pass: ""
  });

  function handler(event) {
    const { value, name } = event.target;

    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          phn: preValue.phn,
          email: preValue.email,
          pass: preValue.pass
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          phn: preValue.phn,
          email: preValue.email,
          pass: preValue.pass
        };
      } else if (name === "phn") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          phn: value,
          email: preValue.email,
          pass: preValue.pass
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          phn: preValue.phn,
          email: value,
          pass: preValue.pass
        };
      } else if (name === "pass") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          phn: preValue.phn,
          email: preValue.email,
          pass: value
        };
      }
    });
  }

  return (
    <>
      <div>
        <TopNavigation />
      </div>
      <div className="container">
        <h1>Sign-up: {contact.fName} </h1>
        <br></br>
        <br></br>
        <form action="https://zenexia-home.netlify.app/">
          <input
            onChange={handler}
            value={contact.fName}
            name="fName"
            placeholder="First Name"
          />
          <br></br>
          <input
            onChange={handler}
            value={contact.lName}
            name="lName"
            placeholder="Last Name"
          />
          <br></br>
          <input
            onChange={handler}
            value={contact.phn}
            name="phn"
            placeholder="Phone number"
          />
          <br></br>
          <input
            onChange={handler}
            value={contact.email}
            name="email"
            placeholder="Email"
          />
          <br></br>
          <input
            onChange={handler}
            value={contact.pass}
            name="pass"
            placeholder="Password"
          />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
