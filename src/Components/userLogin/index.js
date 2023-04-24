import React, { useState } from "react";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alldata, setalldata] = useState([]);

  const formSubmit = (e) => {
    if(email && password){
        e.preventDefault();
        const newData = { email, password };
        setalldata([...alldata, newData]);
        console.log(alldata);
        setEmail("");
        setPassword("");
    }
    else{
        alert("enter input values")
    }
  };

  return (
    <div className="formContainer">
      <form action="" onSubmit={formSubmit}>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginBtn" type="submit">
          Login
        </button>
        {alldata.map((data) => {
          const { email, password } = data;
          return (
            <>
              <p>{email}</p>
              <p>{password}</p>
            </>
          );
        })}
      </form>
    </div>
  );
}

export default Login;
