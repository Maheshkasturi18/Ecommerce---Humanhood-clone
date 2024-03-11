import React, { useState, useEffect } from "react";

function NewsletterForm() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Set timeout to display the form after 5 seconds
    const timer = setTimeout(() => {
      setShowForm(true);

      document.body.classList.add('newsletter-overlay-open');
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Run only once on component mount

  const handleClose = () => {
    setShowForm(false);

    document.body.classList.remove("newsletter-overlay-open");
  };

  return (
    <div
      className={`modal fade ${showForm ? "show" : ""}`}
      id="newsletterModal"
      tabIndex="-1"
      aria-labelledby="newsletterModalLabel"
      aria-hidden={!showForm}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
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
            <div className="form-column col-md-4">
              <h2 className="modal-title" id="newsletterModalLabel">
                Subscribe to our Newsletter
              </h2>
              <form>
                {/* Newsletter form fields */}
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="image-column col-md-8">
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
  );
}

export default NewsletterForm;
