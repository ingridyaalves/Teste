import React from 'react';
import banner from '../assets/banner.jpg';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="rightSide">
        <h1> Fale Conosco</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome</label>
          <input name="name" placeholder="Informe seu nome" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Informe seu email..." type="email" />
          <label htmlFor="message">Messagem</label>
          <textarea
            rows="6"
            placeholder="Escreva sua mensagem"
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
