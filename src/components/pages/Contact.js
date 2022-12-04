import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


<a href="mailto:slayer_barrett_@hotamil.com?subject=I want to hire you.">slayer_barrett_@hotmail.com</a>

function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email is invalid');

      return;

    }

    setUserName('');

    setEmail('');

    setMessage('');
    alert(`Thank you for your messsage ${userName}`);
  };

  return (
    <div className="container mt-3">
      <form className="row g-3 ">
        <div className="col-md-6">
          <label className="form-label">Email: </label>
          <input
          className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Your Name: </label>
          <input
          className="form-control"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Consonant Vowelston"
          />
        </div>
        <div className="col-md-12">
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Your message here..."
            className="form-control"
          />
        </div>
        <button className="btn btn-secondary col-md-2" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      {
        errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
      }
    </div>
  )
}

export default Contact;


