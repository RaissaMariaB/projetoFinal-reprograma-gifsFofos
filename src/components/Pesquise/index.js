import React, { Fragment } from 'react'
import Input from './components/input'

const Pesquise = props => {
    const { typing, btnClick } = props
    return (
        <Fragment>
            <Input typing={typing} btnClick={btnClick}></Input>
        </Fragment>
    )
}

export default Pesquise