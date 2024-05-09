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
                    <h1>Acadêmico</h1>
                        <ul>
                            {data.AcademicExperience.map((item, index) => (
                                <li key={index}>
                                <b>({item.start} - {item.end})</b> {item.course}
                                </li>
                            ))}
                        </ul>
                </div>
                            
            </center>  
        
        </main>

    )
}
export default Curriculum