import React from 'react'
import './End.css'

const End = () => {
  return (
    <div>
        <div className='end'>
            <p><span>&copy;</span> All rights reserved</p>
            <div className='end__container--img'>
                <img src="images/instagram.svg" className='end__img' alt="Instagram" />
                <img src="images/facebook.svg" className='end__img' alt="Facebook" />
                <img src="images/linkedin.svg" className='end__img' alt="LinkedIn" />
            </div>
        </div>
    </div>
  )
}

export default End