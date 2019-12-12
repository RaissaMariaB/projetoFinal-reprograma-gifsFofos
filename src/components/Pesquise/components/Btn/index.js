import React from 'react'

import './style.css'

const Btn = props =>{
    const {btnClick, btnStyle, children} = props
    return(
        <button className={btnStyle} onClick={btnClick}>
            {children}
        </button>
    )
}


export default Btn