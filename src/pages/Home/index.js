import React, { Fragment } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Sobre from "../../components/Sobre";
import Card1 from "../../assets/images/Group12.png";
import Card2 from "../../assets/images/Group1.png";
import Card3 from "../../assets/images/Group3.png";
import titleSobre from "../../assets/images/Sobre.png";
import Search from "../../components/Pesquise";
import Btn from "../../components/Pesquise/components/Btn";
import { getGif, getGifRandom } from "../../api/user";

import "./style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      gifs: {},
      gifRandom: "",
      error: ""
    };
  }

  inputValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  

  changePage = e => {
    console.log(e.target.className)
    if ((e.target.className === "btn-lupa" && this.state.value !== "") || e.target.className === "random-azul") {
      this.props.history.push({
        pathname: "/gifs",
        state: {
          value: this.state.value
        }
      })
    }
  };

  render() {
    return (
      <Fragment>
        <Nav styleNav="navbarHome"></Nav>
        <Header />
        <section className="container__sobre">
          <h1 className="sobre-h1">
            <img
              alt="Título da seção Sobre"
              className="title-sobre"
              src={titleSobre}
            ></img>
          </h1>
          <hr />

          <div className="container__cards">
            <Sobre
              imgSrc={Card1}
              children="as vezes só precisamos de um gif de gatinho para melhorarmos nosso dia."
              altImg="foto de bonqeuinho fictício fofo segurando um coração"
            />
            <Sobre
              imgSrc={Card2}
              children="Pensando nisso, esse é um local mágico, onde as suas bads não tem vez, e apenas a fofurice é bem vinda!"
              altImg="foto de uma menina em desenho fazendo um coração com as mãos"
            />
            <Sobre
              className="ajuste-envelope"
              imgSrc={Card3}
              children="como no fim do dia tudo se resume a quem você quer alegrar com esse gif, te damos essa opção."
              altImg="foto de um envelope com um coração cima"
            />
          </div>
        </section>
        <section className="container__pesquise">
          <h1 className="title-search">Dá uma pesquisadinha</h1>
          <hr />
          <div className="container__input">
            <p className="text-random2">digite aqui um tema para gif</p>
            <Search typing={this.inputValue} btnClick={this.changePage} />
          </div>
          <div className="container__buttom">
            <p className="text-random">
              está na dúvida do que pesquisar? <br /> clica aqui que ajudamos
            </p>
            <Btn btnStyle="random-azul" btnClick={this.changePage} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
