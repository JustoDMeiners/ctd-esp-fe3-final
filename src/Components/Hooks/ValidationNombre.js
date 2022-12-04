import {useState} from 'react';
  
  export default function ValidationNombre() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
  
    function isValidNombre(nombre) {
      return (nombre.length>5);
    }
  
    const handleNombreChange = event => {
      if (!isValidNombre(event.target.value)) {
        setError('Nombre es invalido');
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
          onChange={handleNombreChange}
        />
  
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      </div>
    );
  }