import React, { Fragment } from "react";
import Nav from "../../components/Nav";
import Card from "../RenderGif/components/BoxGif";
import Btn from "../../components/Pesquise/components/Btn";
import { getGif, getGifRandom } from "../../api/user";

import "./style.css";

class RenderGif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: {},
      value: "", 
      number: 0
    };
  }

  searchGif = e => {
		getGif(this.state.value)
			.then(response => {
        console.log("2",response.data.data)
        this.setState({number: this.state.number + 1})
				this.setState({
          gifs: response.data.data[this.state.number].images.downsized_medium.url,
        });

			})
			.catch(error => {

			});
    
  };

  searchRandom = e => {
    console.log(e, "clickRandon");
    getGifRandom()
      .then(response => {
				console.log(response.data);
				
        this.setState({
          gifs: response.data.data.images.downsized_medium.url
        });

      })
      .catch(error => {

      });
  };

  componentDidMount() {
		console.log(this.props.history.location.state.value, "valueprops");
		if (this.props.history.location.state.value !== '') {
			this.searchGif()
			this.setState({ value: this.props.history.location.state.value })
		} else {
			this.searchRandom()
		}
  }

  render() {
    console.log(this.state.value, "valuestate");

		const funcaoBtn = this.state.value === '' ? this.searchRandom : this.searchGif
    return (
      <Fragment>
        <Nav />
        {console.log(this.state.gif)}
        <div className="container_gifs">
          <Card src_gif={this.state.gifs}></Card>
          <div className="container_btn">
            
            <Btn btnStyle="random-azul" btnClick={funcaoBtn}>Próximo</Btn>
          </div>
          
        </div>
        <footer className='footer_gif'>
              <p>
                  Feito com amor por <a className='link_footer' href='https://www.linkedin.com/in/raissa-barata-6bb58b169/'>Raissa Barata</a>, na <a className='link_footer' href='https://www.reprograma.com.br/'>reprograma</a> 
              </p>

          </footer>
      </Fragment>
    );
  }
}

export default RenderGif;
