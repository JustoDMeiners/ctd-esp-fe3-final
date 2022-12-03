

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";

import ThemeProvider, { ThemeContext } from "./Components/ThemeProvider";
import Detail from "./Routes/Detail";







function App() {
  return (
    
    <div>
      <ThemeProvider>
        <Navbar />

        <BrowserRouter>
        <Routes>
          <Route>
          
            <Route path="/contacto" element= {<Contact/>} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/elementos" element={<Detail/>}/>
          
          
          </Route>
        </Routes>
      </BrowserRouter>
        
    
      
      
        
        <Home/>
        <Footer />
      </ThemeProvider>
  </div>
  );
}

export default App;
