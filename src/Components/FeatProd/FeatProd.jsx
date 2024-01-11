import React, { Component } from "react";

export default class FeatProd extends Component {
  render() {
    return (
      <section>
        <div className="container mb-5  py-5">
          <h2 className="mb-4 "> Featured products </h2>

          <div className="row mb-4">
            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img1.webp"
                  className="card-img-top"
                  alt="..."
                />

                <img
                  src="images/Feat_prod_img5.webp"
                  className="card-img-top hide"
                  alt="..."
                />
              </div>

              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Self Awareness Journal
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  DECEMBER 26, 2023
                </p>
                <p className="card-text text-dark">Rs. 899.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img2.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Expense Tracker
                  </h6>
                </a>
                <p className="card-text text-black card-date ">
                  JANUARY 3, 2024
                </p>
                <p className="card-text text-dark lh-base">Rs. 399.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img3.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Daily Journal
                  </h6>
                </a>
                <p className="card-text text-black card-date ">
                  DECEMBER 19, 2023
                </p>
                <p className="card-text text-dark lh-base">Rs. 899.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img4.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Affirmation Flip-Up
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  DECEMBER 6, 2023
                </p>
                <p className="card-text text-dark">Rs. 699.00</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img5.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Gratitude Log + Letters
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  JANUARY 3, 2024
                </p>
                <p className="card-text text-dark">Rs. 999.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img6.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Manifestation Workbook
                  </h6>
                </a>
                <p className="card-text text-black card-date ">
                  JANUARY 3, 2024
                </p>
                <p className="card-text text-dark lh-base">Rs. 899.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img7.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Plan Your Day Notepad
                  </h6>
                </a>
                <p className="card-text text-black card-date ">
                  JANUARY 3, 2024
                </p>
                <p className="card-text text-dark lh-base">Rs. 299.00</p>
              </div>
            </div>

            <div className="col-md-3 card h-100 border-0 cd">
              <div className="feat-prod-img">
                <img
                  src="images/Feat_prod_img8.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body px-0">
                <a href="">
                  <h6 className="card-title text-black fw-semibold">
                    Plan Your Week Notepad
                  </h6>
                </a>
                <p className="card-text text-black card-date">
                  NOVEMBER 22, 2023
                </p>
                <p className="card-text text-dark">Rs. 499.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
