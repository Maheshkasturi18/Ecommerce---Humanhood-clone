import React, { useState, useEffect } from "react";

function NewsletterForm() {
  const [showForm, setShowForm] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  // Set timeout to display the form after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      document.body.classList.add("newsletter-overlay-open");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Run only once on component mount

  // submit btn
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would submit the form data, for now, we're just simulating the submission
    // Once the form is successfully submitted, set subscribed to true
    setSubscribed(true);
  };

  // close btn
  const handleClose = () => {
    setShowForm(false);
    document.body.classList.remove("newsletter-overlay-open");
  };

  return (
    <>
      {/* Modal Backdrop */}
      {showForm && (
        <div>
          <div className="modal-backdrop show" onClick={handleClose}></div>

          <div
            className={`modal d-none d-lg-block fade ${showForm ? "show" : ""}`}
            id="newsletterModal"
            tabIndex="-1"
            aria-labelledby="newsletterModalLabel"
            aria-hidden={!showForm}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered justify-content-center">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>

                <div className="modal-body row custom-modal-body">
                  <div className="form-column col-md-6 p-5 text-center  ">
                    {subscribed ? (
                      <>
                        <h2 className="text-906 mb-3">
                          Thank you for subscribing us !!!
                        </h2>
                        <p className="text-906">
                          You will get 5% discount on your next purchase.
                        </p>
                      </>
                    ) : (
                      <div>
                        <h1 className="fw-bold">WAIT!</h1>
                        <h4
                          className="modal-title mb-5"
                          id="newsletterModalLabel"
                        >
                          Don't go just yet!
                        </h4>
                        <p>
                          Before you go, we'd like to offer you an extra 5% off
                          your next purchase.
                        </p>

                        {/* Newsletter form fields */}
                        <form onSubmit={handleSubmit}>
                          <input
                            type="email"
                            className="form-control mb-2"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />

                          <button
                            type="submit"
                            className="btn bg-904c mb-4 rounded-0 w-100 text-white fw-bold"
                          >
                            Stay and Save 5%
                          </button>
                        </form>
                        {/* Newsletter form fields */}

                        <a href="" className="text-decoration-none text-black">
                          No thanks!
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="image-column col-md-6">
                    <img
                      src="images/newsletter_img.png"
                      alt="Newsletter"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsletterForm;
