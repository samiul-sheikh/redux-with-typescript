import React, { useState } from "react";
import Employee, { EmployeeDemo } from "./Employee";

const Contacts = () => {
  const [employee, setEmployee] = useState("");
  console.log(employee);

  const [employeeList, setEmployeeList] = useState<string[]>([]);

  const displayEmployeeList = () => {
    setEmployeeList([...employeeList, employee]);
    setEmployee("");
  };
  console.log(employeeList);

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
        <button className="button" onClick={displayEmployeeList}>
          Add
        </button>
      </div>
      {employeeList.map((singleEmployee) => (
        <Employee key={singleEmployee} name={singleEmployee} />
      ))}
      <EmployeeDemo name="Sami" />
    </div>
  );
};

export default Contacts;
