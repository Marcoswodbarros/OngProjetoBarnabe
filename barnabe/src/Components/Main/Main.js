import React from 'react'
import './Main.css'
import Identidade from '../Identidade/Identidade'

const Main = () => {
  return (
    <div>
        <main className='main'>
            <img src="images/body-img.jpg"  className='main__img' alt="Crianças do Projeto" />
            <div className='main__line'></div>
            <Identidade/>
        </main>
    </div>
  )
}

export default Main