import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Header =()=>{
    return(
        <header>
           <p id='logo'><Link to='/'>Ifound </Link></p>
            <nav>
            <Link to="/vagas" >
      Vagas
    </Link>
    <Link to="/login" >
      Entrar
    </Link>
    
            </nav>
        </header>
    )
}
export default Header