import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideImage1 from "../../../Assets/Images/slider1.png";
import slideImage2 from "../../../Assets/Images/slider2.png";
import slideImage3 from "../../../Assets/Images/slider3.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 3000,
      fade: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="img_slider" src={slideImage1} alt="not found" />
          </div>
          <div>
            <img className="img_slider" src={slideImage2} alt="not found" />
          </div>
          <div>
            <img className="img_slider" src={slideImage3} alt="not found" />
          </div>
        </Slider>
      </div>
    );
  }
}
