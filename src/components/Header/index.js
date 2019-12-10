import React from 'react'
import girlHeader from '../../assets/images/girlheader.png'

import './style.css'

const Header = () =>{
    return(
        <header className='styleheader'>
            <h1 className='styleh1'>Gifs Fofos </h1>
            <h2 className='styleh2'> Pra quando bater aquela Bad</h2>            
            <img src={girlHeader} className='styleimg' alt='Imagem de menina sentada vendo um tablet' ></img>
        </header>
    )
}



export default Header 