
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



const light = useContext(light)


function App() {
  return (
      <div className="light">
        <div className="App" >
            <Navbar/>
            <Footer/>
        </div>
      </div>
  );
}

export default App;
