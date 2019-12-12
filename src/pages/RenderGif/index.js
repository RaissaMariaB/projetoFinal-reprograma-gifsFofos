import React, {Fragment} from 'react'
import Nav from '../../components/Nav'
import Card from '../RenderGif/components/BoxGif'
import Btn from '../../components/Pesquise/components/Btn'
import { getGif } from '../../api/user'


import './style.css'

class RenderGif extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            gif: {},
            value: ''
        }
        
    }

    componentDidMount(){
        console.log(this.props.history.location.state.value);
        console.log(this.props.history.location.state.gifs);
        this.setState({ value: this.props.history.location.state.value})
        console.log(this.state.value)
    }

    render(){
        // const {gif_src} = this.props.history.location.state.gifs
        return(
            <Fragment>
                <Nav/>
                <div className='container_gifs' >
                    <Card src_gif={this.props.history.location.state.gifs}>

                    </Card>
                    <div className='container_btn'>
                        <Btn className="random-rosa" btnClick={getGif(this.   state.value)}>
                            random
                        </Btn>
                        <Btn className="random-azul">
                            Próximo
                        </Btn>

                    </div>
                    
                </div>


            </Fragment>

        )
    }



}

export default RenderGif
