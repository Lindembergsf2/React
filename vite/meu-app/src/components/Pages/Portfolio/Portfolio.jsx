import React from "react"

import './Portfolio.css'

import PortfolioCard from "../PortfolioCard/PortfolioCard.jsx";



function Portfolio({ portfolio }) {

    return (
        <div id="containerPortifolioCard">
            {portfolio.map(
                (item, index) =>
                    <PortfolioCard
                        key={index}
                        link={item.link}
                        image={item.image}
                        title={item.title}
                    >
                    </PortfolioCard>
            )}
        </div>
    )

}
export default Portfolio;