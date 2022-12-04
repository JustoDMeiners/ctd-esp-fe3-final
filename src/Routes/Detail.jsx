import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';





const Detail = ({idMandado}) => {
const [cards, setCards] = useState({
    name: "",
    email: "",
    phone: null,
    website:""

})




/*useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>setCards(res.data))
  .catch((err) => console.log(err))
}, [])
*/

const { id } = useParams();



 
  useEffect(() => {
    axios 
    .get(`https://jsonplaceholder.typicode.com/users/$`)
    .then((res)=>setCards(res.data))
    .catch((err) => console.log(err))
  }, [])
  
  

  return (

    <>
      <h1>Detalle </h1>
      <div className='card-grid'>
       
            <div className='card' key={cards.id}> 
              <h2>{cards.name} </h2>
              <h3>{cards.email}</h3>
              <h4>{cards.phone}</h4>
              <h4>{cards.website}</h4>
            </div>
          
      
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail