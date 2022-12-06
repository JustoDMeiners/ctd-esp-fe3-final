import React from "react";
import Card from "../Components/Card";
import Logo from "../Routes/doctor.jpg"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const FavSinFormat = window.localStorage.getItem("Fav");
  const FavConFormat = JSON.parse(FavSinFormat);
  

  return (
    <>
      

      {FavConFormat == null ?<h1>Dentists Favs</h1> :FavConFormat.map((card) => {
        return (
          <div key={card.id} >
            <div id={card.id} className="card-grid">
              <div className="card">
                <img src={Logo} alt="Doctor" />
                <h2>{card.name}</h2>
                <h3>{card.username}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Favs;
