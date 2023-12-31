import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      // slidesToScroll: 0,
    };

    return (
      <section className="mb-5">
        <div className="container-fluid p-3 testimonial">
          <h1 className="text-center mb-5 text-906">Testimonial</h1>
          <Slider {...settings}>
            <div className=" text-center mb-4">
              <div className="testimonial-bg px-4 py-5">
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <p className="text-start mb-4">
                  Go for the Daily Journal. I am using it for following my
                  regular schedule and reviewing my progress.
                </p>
              </div>
              <div className="testimonial-bg px-4 py-5">
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
              <div className=" testimonial-bg px-4 py-5">
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>

                <p className="text-start">
                  I’ve been using their products for a year + and they’ve worked
                  for me always!
                </p>
              </div>
            </div>
          </Slider>

          
        </div>
      </section>
      /* <div
         

          

            <div className="row gap- text-center">
              <div className="col-lg-4 ">
                

              </div>
              <div className="col-lg-4 testimonial-bg p-4">
                
              </div>
              <div className="col-lg-4 testimonial-bg p-4">
               
              </div>
            </div>
          
          
        </div> */
    );
  }
}
