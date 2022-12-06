import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext( );


export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	const color = theme === "light" ? "#333" : "#FFF";
	const backgroundColor = theme === "light" ? "#FFF" : "#333";
	
	
  
  
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <ContextGlobal.Provider value={{cards,setCards,color,setTheme,color,backgroundColor,theme}}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useContextGlobal = () => {
  return useContext(ContextGlobal);

}