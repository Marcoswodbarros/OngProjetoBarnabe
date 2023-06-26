import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <nav className='nav'>
            <img src="/images/nav - logo.png" className='nav__img' alt="Projeto Barnabé Logo" />
            <ul className='nav__ul'>
                <li className='nav__ul--li'>Início</li>
                <li className='nav__ul--li'>Sobre nós</li>
                <li className='nav__ul--li'>Transparência</li>
                <li className='nav__ul--li'>Quero ajudar!</li>
                <li className='nav__ul--li'>Fale conosco!</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav