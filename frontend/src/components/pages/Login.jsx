import { useState } from "react";
import axios from "axios";

function Login() {
  const [emailAddress, setEmailAddress] = useState(0);
  const [password, setPassword] = useState(0);

  function emailAddressHandler(event) {
    setEmailAddress(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function accountCreationHandler() {
    axios
      .post("http://localhost:3000/login-account/website", {
        emailAddress: emailAddress,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <input
        placeholder={"Enter Email Address"}
        onChange={emailAddressHandler}
      />
      <input placeholder={"Enter Password"} onChange={passwordHandler} />
      <button onClick={accountCreationHandler}>Create Account</button>
    </>
  );
}

export default Login;
