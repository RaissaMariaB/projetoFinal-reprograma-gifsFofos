import React, {Fragment} from 'react' 
import Input from './components/input'




const Pesquise = props => {
    const {typing} = props
    return(
        <Fragment>
            <Input typing={typing}></Input>
            
        </Fragment>       

    )
}

export default Pesquise