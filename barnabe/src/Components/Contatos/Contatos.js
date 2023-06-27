import React from 'react'
import './Contatos.css'

const Contatos = () => {
    return (
        <div>
            <section className='contatos__section'>
                <h2 className='contatos__h2'>Entre em contato</h2>
                <div className='contatos__container'>
                    <img src="images/footer - whats.svg" className='contatos__img' alt="WhatsApp Icon" />
                    <p>WhatsApp: +55 81 9 8208-7727</p>
                </div>

                <div className='contatos__container'>
                    <img src="images/footer - email.svg" className='contatos__img' alt="WhatsApp Icon" />
                    <p>Email: contato@projetobarnabe.org.br</p>
                </div>

                <div className='contatos__container'>
                    <img src="images/footer - whats.svg" className='contatos__img' alt="WhatsApp Icon" />
                    <p>R. Souza Bandeira, 619 - Torre, Recife - PE, 50711-050, Brasil</p>
                </div>
            </section>
        </div>
    )
}

export default Contatos