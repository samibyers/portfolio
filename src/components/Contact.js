import React, { useState } from 'react';
import "../Contact.css";

function Contact() {
      // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setEmail('');
  };
  
  return (
    <section className="body">
    <div className="h1">Contact</div>
    <div className="card">
        <p>
          Contact me with the links in the footer or leave your information below!{firstName} {lastName}
        </p>
        <form className="form">
          <input className="input"
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name" />
          <input className="input"
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name" />
          <input className="input"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email" />
          <button className="input" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
      </section>
  );
  }
  
  export default Contact;











