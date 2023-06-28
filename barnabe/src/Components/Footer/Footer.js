import React from 'react'
import './Footer.css'
import Contatos from '../Contatos/Contatos'
import Menu from '../Menu/Menu'
import Ajuda from '../Ajuda/Ajuda'
import End from '../End/End'

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <img src="images/nav - logo.png" className='footer__logo' alt="Logo do Projeto Barnabé" />
                <div className='footer__container'>
                    <Contatos />
                    <Menu />
                    <Ajuda />
                </div>
                <End />
            </footer>
        </div>
    )
}

export default Footer