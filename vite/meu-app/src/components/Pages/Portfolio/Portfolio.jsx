import React from "react"

function Portfolio() {
    
const Portfolio = [
    {
        link : "https://lindemberglima.netlify.app/",
        image : "../../../assets/cardsite.png",
        title : "Site pessoal construido em HTML e CSS"
    },
    {
        link : "https://www.instagram.com/p/CrIxZZ8ABTb/?img_index=2",
        image : "../../../assets/cardsite2.png",
        title : "Material Social Media Loja de Piscinas"
    },
    {
        link : "ttps://www.instagram.com/p/CrI1VjBgYVg/?img_index=2",
        image : "../../../assets/cardsite3.png",
        title : "Material Social Media Estetica Automotiva"
    }
];
    
    
    
    return(
        <main>
        
        <section className="portifolio">
                
                <center>

                <div className="cards">
                    <a href="/Index.html" target="_blank">
                        <img src="/Assets/card site.png" alt="Card site pessoal de Lindemberg"/>
                        <p><b>Site pessoal construído em <br/>HTMl e CSS</b></p>
                    </a>
                </div>

                <div className="cards">
                    <a href="https://www.instagram.com/p/CrIxZZ8ABTb/?img_index=2" target="_blank">
                    <img src="/Assets/card site 2.png" alt="Card site pessoal de Lindemberg"/>
                    <p><b>Material Social Media <br/>Loja de Piscinas</b></p>
                    </a>
                </div>

                <div className="cards">
                    <a href="https://www.instagram.com/p/CrI1VjBgYVg/?img_index=2" target="_blank">
                        <img src="/Assets/card site 3.png" alt="Card site pessoal de Lindemberg"/>
                        <p><b>Material Social Media <br/>Estética Automotiva</b></p>
                    </a>
                </div>
            </center>

        </section>

    </main>
    )
    
}
export default Portfolio