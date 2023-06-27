import React from 'react'
import './Footer.css'
import Contatos from '../Contatos/Contatos'
import Menu from '../Menu/Menu'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <img src="images/nav - logo.png" className='footer__logo' alt="Logo do Projeto Barnabé" />
            <Contatos />
            <Menu />
        </footer>
    </div>
  )
}

export default Footer