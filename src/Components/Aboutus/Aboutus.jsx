import React, { Component } from "react";

export default class Aboutus extends Component {
  render() {
    return (
      <div>
        <div className="container text-center ">
          <div className="p-5 ">
            <h1 className="mb-4">Our Purpose</h1>
            <p className="fs-sand">
              Our Vision - To create a positive ecosystem where every energy
              exchanged is oriented towards a better well-being.
            </p>
            <p className="fs-sand">
              Our Mission - To create simple tools that simplify life and
              empower growth, lifestyle & wellness.
            </p>
          </div>

          <h1 className="mb-5">Chief Humans at Humanhood</h1>

          <div className="row py-5 ">
            <div className="col-lg-6 card border-0 mb-2 mb-lg-0">
              <img
                src="images/aboutus_img1.webp"
                alt=""
                className="card-img-top founder-img "
              />

              <div class="card-body text-start founder-name ">
                <h5 className="card-title">Sakshi Sanghavi - Founder</h5>
              </div>
            </div>
            <div className="col-lg-6 card border-0">
              <img
                src="images/aboutus_img2.webp"
                alt=""
                className="card-img-top founder-img"
              />

              <div class="card-body text-start founder-name ">
                <h5 className="card-title">Unnati Shah - Founder</h5>
              </div>
            </div>
          </div>

          <p className="mx-md-5 px-5 lh-lg fs-sand">
            Humanhood is a blend of Sakshi's and Unnati's purpose and passion!
            While the first always wanted to build a business that makes a
            difference to her world, the latter lives to uplift the individuals
            around her! One conversation about their calling, one common love
            for neutral aesthetics, and one aligned dream of creating an impact
            - that's how Humanhood was born!
          </p>
          <h1>Thoughts Become Things</h1>

          <div className="row py-5">
            <div className="col-md-6">
              <img
                src="images/aboutus_img3.webp"
                alt=""
                className="founder-img"
              />
            </div>
            <div className="col-md-6 p-5 lh-lg text-start fs-sand">
              <p>
                Humanhood is a brainchild of Sakshi & Unnati. Right from
                recognising problems, outlining creative solutions, designing an
                aesthetic and appealing tool, pushing it to production to making
                it handy for the community - they two are personally invested in
                the entire process of creating all the self help tools under the
                Humanhood Store.
              </p>
              <p>
                Every self help tool that we create, stems from an intention of
                solving a common lifestyle issue, a purpose of moving towards
                wellness rituals and a potential outcome of living life to the
                fullest potential. Our core focus is to build simple tools that
                the mass can understand and use to enhance their well-being.
                Having realised the importance of a healthy well-being, we price
                our tools at the most moderate prices for it to be accessible to
                as many humans possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
