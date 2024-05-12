import React from "react"

import './Portfolio.css'

import PortfolioCard from "../PortfolioCard/PortfolioCard.jsx";



function Portfolio() {
    
const portfolio = [
    {
        link : "https://lindemberglima.netlify.app/",
        image : "https://ibb.co/Htb2yQB",
        title : "Site pessoal construido em HTML e CSS"
    },
    {
        link : "https://www.instagram.com/p/CrIxZZ8ABTb/?img_index=2",
        image : "https://ibb.co/8z2PR3q",
        title : "Material Social Media Loja de Piscinas"
    },
    {
        link : "https://www.instagram.com/p/CrI1VjBgYVg/?img_index=2",
        image : "https://ibb.co/9wRhyjk",
        title : "Material Social Media Estetica Automotiva"
    }
];
    
    
    
    return(
        <center>
            <main>
                    
                    {portfolio.map(

                        (portfolio, index) => 
                            <PortfolioCard 
                            key={index}
                            link={portfolio.link}
                            image={portfolio.image}
                            title={portfolio.title}>
                            </PortfolioCard>
                            
                    )}
                
             </main>
        </center>
    )
    
}
export default Portfolio