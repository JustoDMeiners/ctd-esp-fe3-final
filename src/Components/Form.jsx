import React, { useEffect, useState } from "react";
import { useContext } from "react";

const Form = () => {
  const [items, setItems] = useState([]);
  

  const changeNombreHandler = (event) => {
    setItems({ nombre: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setItems({ email: event.target.value });
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label> Nombre completo: </label>
          <input
            placeholder="Nombre completo"
            name="nombre"
            onChange={changeNombreHandler}
          />
        </div>
        <div className="form-group">
          <label> Email </label>
          <input
            placeholder="Last Name"
            name="email"
            type="email"
            onChange={changeEmailHandler}
          />
        </div>

        <button>Enviar</button>
        <button style={{ marginLeft: "10px" }}>Cancel</button>
      </form>
    </div>
  );
};

export default Form;
