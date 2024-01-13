import React, { Component } from "react";

export default class JoinComn extends Component {
  render() {
    return (
      <div>
        <div className="container text-center text-906">
          <div className="py-4 mb-4 px-md-5 px-sm-0">
            <h1 className="mb-3">SMALL STEPS BY HUMANHOOD</h1>
            
            <p className="container fs-sand lh-lg">
              This well-being community is an attempt to bring like-minded
              people together who are willing to take the small steps towards
              their well-being, personal growth and healthier lifestyles. We
              hope to make this community a safe space, a source of motivation
              and treasure of free self help resources.
            </p>
            <a href="" className="btn fs-sand bg-906">
              Join the community now for free
            </a>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src="images/join_comn_img1.webp" alt="" className="join_comn_img1"/>
            </div>
            <div className="col-md-6 p-5 text-start">
              <h4 className="mb-4 pe-md-5 p-0">
                How to get access to our exclusive community?
              </h4>
              <div className="pe-md-5 p-0">
                <p className="mb-3  fs-sand">
                  - Fill in an application form to become a part of this
                </p>
                <p className="mb-3  fs-sand">
                  - We shall then screen the applications to select members
                </p>
                <p className="mb-3   fs-sand">
                  - Lastly, we shall send an email with the joining details to
                  all selected members
                </p>
              </div>
              <a
                href=""
                className="btn mt-4  fs-sand bg-906 px-md-5 px-4 py-0 text-start"
              >
                Fill in the form to apply for Small Steps Community by Humanhood
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-f5 py-5 mt-5">
          <div className="container">
            <h1 className="text-center mb-4 text-906">Past Activities</h1>

            <div className="row mb-5 text-center">
              <div className="col-lg-4">
                <img
                  src="images/join_comn_img2.webp"
                  alt=""
                  className="img-size  px-4 pt-4"
                />
              </div>
              <div className="col-lg-4">
                <img
                  src="images/join_comn_img3.webp"
                  alt=""
                  className="img-size  px-4 pt-4 my-md-4 m-sm-0 m-lg-0"
                />
              </div>
              <div className="col-lg-4">
                <img
                  src="images/join_comn_img4.webp"
                  alt=""
                  className="img-size px-4 pt-4"
                />
              </div>
            </div>

            <center>
              <button
                type="button"
                className="btn bg-90 disabled"
                data-bs-toggle="button"
              >
                Become a part of our well-being community now!
              </button>
            </center>
          </div>
        </div>

        <div className="container text-center text-906 py-4 ">
          <h1 className="mb-3">What can you expect from Small Steps?</h1>
          <p>
            If you become a member of our exclusive well-being community, you
            shall get access to:
          </p>
          <p>Interactive online and offline events, meet ups and workshops</p>
          <p>
            Self help resources like workbooks, guides, how to's,
            recommendations etc
          </p>
          <p>Community wellness tasks</p>
          <p>Early offers & sale access</p>

          <a href="" className="btn fs-sand bg-906">
            Get free access to our well-being community
          </a>
        </div>
      </div>
    );
  }
}
