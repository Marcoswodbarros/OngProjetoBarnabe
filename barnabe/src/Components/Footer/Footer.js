import React from 'react'
import './Footer.css'
import Contatos from '../Contatos/Contatos'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <img src="images/nav - logo.png" className='footer__logo' alt="Logo do Projeto Barnabé" />
            <Contatos />
        </footer>
    </div>
  )
}

export default Footer