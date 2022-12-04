import React from "react";
import { Link, Routes } from "react-router-dom";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Quieres conocer mas?</h2>
      <p>Enviamos tu consulta y nosotros nos contactaremos con vos</p>
      <Form />
    </div>
  );
};

export default Contact;
