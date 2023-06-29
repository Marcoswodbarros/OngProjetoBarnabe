import React from 'react'
import './Identidade.css'

const Identidade = () => {
    return (
        <div>
            <section>
                <div className='identidade__container'>
                    <img src="images/body-target.png" className='identidade__img' alt="Target Icon" />
                    <h2 className='identidade__h2'>Propósito</h2>
                </div>

                <div className='identidade__container'>
                    <img src="images/body-rocket.png" className='identidade__img' alt="Target Icon" />
                    <h2 className='identidade__h2'>Missão</h2>
                </div>

                <div className='identidade__container'>
                    <img src="images/body-medal.png" className='identidade__img' alt="Target Icon" />
                    <h2 className='identidade__h2'>Valores</h2>
                </div>
            </section>
        </div>
    )
}

export default Identidade