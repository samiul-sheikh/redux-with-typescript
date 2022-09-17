import React from "react";

interface Ipeople {
  name: string;
  email?: string;
}

const Contact = ({ name, email = "N/A" }: Ipeople) => {
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

export default Contact;

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
