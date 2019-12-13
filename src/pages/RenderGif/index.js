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
      value: ""
    };
  }

  searchGif = e => {
		getGif(this.state.value)
			.then(response => {
				console.log(response.data, this.state.value);

				this.setState({
					gifs: response.data.data[0].images.downsized_medium.url
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
			this.setState({ value: this.props.history.location.state.value })
			this.searchGif()
		} else {
			this.searchRandom()
		}
  }

  render() {
    console.log(this.state.value, "valuestate");
		// const {gif_src} = this.props.history.location.state.gifs
		const funcaoBtn = this.state.value === '' ? this.searchRandom : this.searchGif
    return (
      <Fragment>
        <Nav />
        <div className="container_gifs">
          <Card src_gif={this.state.gifs}></Card>
          <div className="container_btn">
            {/* <Btn className="random-rosa" btnClick={getGif(this.state.value)}>
              random
            </Btn> */}
            <Btn className="random-azul" btnClick={funcaoBtn}>Próximo</Btn>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RenderGif;
