import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Await, BrowserRouter, json, Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import ThemeProvider from "../Components/ThemeProvider";

const Card = ({ nombre, apellido, id, color, theme}) => {
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
    if (array.find((x) => x.id === idMando) == undefined) {
      array.push(objeto);
      console.log(array);
    }

    localStorage.setItem("Fav", JSON.stringify(array));
  };
  console.log(theme)
  return (
    <>
      {cards.map((card) => {
        return (
          <div className="contenedorDiv">
            <div id={card.id}>
                <Link to={`/card/${card.id}`} state={{ idPaso: card.id }}  >
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
