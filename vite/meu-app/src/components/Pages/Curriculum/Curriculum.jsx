import React from "react";

import './Curriculum.css'

function Curriculum(props) {
    const { experienciaAcademica, experienciaProfissional } = props.curriculo;

    if(!experienciaAcademica || !experienciaProfissional) {
        return <p>Carregando...</p>
    }

    return (

        <main>

            <center>
                <div className="curriculum-box">
                    <h1>Profissional</h1>
                    <ul>
                        {experienciaProfissional.map((item, index) => (
                            <li key={index}>
                                <b>({item.anoinicio} - {item.anofim})</b> {item.titulo}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="curriculum-box">
                    <h1>Acadêmico</h1>
                    <ul>
                        {experienciaAcademica.map((item, index) => (
                            <li key={index}>
                                <b>({item.anoinicio} - {item.anofim})</b> {item.titulo}
                            </li>
                        ))}
                    </ul>
                </div>

            </center>

        </main>

    )
}
export default Curriculum;