import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./App.css";

class Slick extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      arrows: true,
      className: "slides",
      dots: true,
      // fade: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <Slider {...settings}>
        {this.props.data.map((item) => {
          return (
            <div className="container">
              <Card>
                <div
                  className="image"
                  dangerouslySetInnerHTML={{
                    __html: item.media_tag,
                  }}
                />
                <Card.Body>
                  <Card.Text>
                    <div
                      className="caption"
                      dangerouslySetInnerHTML={{
                        __html: item.caption,
                      }}
                    />
                  </Card.Text>
                  <Button variant="outline-primary" size="sm">
                    <a className="url" href={item.url} rel="noopener">
                      URL
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Slick;
