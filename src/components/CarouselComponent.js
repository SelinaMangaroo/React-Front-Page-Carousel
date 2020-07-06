import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel>
          {this.props.data.map((item) => {
            return (
              <Carousel.Item>
                <div dangerouslySetInnerHTML={{ __html: item.media_tag }} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
