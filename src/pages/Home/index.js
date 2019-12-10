import React, { Fragment } from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'

import './style.css'

class Home extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <Fragment>
                <Nav></Nav>
                <Header/>

            </Fragment>
        )
    }
}



export default Home