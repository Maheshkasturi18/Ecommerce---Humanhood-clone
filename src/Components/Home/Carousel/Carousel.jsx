import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        {/* desk view */}
        <section className="d-none d-md-block">
          <div className="container-fluid p-0  ">
            <div
              id="carouselExample"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img
                    src="images/carosael_img1.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carosael_img2.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carosael_img3.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carosael_img4.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="carousel-indicators border-bottom">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              data-bs-ride="carousel"
            >
              1
            </button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              data-bs-ride="carousel"
            >
              2
            </button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              data-bs-ride="carousel"
            >
              3
            </button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              data-bs-ride="carousel"
            >
              4
            </button>
          </div>
        </section>
        {/* desk view */}

        {/* mobile view start */}
        <section className="d-md-none d-block">
          <div className="container-fluid p-0 ">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img
                    src="images/carousel_mb_img1.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carousel_mb_img2.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carousel_mb_img3.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="images/carousel_mb_img4.webp"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="carousel-indicators border-bottom">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              data-bs-ride="carousel"
            >
              1
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              data-bs-ride="carousel"
            >
              2
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              data-bs-ride="carousel"
            >
              3
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              data-bs-ride="carousel"
            >
              4
            </button>
          </div>
        </section>
        {/* mobile view end */}
      </div>
    );
  }
}
