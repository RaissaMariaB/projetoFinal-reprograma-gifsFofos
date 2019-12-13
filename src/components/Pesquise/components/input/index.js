import React, { Fragment } from 'react'
import Btn from '../Btn'
import Lupa from '../../../../assets/images/lupa.png'


import './style.css'

const Input = props => {
    const {typing, btnClick} = props
    return(
        <Fragment>
            
            <input className='input-box' onChange={typing} ></input>
            <Btn btnStyle='btn-lupa' btnClick={btnClick} >
                <img src={Lupa} className='size_lupa'></img>
                </Btn>            

        </Fragment>

    )
}




export default Input