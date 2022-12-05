import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Await, BrowserRouter, json, Link } from "react-router-dom";

const Card = ({ nombre, apellido, id }) => {
  const [cards, setCards] = useState([]);

  const array = [];

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addFav = (e) => {
    
    const idMando = e.currentTarget.id;
    let objeto = {
      id: idMando,
      name: cards[idMando].name,
      username: cards[idMando].username,
    };

    array.push(objeto);
    console.log(array);
    
    localStorage.setItem("Fav", JSON.stringify(array));
  };

  return (
    <>
      {cards.map((card) => {
        return (
          <div>
            <div id={card.id} >
              <Link to={`/card/${card.id}`} state={{ idPaso: card.id }}>
                <div className="card">
                  <h1>{card.id}</h1>
                  <h2>{card.name}</h2>
                  <h2>{card.username}</h2>
                </div>
              </Link>
            </div>
            <button className="favButton" onClick={addFav} id={card.id}>
              Fav
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
