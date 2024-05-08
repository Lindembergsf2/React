import React from "react";

import './Summary.css'

import avatarBerg from '../../../assets/avatar.jpeg'

function Summary() {
    return(
        <main>
        
        <section className="initial-text">
            <div className="interface">
                <div className="flex">
                    <div className="txt-top-site">
                        <h1>Sua ideia se torna realidade<span>.</span></h1>
                        <p>Unindo um design marcante e a um site intuitivo e responsivo, quero usar minha experência como 
                        Designer Gráfico unida ao conhecimento em programção, para tornar realidade seus sonhos e ideias,
                        meu objetivo e criar soluções práticas para facilitar o seu dia a dia. </p>
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