import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./Contact.css"

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div >
        <label htmlFor="name">Name:</label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          required
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" id="message" required />
      </div>
      <button className="btn btn-primary" type="submit">{status}</button>
    </form>
  );
};

export default Contact;
