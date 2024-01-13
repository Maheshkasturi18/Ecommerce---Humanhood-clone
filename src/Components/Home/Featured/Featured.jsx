import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Featured extends Component {
  render() {
    const settings = {
      responsive: [
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="container text-center">
        <h2 className="mb-4 text-906 "> Featured In </h2>
        <Slider {...settings}>
          <div className="feat-row ">
            <img src="images/Featured_img1.webp" alt="" className="feat-img" />
            <img src="images/Featured_img2.webp" alt="" className="feat-img" />
            <img src="images/Featured_img3.webp" alt="" className="feat-img" />
            <img src="images/Featured_img4.webp" alt="" className="feat-img" />
            <img src="images/Featured_img5.webp" alt="" className="feat-img" />

            <img src="images/Featured_img6.webp" alt="" className="feat-img" />
            <img src="images/Featured_img7.webp" alt="" className="feat-img" />
            <img src="images/Featured_img8.webp" alt="" className="feat-img" />
            <img src="images/Featured_img9.webp" alt="" className="feat-img" />
          </div>
        </Slider>

        <div className=" py-4 mb-5">
          <a href="/">
            <img
              src="images/hero_section_img3.webp"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    );
  }
}
