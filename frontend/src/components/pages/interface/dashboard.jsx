import axios from "axios";

export default function Dashboard() {
  function familyCreationHandler() {
    let familyName = window.prompt("Enter Family Name");
    axios
      .post("http://localhost:3000/create-family", {
        familyName: familyName,
      })
      .then((res) => console.log(res));
  }

  function familyJoinHandler() {
    let familyCode = window.prompt("Enter Family Code");
    axios
      .post("http://localhost:3000/join-family", {
        familyCode: familyCode,
        token: localStorage.getItem("token"),
      })
      .then((res) => console.log(res));
  }

  if (localStorage.getItem("token")) {
    return (
      <>
        <h1>Hello!</h1>
        <button onClick={familyCreationHandler}>Create Family</button>
        <button onClick={familyJoinHandler}>Join Family</button>
      </>
    );
  } else {
    return <h1>Please Login to Continue!</h1>;
  }
}
