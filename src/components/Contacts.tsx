import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const [employee, setEmployee] = useState("");
  console.log(employee);

  return (
    <div>
      <h1>Employee List</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          onChange={(e) => setEmployee(e.target.value)}
        />
        <button>Add</button>
      </div>
      <Contact name="Samiul Sheikh" email="sami@gmail.com" />
      <Contact name="Someone" email="someone@gmail.com" />
      <Contact name="Someone" />
    </div>
  );
};

export default Contacts;