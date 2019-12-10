import React from 'react'

import './style.css'

const Sobre = props =>{
    const {altImg, imgSrc, children } = props
    return(        
            <div className='card__sobre'>
                <img className='card__img' alt={altImg} src={imgSrc}></img>
                <p className='text-style'>{children}</p>
            </div>        
    )
}

export default Sobre