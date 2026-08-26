import { useState } from 'react';
import { Link } from 'react-router-dom';

function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------
           PREMIUM GOLD & CYBER OBSIDIAN THEME
           --------------------------------------------------------- */
        .admission-page {
          background-color: #0c0a09;
          color: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Gold Glow */
        .glow-gold {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.12);
          filter: blur(140px);
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        /* Premium Badge */
        .cyber-badge {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #fbbf24;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Gold Gradient Text */
        .text-gradient-gold {
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Glassmorphic Dark Gold Card */
        .cyber-card {
          background: rgba(24, 24, 27, 0.75);
          border: 1px solid rgba(245, 158, 11, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        /* ---------------------------------------------------------
           PREMIUM GOLD BUTTON
           --------------------------------------------------------- */
        .btn-gold-primary {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #b45309 100%) !important;
          color: #000000 !important;
          font-weight: 700;
          border-radius: 0.75rem;
          padding: 0.85rem 1.75rem;
          border: 1px solid rgba(254, 240, 138, 0.5) !important;
          box-shadow: 0 8px 25px -4px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
        }

        .btn-gold-primary:hover {
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -2px rgba(245, 158, 11, 0.6), 0 0 20px rgba(251, 191, 36, 0.4);
          border-color: rgba(255, 255, 255, 0.8) !important;
          color: #000000 !important;
        }

        .btn-gold-primary:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px -2px rgba(245, 158, 11, 0.5);
        }

        .btn-gold-primary i {
          transition: transform 0.3s ease;
        }

        .btn-gold-primary:hover i {
          transform: translateX(4px);
        }

        /* ---------------------------------------------------------
           INPUT CONTROLS WITH WARM GOLD FOCUS
           --------------------------------------------------------- */
        .cyber-input {
          background-color: rgba(12, 10, 9, 0.8) !important;
          border: 1px solid rgba(245, 158, 11, 0.2) !important;
          color: #f8fafc !important;
          border-radius: 0.75rem !important;
          padding: 0.75rem 1rem !important;
          transition: all 0.3s ease !important;
        }

        .cyber-input::placeholder {
          color: #71717a !important;
        }

        .cyber-input:focus {
          background-color: rgba(12, 10, 9, 0.95) !important;
          border-color: #f59e0b !important;
          box-shadow: 0 0 18px rgba(245, 158, 11, 0.35) !important;
          outline: none !important;
        }

        .cyber-select option {
          background-color: #0c0a09;
          color: #f8fafc;
        }

        .cyber-check {
          background-color: rgba(12, 10, 9, 0.8) !important;
          border: 1px solid rgba(245, 158, 11, 0.3) !important;
          border-radius: 0.35rem !important;
          cursor: pointer;
        }

        .cyber-check:checked {
          background-color: #f59e0b !important;
          border-color: #fbbf24 !important;
          box-shadow: 0 0 12px rgba(245, 158, 11, 0.5) !important;
        }

        .success-badge-glow {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(251, 191, 36, 0.4);
          color: #fbbf24;
          box-shadow: 0 0 30px rgba(245, 158, 11, 0.3);
        }
      `}</style>

      <section className="py-5 admission-page min-vh-100 position-relative">
        <div className="glow-gold"></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>

          {/* Header */}
          <div className="text-center mb-5">
            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Admissions
            </span>

            <h1 className="display-5 fw-bold mb-3 text-white">
              Admission <span className="text-gradient-gold">Form</span>
            </h1>

            <p className="mx-auto mb-0" style={{ maxWidth: '600px', color: '#a1a1aa', lineHeight: '1.7' }}>
              Fill in your details to start your learning journey with us.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cyber-card">
                <div className="card-body p-4 p-lg-5">

                  {submitted ? (
                    <div className="text-center py-5">
                      <div
                        className="success-badge-glow rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                        style={{ width: '80px', height: '80px' }}
                      >
                        <i className="bi bi-check-lg fs-1"></i>
                      </div>

                      <h3 className="fw-bold text-white mb-2">
                        Application Submitted!
                      </h3>

                      <p className="mb-4" style={{ color: '#a1a1aa' }}>
                        Thank you for applying. Our admission team will contact you soon.
                      </p>

                      <Link to="/" className="btn-gold-primary">
                        Back to Home
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-4">

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg cyber-input"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg cyber-input"
                            placeholder="Enter your email"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control form-control-lg cyber-input"
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Select Course
                          </label>
                          <select
                            className="form-select form-select-lg cyber-input cyber-select"
                            required
                          >
                            <option value="">Choose a course</option>
                            <option value="full-stack">Full Stack Development</option>
                            <option value="data-science">Data Science</option>
                            <option value="ui-ux">UI/UX Design</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="cyber-security">Cyber Security</option>
                            <option value="cloud-computing">Cloud Computing</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Qualification
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg cyber-input"
                            placeholder="e.g. 12th, Graduate"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label fw-semibold text-light mb-2">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control form-control-lg cyber-input text-light"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold text-light mb-2">
                            Address
                          </label>
                          <textarea
                            className="form-control cyber-input"
                            rows="3"
                            placeholder="Enter your address"
                            required
                          ></textarea>
                        </div>

                        <div className="col-12">
                          <label className="form-label fw-semibold text-light mb-2">
                            Message
                          </label>
                          <textarea
                            className="form-control cyber-input"
                            rows="4"
                            placeholder="Tell us anything you would like us to know..."
                          ></textarea>
                        </div>

                        <div className="col-12">
                          <div className="form-check d-flex align-items-center gap-2">
                            <input
                              className="form-check-input cyber-check mt-0"
                              type="checkbox"
                              id="terms"
                              required
                            />
                            <label
                              className="form-check-label mb-0"
                              htmlFor="terms"
                              style={{ color: '#a1a1aa' }}
                            >
                              I agree to the admission terms and conditions.
                            </label>
                          </div>
                        </div>

                        <div className="col-12 mt-4">
                          <button type="submit" className="btn-gold-primary btn-lg w-100">
                            <span>Submit Application</span>
                            <i className="bi bi-arrow-right ms-2"></i>
                          </button>
                        </div>

                      </div>
                    </form>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmissionForm;