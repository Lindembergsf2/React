import React from "react";

import './Curriculum.css'

import data from './Curriculum.json'


function Curriculum() {
    return(
        
        <main>
        
       
            <center>               
                    <div className="curriculum-box">
                        <h1>Profissional</h1>
                        <ul>
                            {data.WorkExperience.map((item, index) => (
                                <li key={index}>
                                    <b>({item.start} - {item.end})</b> {item.work}
                                </li>

                            
                            ))}
                        </ul>
                    </div>
                  
                    <div className="curriculum-box">
                    <h1>Profissional</h1>
                            <p><b>()</b></p>
                    </div>
                            <div className="curriculum-box">
                    <h1>2024-2024</h1>
                        <h3>Desenvolvedor de Software</h3>
                            <p>Entrei no mercado de Desenvolvimento de software a partir de um boot camp realizado pelo Comeia Labs em minha região</p>
            
                    </div>
                </center>  
        
        </main>

    )
}
export default Curriculum