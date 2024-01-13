import React, { Component } from "react";
import "./Hamper.css";

export default class Hamper extends Component {
  render() {
    return (
      <section className="hamper-bg mb-4">
        <div className="container py-5">
          <h1 className="text-center text-906 mb-4">
            Festive Special Wellness Hampers
          </h1>
          <p className="text-center text-906 mb-5 fs-sand">
            This festive season, choose meaningful gifts for your loved ones!
          </p>

          <div className="row ">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="images/hamper_img1.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  DAILY POSITIVITY HAMPER
                </h5>
                <center>
                  <a href="" className="text-906 text-decoration-none fs-sand arrow">
                    Shop Now
                    
                  </a>
                </center>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div>
                <img
                  src="images/hamper_img2.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  ATTRACT ABUNDANCE HAMPER
                </h5>
                <center>
                  <a href="" className="text-906 text-decoration-none fs-sand arrow">
                    Shop Now
                    
                  </a>
                </center>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="images/hamper_img3.webp"
                  alt=""
                  className="img-fluid mb-3"
                />
              </div>
              <div>
                <h5 className="text-906 text-center mb-3">
                  MORNING ROUTINE ESSENTIALS HAMPER
                </h5>
                <center>
                  <a href="" className=" text-906 text-decoration-none fs-sand arrow">
                    Shop Now
                    
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
