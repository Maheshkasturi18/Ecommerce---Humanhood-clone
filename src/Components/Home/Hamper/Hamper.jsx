import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hamper.css";

export default class Hamper extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    };
    return (
      <div className="container-fluid p-3 p-md-4 text-center">
        <h2 className="mb-4 text-906"> Testimonials </h2>
        <Slider {...settings}>
          <div className="">
            <div className=" p-3 p-md-5 testimonial mb-3">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <p className="text-start">
                Go for the Daily Journal. I am using it for following my regular
                schedule and reviewing my progress.
              </p>
            </div>
            <h6>Kavya Mita</h6>
          </div>
          <div>
            <div  className=" p-3 p-md-5 testimonial mb-3">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <p className="text-start">
                The Self Awareness Journal is like having my own cheerleader.
                Thank you for bringing back my confidence.
              </p>
            </div>
            <h6>Amrita Nepram </h6>
          </div>
          <div>
            <div  className=" p-3 p-md-5 testimonial mb-3">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <p className=" review text-start">
                I’ve been using their products for a year + and they’ve worked
                for me always!
              </p>
            </div>
            <h6>Karishma Mehta</h6>
            <p className="text-secondary">Founder of Humans of Bombay</p>
          </div>
        </Slider>

        <p className="text-center text-secondary widget mt-4">
          <a href="/" className="text-secondary">
            {" "}
            Testimonials{" "}
          </a>{" "}
          &nbsp; widget by &nbsp;
          <a href="/" className="text-secondary">
            Reputon{" "}
          </a>
        </p>
      </div>
    );
  }
}
