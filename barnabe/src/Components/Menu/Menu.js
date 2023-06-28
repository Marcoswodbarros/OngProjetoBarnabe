import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <section className='menu'>
                <h2 className='menu__h2'>Menu</h2>
                <ul className='footer__menu--ul'>
                    <li className='footer__menu--li'>Sobre nós</li>
                    <li className='footer__menu--li'>Transparência</li>
                    <li className='footer__menu--li'>Quero ajudar!</li>
                    <li className='footer__menu--li'>Fale conosco!</li>
                </ul>
            </section>
        </div>
    )
}

export default Menu