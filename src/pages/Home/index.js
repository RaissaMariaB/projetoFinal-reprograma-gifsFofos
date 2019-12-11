import React, { Fragment } from 'react'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Sobre from '../../components/Sobre'
import Card1 from '../../assets/images/Group12.png'
import Card2 from '../../assets/images/Group1.png'
import Card3 from '../../assets/images/Group3.png'
import titleSobre from '../../assets/images/Sobre.png'
import Search from '../../components/Pesquise'


import './style.css'
import Btn from '../../components/Pesquise/components/Btn'


class Home extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <Fragment>
                <Nav></Nav>
                <Header/>
                <section className= 'container__sobre'>
                    <h1 className='sobre-h1'><img alt='Título da seção Sobre' className='title-sobre' src={titleSobre}></img></h1>
                    <hr />
                    
                    <div className= 'container__cards'>
                    <Sobre
                    imgSrc={Card1}
                    children='as vezes só precisamos de um gif de gatinho para melhorarmos nosso dia.'
                    altImg='foto de bonqeuinho fictício fofo segurando um coração'
                    />
                    <Sobre
                     imgSrc={Card2}
                     children='Pensando nisso, esse é um local mágico, onde as suas bads não tem vez, e apenas a fofurice é bem vinda!'
                     altImg='foto de uma menina em desenho fazendo um coração com as mãos'
                    />
                    <Sobre
                     className='ajuste-envelope'
                     imgSrc={Card3}
                     children='como no fim do dia tudo se resume a quem você quer alegrar com esse gif, te damos essa opção.'
                     altImg='foto de um envelope com um coração cima'
                     />
                     </div>
                </section>  
                <section className='container__pesquise'>
                    <h1 className='title-search'>
                        Dá uma pesquisadinha
                    </h1>
                    <hr/>  
                    <div className='container__input'>
                    <p className='text-random2'>
                    digite aqui um tema para gif 
                    </p>
                    <Search
                    />
                    </div>                  
                    <div className='container__buttom'>
                        <p className='text-random'>
                            está na dúvida do que pesquisar? <br/> clica aqui que ajudamos
                        </p>
                        <Btn btnStyle='random-azul'>    
                        random cuteness
                       </Btn>                   

                    </div>
                </section>       

            </Fragment>
        )
    }
}



export default Home