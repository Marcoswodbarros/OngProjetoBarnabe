import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <Nav/>
                <h1>Projeto Barnabé</h1>
            </header>
        </div>
    )
}

export default Header