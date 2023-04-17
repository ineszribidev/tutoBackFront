import React from "react";
import NavBar from "../components/NavBar";
import Button from "./Button";

function Contact(props) {
  return (
    <div>
      <NavBar name="contact" />
      <Button
        Class="btn btn-danger"
        onChangeHandler={""}
        label="change in page contact"
      />
    </div>
  );
}

export default Contact;
