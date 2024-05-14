import React from "react"

import './Portfolio.css'

import PortfolioCard from "../PortfolioCard/PortfolioCard.jsx";



function Portfolio() {

    const portfolio = [
        {
            link: "https://lindemberglima.netlify.app/",
            image: "https://i.ibb.co/JvZGDwK/card-site.png",
            title: "Site pessoal construido em HTML e CSS"
        },
        {
            link: "https://www.instagram.com/p/CrIxZZ8ABTb/?img_index=2",
            image: "https://i.ibb.co/kcFhcxF/card-site-2.png",
            title: "Material Social Media Loja de Piscinas"
        },
        {
            link: "https://www.instagram.com/p/CrI1VjBgYVg/?img_index=2",
            image: "https://i.ibb.co/9qHyVMp/card-site-3.png",
            title: "Material Social Media Estetica Automotiva"
        }
    ];



    return (
        <div id="containerPortifolioCard">
            {portfolio.map(
                (portfolio, index) =>
                    <PortfolioCard
                        key={index}
                        link={portfolio.link}
                        image={portfolio.image}
                        title={portfolio.title}>
                    </PortfolioCard>
            )}
        </div>
    )

}
export default Portfolio