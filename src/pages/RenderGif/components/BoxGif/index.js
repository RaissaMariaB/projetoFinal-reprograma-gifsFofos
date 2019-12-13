import React, {Fragment} from 'react'
import Btn from '../../../../components/Pesquise/components/Btn'

import'./style.css'

const Card = props =>{
    const { src_gif } = props
    return(
        <Fragment>
            <div className='container__gif'>
                <img src={src_gif} alt='Gif exposto na tela'/>
            </div>
        </Fragment>
    )
}



export default Card