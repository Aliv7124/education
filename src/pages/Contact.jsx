function Contact() {
  return (
    <>
      <style>{`
        /* Cyber Violet Dark Section Base */
        .contact-cyber-section {
          background-color: #0b0f19;
          background-image: 
            radial-gradient(at 20% 20%, rgba(139, 92, 246, 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 80%, rgba(99, 102, 241, 0.12) 0px, transparent 50%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Ambient Background Glow */
        .contact-ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.07);
          filter: blur(140px);
          bottom: -10%;
          left: -5%;
          pointer-events: none;
        }

        /* Cyber Badge */
        .cyber-badge {
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #c4b5fd;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Gradient Text */
        .text-gradient-primary {
          background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Glass Cards */
        .contact-card {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* Contact Info Icon Badges */
        .contact-icon-badge {
          width: 52px;
          height: 52px;
          border-radius: 0.85rem;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover .contact-icon-badge {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
          transform: scale(1.05);
        }

        /* Custom Form Inputs */
        .cyber-input {
          background-color: rgba(11, 15, 25, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #f8fafc;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }

        .cyber-input:focus {
          background-color: rgba(15, 23, 42, 0.9);
          border-color: #8b5cf6;
          color: #ffffff;
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.18);
          outline: none;
        }

        .cyber-input::placeholder {
          color: #64748b;
        }

        /* Social Media Action Buttons */
        .cyber-social-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #c4b5fd;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cyber-social-btn:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(139, 92, 246, 0.4);
        }

        /* Luxury Gold Glowing Animated Button */
        .btn-luxury-gold {
          position: relative;
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #b45309 100%);
          border: 1px solid rgba(254, 240, 138, 0.5);
          color: #000000 !important;
          font-weight: 700;
          letter-spacing: 0.4px;
          border-radius: 0.75rem;
          padding: 0.85rem 2rem;
          box-shadow: 0 8px 25px -4px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          z-index: 1;
        }

        .btn-luxury-gold::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transition: 0.6s ease;
          z-index: 2;
        }

        .btn-luxury-gold:hover::before {
          left: 100%;
        }

        .btn-luxury-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -2px rgba(245, 158, 11, 0.6), 0 0 20px rgba(251, 191, 36, 0.4);
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%);
          border-color: rgba(255, 255, 255, 0.8);
          color: #000000 !important;
        }

        .btn-luxury-gold i {
          transition: transform 0.3s ease;
        }

        .btn-luxury-gold:hover i {
          transform: translateX(4px);
        }
      `}</style>

      <section id="contact" className="contact-cyber-section py-5">
        <div className="contact-ambient-glow"></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>

          {/* Section Header */}
          <div className="text-center mb-5">
            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Contact Us
            </span>

            <h2 className="display-6 fw-bold mb-3 text-white">
              We'd Love to <span className="text-gradient-primary">Hear From You</span>
            </h2>

            <p
              className="mx-auto mb-0"
              style={{ maxWidth: '650px', color: '#94a3b8', lineHeight: '1.7' }}
            >
              Have a question about our courses or admissions? Get in touch
              with our team and we'll be happy to help.
            </p>
          </div>

          <div className="row g-4">

            {/* Left Column: Contact Information */}
            <div className="col-lg-5">
              <div className="card contact-card border-0 h-100">
                <div className="card-body p-4 p-lg-5 d-flex flex-column justify-content-between">

                  <div>
                    <h4 className="fw-bold text-white mb-4 fs-4">
                      Get In Touch
                    </h4>

                    {/* Address */}
                    <div className="d-flex gap-3 mb-4 contact-info-item align-items-start">
                      <div className="contact-icon-badge">
                        <i className="bi bi-geo-alt fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-white mb-1">
                          Our Address
                        </h6>
                        <p className="mb-0" style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                          123 Education Street,
                          <br />
                          New Delhi, India 110001
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="d-flex gap-3 mb-4 contact-info-item align-items-start">
                      <div className="contact-icon-badge">
                        <i className="bi bi-telephone fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-white mb-1">
                          Phone Number
                        </h6>
                        <p className="mb-0" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="d-flex gap-3 mb-4 contact-info-item align-items-start">
                      <div className="contact-icon-badge">
                        <i className="bi bi-envelope fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-white mb-1">
                          Email Address
                        </h6>
                        <p className="mb-0" style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                          info@eduinstitute.com
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="d-flex gap-3 contact-info-item align-items-start">
                      <div className="contact-icon-badge">
                        <i className="bi bi-clock fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-white mb-1">
                          Working Hours
                        </h6>
                        <p className="mb-0" style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                          Monday - Saturday
                          <br />
                          9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <h6 className="fw-bold text-white mb-3 fs-6">
                      Follow Us
                    </h6>

                    <div className="d-flex gap-2">
                      <a href="#!" className="cyber-social-btn" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#!" className="cyber-social-btn" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#!" className="cyber-social-btn" aria-label="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#!" className="cyber-social-btn" aria-label="YouTube">
                        <i className="bi bi-youtube"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-lg-7">
              <div className="card contact-card border-0">
                <div className="card-body p-4 p-lg-5">

                  <h4 className="fw-bold text-white mb-4 fs-4">
                    Send Us a Message
                  </h4>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row g-3">

                      {/* Name */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-white small mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control cyber-input"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-white small mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control cyber-input"
                          placeholder="Enter your email"
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-white small mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control cyber-input"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      {/* Subject */}
                      <div className="col-md-6">
                        <label className="form-label fw-semibold text-white small mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control cyber-input"
                          placeholder="Enter subject"
                        />
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label className="form-label fw-semibold text-white small mb-2">
                          Message
                        </label>
                        <textarea
                          className="form-control cyber-input"
                          rows="5"
                          placeholder="Write your message..."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-luxury-gold border-0">
                          <span>Send Message</span>
                          <i className="bi bi-send ms-2"></i>
                        </button>
                      </div>

                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;