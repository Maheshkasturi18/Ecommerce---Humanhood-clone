import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import SearchBar from "./Searchbar";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <section className="container-fluid bg-904c">
        <div className="container arrow p-2 text-center ">
          <a href="" className="text-black text-decoration-none">
            Avail FREE SHIPPING on your prepaid orders now!
          </a>
        </div>
      </section>
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

            <Link to="" className="navbar-Brand ">
              <img alt="" src="images/logo-img.avif" />
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-lg-3 me-auto ">
                <li className="nav-item px-2 px-lg-3 item-list">
                  <Link className="nav-link active " aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown px-2">
                  <Link
                    className="nav-link dropdown-toggle  px-lg-2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="services"
                    to=""
                  >
                    Shop
                  </Link>
                  <ul className="dropdown-menu dropdown-content flex-column">
                    <li>
                      <Link className="dropdown-item" to="">
                        Shop All
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item text-wrap" to="">
                        Dreams to Reality Collection
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="">
                        Self Help Products
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to=""
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        id="services"
                      >
                        Merchandise
                      </Link>
                      <ul className="dropdown-menu dropdown-content2">
                        <li>
                          <Link className="dropdown-item" to="">
                            Notebooks
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item text-wrap" to="">
                            Tote Bags
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="">
                            Candles
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="">
                            Wall Art
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item text-wrap" to="">
                            Sweatshirts
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="">
                            Shop All
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="">
                        Bulk Orders
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="">
                        Thoughtful Gifting
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item px-2 item-list">
                  <Link className="nav-link " aria-current="page" to="JoinComn">
                    Join Our Community
                  </Link>
                </li>

                <li className="nav-item px-2 item-list">
                  <Link className="nav-link " aria-current="page" to="Blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item px-2 item-list">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="TalkTherapy"
                  >
                    Talk Therapy
                  </Link>
                </li>
                <li className="nav-item px-2 item-list">
                  <Link className="nav-link " aria-current="page" to="Aboutus">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex gap-2 gap-md-4 search">
              <div
                className="search-icon"
                onClick={() => (isNavOpen ? closeNav() : openNav())}
              >
                <i class="fa-solid fa-magnifying-glass fs-5 mt-1 "></i>
              </div>
              <div
                className={`mx-auto search-bar ${
                  isNavOpen ? "overlay open" : "overlay"
                }`}
              >
                <div className="input-group search-inp-grp">
                  <div class="form-floating">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control shadow-none ms-0 border-0"
                      id="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <label for="search">Search</label>
                  </div>
                  <button class="btn " type="button" id="button-addon2">
                    <i class="fa-solid fa-magnifying-glass  fs-5 mt-1 "></i>
                  </button>
                </div>

                <button
                  class="btn "
                  type="button"
                  id="button-addon2"
                  onClick={closeNav}
                >
                  <i class="fa-solid fa-xmark fs-3"></i>
                </button>
              </div>

              <span class="material-symbols-outlined fs-3 my-2 py-lg-2">
                shopping_bag
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
