import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext( );


export const ContextProvider = ({ children }) => {
  
	let inicial = JSON.parse(localStorage.getItem("Fav", ));
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setCards(res.data))
    .catch((err) => console.log(err));
  }, []);
    
  
 
  return (
    <ContextGlobal.Provider value={{cards,setCards}}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useContextGlobal = () => {
  return useContext(ContextGlobal);

}