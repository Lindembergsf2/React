import React from "react";

import './Contact.css'

function Contact() {

    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phone, setPhone] = React.useState("");
    const [Message, setMessage] = React.useState("");

    function SendForm(event) {
        event.preventDefault();
    
        const text = `Nome: ${Name}\nE-mail: ${Email}\nTelefone: ${Phone}\nMensagem: ${Message}`;
        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; 
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(text)}`;
    
        window.open(url, '_blank');
        
    }

    const regexTelephone = /^(\d{2})(\d{4})(\d{0,4})/

    function phoneMask(event) {
    const text = event.target.value;
    const textOnlyNumbers = text.replace(/\D/g, '').substring(0, 11);

    let formatedPhone = textOnlyNumbers.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textOnlyNumbers.length < 11) {
        formatedPhone = textOnlyNumbers.replace(regexTelephone, '($1) $2-$3');
    }

    setPhone(formatedPhone);
  }


    return (
        
            <main>
            
            
            <section>
                <center>
            
                    <div className="form">
                
                        <h1>Fale <span>Comigo.</span></h1>
                        <form onSubmit={SendForm}>
                            <div>
                                <input 
                                    className="required" 
                                    type="text" name="" 
                                    id="full_name" 
                                    placeholder="Seu nome completo" 
                                    minLength="3" 
                                    required
                                    value={Name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            
                            <div>
                                <input 
                                    className="required" 
                                    type="email" 
                                    name="" 
                                    id="email_input" 
                                    placeholder="Seu e-mail"
                                    title="Email precisa ser no formato: email@email.com"
                                    required
                                    value={Email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        
                            <div>
                                <input 
                                    className="required" 
                                    type="tel" name="" 
                                    id="telephone" 
                                    placeholder="Seu telefone: (xx) xxxxx-xxxx" 
                                    minLength="14" 
                                    maxLength="15" 
                                    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                                    title="Número de telefone precisa ser no formato (XX) 9XXXX-XXXX"
                                    required
                                    value={Phone}
                                    onChange={phoneMask}
                                />
                            </div>
                            
                            <div>
                                <textarea 
                                    className="required" 
                                    name="" 
                                    id="text_box" 
                                    cols="60" 
                                    rows="10" 
                                    placeholder="Sua mensagem" 
                                    value={Message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    required>
                                    Olá, tudo bem?
                                </textarea>
                            </div>

                            <div className="submit-btn">
                                <input 
                                    id="submit_btn" 
                                    type="submit" 
                                    value="ENVIAR"
                                    />
                            </div>
                        </form>
                        
                    </div>
                </center>
            </section>   
        </main>
    
    )
    
}

export default Contact;