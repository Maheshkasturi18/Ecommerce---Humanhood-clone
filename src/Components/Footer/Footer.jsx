import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="">
        <div className="border-bottom border-dark-subtle">
          <div className="container px-4 px-lg-0">
            <div className="row">
              <div className="col-md-4 logo-imag mb-4">
                <img src="images/logo-img.avif" alt="" />
              </div>

              <div className="col-md-4 mb-4">
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

              <div className="col-md-4">
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

            <div className=" newsletter py-5">
              <div>
                <h5>Subscribe to our emails</h5>
                <form action="#">
                  <div className="input-group inp-grp  mt-3">
                    <div class="form-floating  ">
                      <input
                        type="text"
                        class="form-control shadow-none border-0"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                      />
                      <label for="email">Email</label>
                    </div>
                    <button
                      class="btn "
                      type="button"
                      id="button-addon2"
                    >
                      <i class="fa-solid fa-arrow-right text-secondary"></i>
                    </button>
                  </div>
                </form>
              </div>

              <div className="gap-4  follow-us">
                <i class="fa-brands fa-square-facebook fs-4"></i>
                <i class="fa-brands fa-instagram fs-4"></i>
                <i class="fa-brands fa-linkedin-in fs-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 text-center text-secondary">
          © 2023,
          <a href="" className="text-decoration-none text-secondary">
            Humanhood Official
          </a>
        </div>
      </footer>
    );
  }
}
