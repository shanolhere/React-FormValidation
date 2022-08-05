import React, { useState } from "react";
import "./styles.css";
// import { BrowserRouter, Switch, Link, NavLink } from "react-router-dom";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  //console.log(email);
  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setpwdMsg] = useState("");
  const [err, setErr] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    setErr(true);
    if (!email.includes("@gmail.com")) {
      setEmailMsg("Invalid email");
    }
    if (password.length <= 4) {
      setpwdMsg("Password length must be greater than 4");
    }
    if (!email) {
      setEmailMsg("Email can't be blank");
    }
    if (!password) {
      setpwdMsg("Password can't be blank");
    }
    if (email.includes("@gmail.com")) {
      setEmailMsg("");
    }
    if (password.length > 5) {
      setpwdMsg("");
    }
    if (email.includes("@gmail.com") && password.length > 5) {
      setErr(false);
      setEmail("");
      setPwd("");
    }
  };

  return (
    <div className="App">
      <h1>Login Form</h1>
      {err && (
        <div>
          <p> email: {email}</p>
          <p> password: {password}</p>
        </div>
      )}

      {!err && <h2> you have successfully logged in</h2>}
      <form>
        <input
          type="text"
          placeholder="Enter email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>{emailMsg}</p>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <p>{pwdMsg}</p>
        <input type="submit" onClick={submitForm} />
      </form>
    </div>
  );
};

export default App;
