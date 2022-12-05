import React from "react";

import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({id,theme,color}) => {
  console.log(theme)
  return (
    <main >
      <h1>Home</h1>
      <div className="card-grid">
        <Card id={id} theme={theme} color={color} />
      </div>
    </main>
  );
};

export default Home;
