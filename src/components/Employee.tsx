import React from "react";

interface Ipeople {
  name: string;
  email: string;
  handleRemove: (email: string) => void;
}

const Employee = ({ name, email = "N/A", handleRemove }: Ipeople) => {
  return (
    <div className="card">
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <button onClick={() => handleRemove(email)}>Remove</button>
    </div>
  );
};

export default Employee;

export const EmployeeDemo: React.FC<Ipeople> = ({ name, email = "N/A" }) => {
  return (
    <div className="card">
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
    </div>
  );
};
