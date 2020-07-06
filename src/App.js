import React, { Component } from "react";
import axios from "axios";
import "./slick-carousel/App.css";
import itemData from "./itemData";
import Slick from "./slick-carousel/Slick";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // items: [],
      items: itemData,
      isLoading: false,
    };
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const endpoint =
  //     "http://metabolic2.whirl-i-gig.com:8085/Front/getData/download/1";
  //   axios.get(endpoint).then((response) => {
  //     this.setState({
  //       items: response.data,
  //       isLoading: false,
  //     });
  //     console.log(this.state.items);
  //   });
  // }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : (
          <Slick data={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;
