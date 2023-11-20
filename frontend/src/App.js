import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Dados from './Pages/Dados';
import Sobre from './Pages/Sobre';
import Creditos from './Pages/Creditos';
import Footer from './Components/Footer/Footer';
import {GiHamburgerMenu} from 'react-icons/gi';
// eslint-disable-next-line
import { BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    
      
      <BrowserRouter>
        
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>            
        </header>
        
        
        <Navbar show= {showNav} />
        
        <div className="main">         

        <Routes>

        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/dados" exact={true} element={<Dados/>}/>
        <Route path="/sobre" exact={true} element={<Sobre/>}/>
        <Route path="/creditos" exact={true} element={<Creditos/>}/>

        </Routes>         
        
                  
        </div>

        <Footer/>
      </BrowserRouter>
          
    
  );
}

export default App;
