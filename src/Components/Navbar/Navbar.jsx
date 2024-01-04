import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fs-sand">
          <div className="container py-3">

          <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>

            <a href="" className="navbar-Brand ">
              <img alt="" src="images/logo-img.avif" />
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-lg-3 me-auto ">
                <li className="nav-item px-2 px-lg-3 item-list">
                  <a className="nav-link active " aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown px-2">
                  <a
                    className="nav-link dropdown-toggle  px-lg-2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="services"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu dropdown-content flex-column">
                    <li>
                      <a className="dropdown-item" href="">
                        Shop All
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item text-wrap" href="">
                        Dreams to Reality Collection
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="">
                        Self Help Products
                      </a>
                    </li>

                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href=""
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="services"
                      >
                        Merchandise
                      </a>
                      <ul className="dropdown-menu dropdown-content2">
                        <li>
                          <a className="dropdown-item" href="">
                            Notebooks
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item text-wrap" href="">
                            Tote Bags
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="">
                            Candles
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="">
                            Wall Art
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item text-wrap" href="">
                            Sweatshirts
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="">
                            Shop All
                          </a>
                        </li>

                      </ul>
                    </li>

                    <li>
                      <a className="dropdown-item" href="">
                        Bulk Orders
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="">
                        Thoughtful Gifting
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item px-2 item-list">
                  <a className="nav-link " aria-current="page" href="/">
                    Join Our Community
                  </a>
                </li>

                <li className="nav-item px-2 item-list">
                  <a className="nav-link " aria-current="page" href="/">
                    Blogs
                  </a>
                </li>
                <li className="nav-item px-2 item-list">
                  <a className="nav-link " aria-current="page" href="/">
                    Talk Therapy
                  </a>
                </li>
                <li className="nav-item px-2 item-list">
                  <a className="nav-link " aria-current="page" href="/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex gap-2 gap-md-4 search">
              <i class="fa-solid fa-magnifying-glass  fs-5 mt-1 "></i>
              <span class="material-symbols-outlined fs-3">shopping_bag</span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
