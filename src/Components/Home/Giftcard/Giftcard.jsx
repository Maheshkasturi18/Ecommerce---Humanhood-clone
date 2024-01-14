import React, { Component, useState } from "react";

export default class Giftcard extends Component {
  render() {
    return (
      <section className="bg-f5 mb-4 text-906 fs-sand">
        <div className="container py-5 ">
          <div className="row ">
            <div className="col-lg-6 mb-4 mb-md-0">
              <img
                src="images/giftcard_img.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 px-lg-5 ">
              <h1 className="mb-4">Humanhood Gift Card</h1>
              <p className="fs-4 m-0">Rs. 1500.00</p>

              <p className="fs-14">
                <a href="" className=" text-906">
                  Shipping
                </a>
                &nbsp; calculated at checkout
              </p>

              <p className="fs-14">Denominations</p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <a href="" className="card-btn-price">
                  1500.00
                </a>
                <a href="" className="card-btn-price1 ">
                  3000.00
                </a>
                <a href="" className="card-btn-price1">
                  4000.00
                </a>
              </div>

              <p className="fs-14">Quantity</p>

              <div className="Counter">
                <button onclick="increment()">+</button>
                <h2 id="counting"></h2>
                <button onclick="decrement()">-</button>
              </div>

              <div className="d-grid gap-3 mb-5 cart-button">
                <a href="" className="btn bg-906">
                  Add to cart
                </a>
                <a href="" className="btn bg-906">
                  Buy it now
                </a>
              </div>

              <div className="d-flex justify-content-between share  ">
                <a href="" className="text-906 text-decoration-none">
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
                <a href="" className="text-906 arrow text-decoration-none">
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

// function Counter() {
//   let data = 0;

//   //printing default value of data that is 0 in h2 tag
//   document.getElementById("counting").innerText = data;

//   //creation of increment function
//   function increment() {
//     data = data + 1;
//     document.getElementById("counting").innerText = data;
//   }

//   //creation of decrement function
//   function decrement() {
//     data = data - 1;
//     document.getElementById("counting").innerText = data;
//   }
// }

// export default Counter();
