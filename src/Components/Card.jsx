

import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Await, BrowserRouter, json, Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import ThemeProvider from "../Components/ThemeProvider";
import { useContextGlobal } from "./utils/global.context";
import Logo from "../Components/doctor.jpg"

const Card = ({ nombre, apellido, id}) => {
  
  const {cards,setCards} = useContextGlobal()
  
  let array = [];

  const addFav = (e) => {
    
    let inicial = JSON.parse(localStorage.getItem("Fav", ));
    if (inicial != null) {
      array=[...inicial]
    }
    const idMando = e.currentTarget.id;
    let objeto = {
      id: idMando,
      name: cards[idMando].name,
      username: cards[idMando].username,
    };

    if (array.find((x) => x.id === idMando) == undefined) {
      array.push(objeto);
      alert("Agregado a favoritos")
    }else{
      alert("Ya existe en favoritos")
    }

    localStorage.setItem("Fav", JSON.stringify(array));
  };
  
  
  
  return (
    <>
      {cards.map((card) => {
        return (
          <div className="contenedorDiv" key={card.id}>            
            <div id={card.id}>
                  <div className="card">
                    <img src={Logo} alt="Doctor" />   
                <Link to={`/card/${card.id}`} state={{ idPaso: card.id }}  >
                    <h2>{card.name}</h2>
                </Link>
                    <h3>{card.username}</h3>
            <button className="favButton" onClick={addFav} id={card.id}>
             ❤
            </button>
                  </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
