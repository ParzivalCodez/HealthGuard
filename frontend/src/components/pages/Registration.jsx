import { useState } from "react";
import axios from "axios";

function Registration() {
  const [firstName, setFirstName] = useState(0);
  const [lastName, setLastName] = useState(0);
  const [password, setPassword] = useState(0);
  const [emailAddress, setEmailAddress] = useState(0);
  const [relationship, setRelationship] = useState(0);

  function firstNameHandler(event) {
    setFirstName(event.target.value);
  }

  function lastNameHandler(event) {
    setLastName(event.target.value);
  }

  function emailAddressHandler(event) {
    setEmailAddress(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function relationshipHandler(event) {
    setRelationship(event.target.value);
  }

  function accountCreationHandler() {
    axios
      .post("http://localhost:3000/create-account", {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        password: password,
        relationships: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <input placeholder={"Enter First Name"} onChange={firstNameHandler} />
      <input placeholder={"Enter Last Name"} onChange={lastNameHandler} />
      <input
        placeholder={"Enter Email Address"}
        onChange={emailAddressHandler}
      />
      <input placeholder={"Enter Password"} onChange={passwordHandler} />
      <input
        placeholder={"Enter Relationship Status"}
        onChange={relationshipHandler}
      />
      <button onClick={accountCreationHandler}>Create Account</button>
    </>
  );
}

export default Registration;
