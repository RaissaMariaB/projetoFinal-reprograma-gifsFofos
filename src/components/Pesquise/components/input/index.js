import React from 'react'
import BoxPesquisa from '../../../../assets/images/box.png'

import './style.css'

const Input = props => {
    const {typing,  } = props
    return(
        <img src= {BoxPesquisa} className='img-input' >
            <input className='input-box'></input>
            
        </img>
        

    )
}




export default Input