import React from 'react';
import { validateEmail } from '../../utils/helpers';

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
    <div>
        <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Consonant Vowelston"
        />
<input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}

export default Contact;


