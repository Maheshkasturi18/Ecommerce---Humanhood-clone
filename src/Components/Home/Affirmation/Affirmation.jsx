import React, { Component, useState } from "react";

export default class Affirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: Math.max(prevState.count - 1, 1),
    }));
  };
  render() {
    return (
      <section className=" mb-4 text-906 fs-sand">
        <div className="container py-5 ">
          <div className="row ">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="images/affirmation_img.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 px-lg-5 ">
              <h6 className="text-black">HUMANHOOD OFFICIAL</h6>
              <h1 className="mb-4 text-black pe-5">
                2024 Dated Planner: Garden of Dreams + Free Affirmation Flip Up
              </h1>
              <div className="d-flex gap-4 align-items-center">
                <p className="m-0 text-black text-decoration-line-through">Rs. 1,499.00 </p>
                <p className="fs-5 mb-0  text-black">Rs. 1,125.00</p>
                <p className="m-0 px-3 py-1 rounded-4 bg-f5">Sale</p>
              </div>

              <p className="fs-14">
                <a href="" className=" text-906">
                  Shipping
                </a>
                &nbsp; calculated at checkout
              </p>

              <p className="fs-14">Quantity</p>

              <div className="Counter d-inline-flex border-906 mb-3">
                <button
                  onClick={this.handleDecrement}
                  className="border-0 px-3 bg-transparent text-906 fs-2"
                >
                  -
                </button>
                <h2 className=" fs-5 m-auto text-center">{this.state.count}</h2>
                <button
                  onClick={this.handleIncrement}
                  className="border-0 px-3 bg-transparent text-906 fs-4"
                >
                  +
                </button>
              </div>

              <div className="d-grid gap-3 mb-5 cart-button">
                <a href="" className="btn bg-906">
                  Add to cart
                </a>
                <a href="" className="btn  border-906 p-3 rounded-0">
                  Buy it now
                </a>
              </div>

              <div className="d-flex justify-content-between share">
                <a href="" className="text-906">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-up-from-line pe-2"
                  >
                    <path d="m18 9-6-6-6 6" />
                    <path d="M12 3v14" />
                    <path d="M5 21h14" />
                  </svg>
                  Share
                </a>
                <a href="" className="text-906 arrow">
                  View full details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
