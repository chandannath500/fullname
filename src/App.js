import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    submittedFirstName: "",
    submittedLastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.firstName && data.lastName) {
      setData((prevData) => ({
        ...prevData,
        submittedFirstName: prevData.firstName,
        submittedLastName: prevData.lastName,
        firstName: "",
        lastName: "",
      }));
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {data.submittedFirstName && data.submittedLastName && (
        <p>{`Full Name: ${data.submittedFirstName} ${data.submittedLastName}`}</p>
      )}
    </div>
  );
}
