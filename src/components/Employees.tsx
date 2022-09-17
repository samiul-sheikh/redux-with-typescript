import React, { useState } from "react";
import Employee from "./Employee";

interface IEmployee {
  name: string;
  email: string;
}

const Employees = () => {
  const [employee, setEmployee] = useState<IEmployee>({} as IEmployee);
  // console.log(employee);

  const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);

  const displayEmployeeList = () => {
    setEmployeeList([...employeeList, employee]);
    setEmployee({
      name: "",
      email: "",
    });
  };
  // console.log(employeeList);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleRemove = (email: string) => {
    const newEmployeeList = employeeList.filter((e) => e.email === email);
    setEmployeeList(newEmployeeList);
  };

  return (
    <div>
      <h1>Employee List</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={employee.email}
          onChange={handleOnChange}
        />
        <button className="button" onClick={displayEmployeeList}>
          Add
        </button>
      </div>
      {employeeList.map((emp) => (
        <Employee
          key={emp.name}
          name={emp.name}
          email={emp.email}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Employees;
