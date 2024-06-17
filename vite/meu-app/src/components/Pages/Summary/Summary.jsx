import React from "react";

import './Summary.css'

import avatarBerg from '../../../assets/avatar.jpeg'

import DataSummary from './Summary.json'

function Summary(props) {

    const { titulo, resumo, foto } = props.informacoes;

    return (
        <center>
        <main>
        
            <section className="initial-text">
                <div className="interface">
                    <div className="flex">
                        <div className="txt-top-site">
                            <h1>{titulo}<span>.</span></h1>
                            <p>{resumo}</p>
                        </div>
                        <div className="img-top-site">
                            <img src={foto} alt="Foto de rosto de Lindemberg" />
                        </div>
                    </div>
                </div>

            </section>
        </main>
        </center>

    )

}

export default Summary;