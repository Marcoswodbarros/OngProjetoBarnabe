import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <Nav />
                <div className="header__container">
                    <img src="/images/header - logo.png" className='header__img' alt="Logo Projeto Barnabé" />
                    <h1 className='header__h1'>Somos unidos pelo nosso propósito</h1>
                    <button className='header__button'>Venha ser um mantenedor</button>
                </div>
            </header>
        </div>
    )
}

export default Header