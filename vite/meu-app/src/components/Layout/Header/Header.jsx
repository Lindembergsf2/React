import React, { Fragment } from "react";

import logo from '../../../assets/LOGO.png'

import './Header.css'

import Curriculum from "../../Pages/Curriculum/Curriculum";

function Header() {
    return (
        <header>
            <center>
                <div className="interface">
                    <a href="">
                        <img src={logo} alt="Logo de Lindemberg Lima" />
                    </a>

                </div>
            </center>
        </header>
    )

}
export default Header;
