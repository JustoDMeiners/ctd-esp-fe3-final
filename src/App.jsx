import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";

import ThemeProvider, { ThemeContext } from "./Components/ThemeProvider";
import Detail from "./Routes/Detail";

function App({id}) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        
        
         
           <Routes>
             <Route path="/" element={<Home idPaso= {id} />} />
             <Route path="/contacto" element={<Contact />} />
             <Route path="/fav" element={<Favs idPaso={id} />} />
             <Route path="/elementos" element={<Detail idPaso={id} />} />
           </Routes>
         
        
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
