import React from 'react'

import './style.css'

const Btn = props =>{
    const {btnClick, btnStyle,} = props
    return(
        <button className={btnStyle} onClick={btnClick}>
            
        </button>
    )
}


export default Btn