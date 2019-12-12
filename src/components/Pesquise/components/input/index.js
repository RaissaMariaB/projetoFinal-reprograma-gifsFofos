import React, { Fragment } from 'react'
import Btn from '../Btn'


import './style.css'

const Input = props => {
    const {typing, btnClick} = props
    return(
        <Fragment>
            
            <input className='input-box' onChange={typing} ></input>
            <Btn btnStyle='btn-lupa' btnClick={btnClick} />            

        </Fragment>

    )
}




export default Input