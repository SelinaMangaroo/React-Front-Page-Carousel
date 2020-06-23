import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const endpoint =
      "http://metabolic2.whirl-i-gig.com:8085/Front/getData/download/1";
    axios.get(endpoint).then((response) => {
      this.setState({
        items: response.data,
        isLoading: false,
      });
      console.log(this.state.items);
    });
  }

  render() {
    const settings = {
      arrows: true,
      className: "slides",
      dots: true,
      // fade: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 2,
      speed: 500,
    };

    return (
      <div className="App">
        <Slider {...settings}>
          {this.state.items.map((item) => {
            return (
              <div className="container">
                <Card variant="outlined">
                  <CardMedia>
                    <div
                      className="image"
                      dangerouslySetInnerHTML={{ __html: item.media_tag }}
                    />
                  </CardMedia>

                  <CardContent>
                    <Typography align="left" display="inline" variant="caption">
                      <div
                        className="caption"
                        dangerouslySetInnerHTML={{ __html: item.caption }}
                      />
                    </Typography>
                  </CardContent>

                  <Divider />

                  <CardActions>
                    <Button variant="outlined" color="primary" size="small">
                      <a className="url" href={item.url} rel="noopener">
                        URL
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default App;
