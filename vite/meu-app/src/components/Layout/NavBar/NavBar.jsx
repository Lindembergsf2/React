import React from "react";

import { Link} from "react-router-dom";

import './Navbar.css'


function NavBar(){
    return(
       <center>
            <nav className="desktop-menu">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/Curriculum">Curriculo</Link></li>
                                <li><Link to="/Portfolio">Potfólio</Link></li>
                                <li><Link to="/Contact">Contato</Link></li>
                            </ul>
            </nav>
        </center>
    )
}

export default NavBar