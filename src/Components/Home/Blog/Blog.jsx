import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Blog extends Component {
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
          breakpoint: 1030,
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
      <section >
        <div className="container mb-5 ">
          <h2 className="mb-4 d-none d-lg-block px-3 "> Read </h2>

          <div className="d-flex justify-content-between px-3  d-md-block d-lg-none mb-4">
            <h2 className=""> Read... </h2>
            <a href="/" className="text-906">
              View all
            </a>
          </div>

          <Slider {...settings} className="mb-5 fs-sand">
            <div className="card h-100 border-0 cd">
              <div className="card-img">
                <img
                  src="images/Blog_img1.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Do These Five Things Before You Welcome New Yea...
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  DECEMBER 26, 2023
                </p>
                <p className="card-text text-dark">
                  The new year is pretty close. It is an exciting time for a
                  fresh start but there are some important tasks you need to
                  tackle before you welcome new year. It...
                </p>
              </div>
            </div>

            <div className="card h-100 border-0 cd">
              <div className="card-img">
                <img
                  src="images/Blog_img2.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    These 5 Ways Will Help You Cultivate A Positive...
                  </h6>
                </a>
                <p className="card-text text-black card-date ">
                  DECEMBER 19, 2023
                </p>
                <p className="card-text text-dark lh-base">
                  Your mindset is one of the most powerful tools out there and
                  it can affect many areas of your health and well being . It
                  also plyas a key role in...
                </p>
              </div>
            </div>

            <div className="card h-100 border-0 cd">
              <div className="card-img">
                <img
                  src="images/Blog_img3.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    5 Examples of Vision Boards That You Can Use To...
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  DECEMBER 6, 2023
                </p>
                <p className="card-text text-dark">
                  Vision boards serve as visual representations of your
                  aspirations. They act as a constant reminder of the life you
                  want to create. We'll explore five examples of vision boards
                  that...
                </p>
              </div>
            </div>
          </Slider>
          <center>
            <a
              href="/"
              className="text-decoration-none text-secondary d-none d-lg-block"
            >
              View all
            </a>
          </center>
        </div>
      </section>
    );
  }
}
