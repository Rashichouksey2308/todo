import React, { useState } from "react";
import "./style.css";

function Register() {
  const [alldata, setAllData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [record, setrecord] = useState([]);

  const handelEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAllData({ ...alldata, [name]: value });
    console.log(value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...alldata };
    setrecord([...record, newRecord]);
    console.log(record);
    setAllData({ name: "", email: "", phone: "", password: "" });
  };
  return (
    <>
      <div className="formContainer">
        <form action="" onSubmit={formSubmit}>
          <div className="inputContainer">
            <label htmlFor="username">username</label>
            <input
              type="username"
              name="username"
              value={alldata.username}
              placeholder="username"
              id="username"
              onChange={handelEvent}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={alldata.email}
              placeholder="email"
              id="email"
              onChange={handelEvent}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              value={alldata.phone}
              placeholder="phone"
              id="phone"
              onChange={handelEvent}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={alldata.password}
              placeholder="password"
              id="password"
              onChange={handelEvent}
            />
          </div>
          <button className="loginBtn" type="submit">
            Register
          </button>
        </form>
        <div className="rightTabel">
        {record.map((data)=>{
            const {username,email,password,phone} = data;
            return(
                <>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{password}</p>
                </>
            )
        })}
        </div>
      </div>
    
    </>
  );
}

export default Register;
