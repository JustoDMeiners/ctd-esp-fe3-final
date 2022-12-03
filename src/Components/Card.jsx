import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


const Card = ({ nombre, apellido, idPaso }) => {
  const [cards, setCards] = useState([])

  const [idCard,setId]= useState("")

  const id = useContext({idPaso})

  


  const navigate = () => {




    const url= "/cards"
    const destino = "/cards/" + cards.id
    


  }
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setCards(res.data))
    .catch((err) => console.log(err))
  }, [])
   console.log(cards)

  const addFav = ()=>{


    
}


    
    
    // Aqui iria la logica para agregar la Card en el localStorage
  

  return (

    <>

        {/* En cada card deberan mostrar en name - username y el id */}
        
          {cards.map((card) =>{

            return(
             <BrowserRouter>
              <div>
                <div id={card.id}>
                <Link to= {`/card/${card.id}`}>

                    <div className="card" onClick={navigate} > 
                        <h1>{card.name}</h1>
                        <h2>{card.id}</h2>
                        <h2>{card.username}</h2>
                    </div>
                </Link>
                      </div>
                      <button  className="favButton" >Add Fav</button>
              
              </div>
              
            </BrowserRouter>
             
              
              )
            }
            
          
          )}

        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </>
  );
};

export default Card;
