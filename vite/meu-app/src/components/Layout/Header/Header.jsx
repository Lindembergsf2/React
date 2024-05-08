import React, { Fragment } from "react";

import logo from '../../../assets/LOGO.png'

import './Header.css'


function Header() {
    return (
        <div className="interface">
            <a href="">
                <img src={logo} alt="Logo de Lindemberg Lima"/>
            </a>
            
            <nav className="desktop-menu">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Curriculo</a></li>
                        <li><a href="">Portfólio</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </nav>
        </div>
    )
            
}
export default Header;
