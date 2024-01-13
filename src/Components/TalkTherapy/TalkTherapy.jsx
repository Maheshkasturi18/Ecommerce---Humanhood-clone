import React, { Component } from "react";

export default class TalkTherapy extends Component {
  render() {
    return (
      <div>
        <div className="container text-center text-906">
          <h1 className="mb-4">Seek Expert Help</h1>

          <h5 className="fs-sand">Humanhood x The Mood Space</h5>

          <div className="row">
            <div className="col-md-6 border">
              <img src="images/talk_therapy_img1.webp" alt="" className="img-fluid "/>
            </div>
            <div className="col-md-6 p-lg-5 p-4 text-md-start">
              <h4 className="mb-4 pe-md-5 p-0">About The Mood Space</h4>
              <p className="lh-lg fs-sand">
                The Mood Space is an online talk-therapy platform providing
                comprehensive mental health services to individuals and
                corporates, in a cost-effective, accessible, and confidential
                manner. They are on a mission to make quality mental health care
                accessible to South Asians, everywhere, any time, in all
                languages & all devices.
              </p>
              <a href="" className="btn mt-4  fs-sand bg-906 px-4 py-2">
                Book A Session
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-f5 py-5 mt-2 text-906">
          <div className="container">
            <h1 className="text-center mb-lg-5 mb-4">Know More</h1>

            <div className="row mb-5 lh-lg ">
              <div className="col-lg-4 ">
                <div className="know_more_column  p-4">
                  <h6>Humanhood x The Mood Space</h6>
                  <p className="m-0 fs-sand">
                    This collaboration is an attempt to strengthen our vision of
                    a better well-being for the humans of our community.
                  </p>
                  <p className="m-0 fs-sand">
                    For all those who want to seek expert help, this
                    collaborative platform is a safe space for you!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-2 my-lg-0">
                <div className="know_more_column  p-4">
                  <h6>About Therapy Sessions</h6>

                  <p className="fs-sand m-0">
                    Our therapy sessions are customised to help individuals
                    address their mental health concerns and improve their
                    emotional well-being using a trauma-informed and queer as
                    well as a caste-affirmative lens.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="know_more_column p-4">
                  <h6>Impact of The Mood Space</h6>
                  <p className="m-0 fs-sand ">
                    100+ therapists from renowned institutes proficient in 9+
                    Indian languages
                  </p>
                  <p className="m-0 fs-sand">
                    15,000+ South Asians served globally
                  </p>
                  <p className="m-0 fs-sand">
                    15+ corporate wellness programs delivered
                  </p>
                  <p className="m-0 fs-sand">40,000+ lives touched</p>
                </div>
              </div>
            </div>

            <center>
              <a
                href=""
                type="button"
                className="btn bg-906 "
                data-bs-toggle="button"
              >
                Come, let’s change the way the world looks at mental health and
                build a generation that sees no stigma!
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
