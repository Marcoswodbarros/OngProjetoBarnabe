import React, { useState } from 'react'
import './Nav.css'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'

const Nav = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <nav className='nav'>
        <img src="/images/nav - logo.png" className='nav__img' alt="Projeto Barnabé Logo" />

        <div className='toggle__icon' onClick={handleToggle}>
          {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
        </div>

        <div className={toggle ? 'nav__ul--container expanded' : 'nav__ul--container'}>
          <ul className='nav__ul'>
            <li className='nav__ul--li'>Início</li>
            <li className='nav__ul--li'>Sobre nós</li>
            <li className='nav__ul--li'>Transparência</li>
            <li className='nav__ul--li'>Quero ajudar!</li>
            <li className='nav__ul--li'>Fale conosco!</li>
          </ul>
        </div>
      </nav >
    </div >
  )
}

export default Nav