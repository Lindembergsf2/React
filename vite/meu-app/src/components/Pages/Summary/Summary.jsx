import React from "react";

import './Summary.css'

import avatarBerg from '../../../assets/avatar.jpeg'

import DataSummary from './Summary.json'

function Summary() {
    return(
        <main>
        
        <section className="initial-text">
            <div className="interface">
                <div className="flex">
                    <div className="txt-top-site">
                        <h1>Sua ideia se torna realidade<span>.</span></h1>
                        <p>{DataSummary.Summary}</p>
                    </div>
                    <div className="img-top-site">
                        <img src={avatarBerg} alt="Foto de rosto de Lindemberg"/>
                    </div>
                </div>   
                 </div>            

            </section>         
    </main>  
          
    )
    
}

export default Summary;