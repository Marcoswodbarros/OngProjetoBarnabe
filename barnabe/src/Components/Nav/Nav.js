import React, { useState } from 'react'
import './Nav.css'

const Nav = () => {

  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  }

  return (
    <div>
      <nav className='nav'>
        <img src="/images/nav - logo.png" className='nav__img' alt="Projeto Barnabé Logo" />

        <div className={active ? 'icon icon__active' : 'icon'}>
          <div className="hamburger hambuger__icon"></div>
        </div>

        <div className={active ? 'menu__open' : 'menu__close'}>
          <ul className='nav__ul'>
            <li className='nav__ul--li'>Início</li>
            <li className='nav__ul--li'>Sobre nós</li>
            <li className='nav__ul--li'>Transparência</li>
            <li className='nav__ul--li'>Quero ajudar!</li>
            <li className='nav__ul--li'>Fale conosco!</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav