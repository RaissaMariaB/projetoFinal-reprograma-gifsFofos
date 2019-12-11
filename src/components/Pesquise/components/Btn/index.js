import React from 'react'

import './style.css'

const Btn = props =>{
    const {btnClick, btnStyle, chlidren } = props
    return(
        <button className={btnStyle} onClick={btnClick}>
            {chlidren}
        </button>
    )
}


export default Btn