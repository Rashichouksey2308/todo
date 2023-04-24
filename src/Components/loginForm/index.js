import React, { useState } from "react";
import "./style.css";

function Index() {
  const [allUserEntry, setallUserEntry] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [record, setrecord] = useState([]);

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setallUserEntry({ ...allUserEntry, [name]: value });
    console.log(value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...allUserEntry };
    setrecord([...record, newRecord]);
    console.log(record);
    setallUserEntry({ name: "", email: "", phone: "",password:'' });

    // if (email && password) {

    //   const newEntry = { email, password };
    //   setallEntry([...allEntry, newEntry]);
    //   console.log(allEntry);
    //   setEmail("");
    //   setPassword("");
    // } else {
    //   alert("please fill the email and password");
    // }
  };

  return (
    <>
      <div className="formContainer">
        <form action="" onSubmit={formSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={allUserEntry.name}
              name="name"
              placeholder="name"
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={allUserEntry.email}
              placeholder="email"
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              value={allUserEntry.phone}
              type="text"
              id="phone"
              name="phone"
              placeholder="phone"
              onChange={handleEvent}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={allUserEntry.password}
              placeholder="password"
              onChange={handleEvent}
            />
          </div>
          <button className="loginBtn" type="submit">
            Login
          </button>
        </form>
        
      </div>
      <div>
          {record.map((data) => {
            const { name, email, password, phone } = data;
            return (
              <div className="list">
                
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{password}</p>
              </div>
            );
          })}
        </div>
    </>
  );
}

export default Index;
