import React, { useContext } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { ThemeContext } from './ThemeProvider';





const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className='navBar'>
      
      
      <BrowserRouter>
        <Link to="/contacto">Contacto</Link>
        <Link to="/fav">Favoritos</Link>
      </BrowserRouter>
      
      
      <button onClick={toggleTheme}>
				Cambio {theme === "light" ? "dark" : "light"} mode
			</button>
    </nav>
  )
}

export default Navbar