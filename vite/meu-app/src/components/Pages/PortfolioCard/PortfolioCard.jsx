import React from "react";

import './PortfolioCard.css'

function PortfolioCard(props) {

    return (
        <div className="cards">
            <a href={props.link} target="_blank">
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </a>

        </div>
    )
}

export default PortfolioCard