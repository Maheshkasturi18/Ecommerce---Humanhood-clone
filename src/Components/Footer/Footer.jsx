import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 logo-imag mb-4">
              <img src="images/logo-img.avif" alt="" />
            </div>

            <div className="col-lg-4 mb-4">
              <h6 className="mb-3">Navigation</h6>

              <ul className="list-unstyled mb-0 lh-lg">
                <li>
                  <a href="#!" className="text-secondary ">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Workshops & Partnerships
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Stockists
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Bulk Orders
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#!" className="text-secondary ">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h6 className="mb-3">Policies</h6>

              <ul className="list-unstyled mb-0 lh-lg">
                <li>
                  <a href="#!" className="text-secondary ">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary ">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div></div>
          <div></div>
        </div>
      </footer>
    );
  }
}
