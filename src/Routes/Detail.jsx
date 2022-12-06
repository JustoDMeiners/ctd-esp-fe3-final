import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';





const Detail = () => {
    const [usuario, setUsuario] = useState([])
    const { id } = useParams();
    

  const obtenerUsuario = async() => {
      const respuesta= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      const usuario=await respuesta.data
      setUsuario(usuario)
  }

  useEffect(() => {
    obtenerUsuario()
  }, [])
  
  

  return (

    <>
      <h1>Detalle de: {usuario.name} </h1>
      <div className='card-grid'>
       
            <div className='card' key={usuario.id}> 
              <h2>{usuario.name}</h2>
              <h3>{usuario.email}</h3>
              <h4>{usuario.phone}</h4>
              <h5>{usuario.website}</h5>
            </div>
          
      
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </>
  )
}

export default Detail