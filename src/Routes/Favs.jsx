import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const FavSinFormat = window.localStorage.getItem("Fav");
  const FavConFormat = JSON.parse(FavSinFormat);
  console.log(FavConFormat);

  return (
    <>
      

      {FavConFormat == null ?<h1>Dentists Favs</h1> :FavConFormat.map((card) => {
        return (
          <div >
            <div id={card.id} className="card-grid">
              <div className="card">
                <h1>{card.id}</h1>
                <h2>{card.name}</h2>
                <h2>{card.username}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Favs;
