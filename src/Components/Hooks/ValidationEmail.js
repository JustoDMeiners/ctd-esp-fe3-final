import {useState} from 'react';
export default function ValidationEmail() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
  
    function isValidEmail(email) {
      return /\S+@\S+.\S+/.test(email);
    }
  
    const handleEmailChange = event => {
      if (!isValidEmail(event.target.value)) {
        setError('Email is invalid');
      } else {
        setError(null);
      }
  
      setMessage(event.target.value);
    };
  
    return (
      <div>
        <input
          id="message"
          name="message"
          value={message}
          onChange={handleEmailChange}
        />
  
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      </div>
    );
  }
  
  
  
  