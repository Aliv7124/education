import { NavLink } from 'react-router-dom';

function Admission() {
  const steps = [
    {
      number: '01',
      icon: 'bi-search',
      title: 'Choose Your Course',
      description:
        'Explore our courses and select the program that matches your career goals.',
    },
    {
      number: '02',
      icon: 'bi-file-earmark-text',
      title: 'Submit Application',
      description:
        'Complete the admission form with your basic information and academic details.',
    },
    {
      number: '03',
      icon: 'bi-check-circle',
      title: 'Application Review',
      description:
        'Our admission team will review your application and contact you with the next steps.',
    },
    {
      number: '04',
      icon: 'bi-mortarboard',
      title: 'Start Learning',
      description:
        'Complete the admission process and begin your learning journey with us.',
    },
  ];

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------
           PREMIUM OBSIDIAN & CYBER BLUE ADMISSION THEME
           --------------------------------------------------------- */
        .admission-cyber-section {
          background-color: #0c0a09;
          background-image:
            radial-gradient(
              at 90% 10%,
              rgba(37, 99, 235, 0.15) 0px,
              transparent 45%
            ),
            radial-gradient(
              at 10% 90%,
              rgba(59, 130, 246, 0.12) 0px,
              transparent 45%
            );
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .admission-ambient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.08);
          filter: blur(140px);
          top: 30%;
          right: 10%;
          pointer-events: none;
        }

        .cyber-badge {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #93c5fd;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .text-gradient-primary {
          background: linear-gradient(
            135deg,
            #60a5fa 0%,
            #2563eb 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .admission-step-card {
          background: rgba(24, 24, 27, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .admission-step-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow:
            0 20px 40px -12px rgba(37, 99, 235, 0.35),
            0 0 0 1px rgba(59, 130, 246, 0.25);
        }

        .admission-step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            #3b82f6,
            #1d4ed8,
            #60a5fa
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .admission-step-card:hover::before {
          opacity: 1;
        }

        .step-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #1d4ed8 100%
          );
          color: #ffffff;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
          transition: all 0.3s ease;
        }

        .admission-step-card:hover .step-icon-wrapper {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.6);
        }

        .step-number {
          color: #60a5fa;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-shadow: 0 0 12px rgba(96, 165, 250, 0.4);
        }

        .admission-info-card {
          background: rgba(18, 18, 20, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .admission-req-pane {
          background: linear-gradient(
            135deg,
            rgba(37, 99, 235, 0.15) 0%,
            rgba(29, 78, 216, 0.1) 100%
          );
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .check-icon-glow {
          color: #60a5fa;
          filter: drop-shadow(
            0 0 6px rgba(96, 165, 250, 0.6)
          );
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
          padding: 0.7rem 1.75rem;
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

        .btn-cyber-outline {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e4e4e7;
          font-weight: 600;
          border-radius: 0.75rem;
          padding: 0.7rem 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .btn-cyber-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        @media (max-width: 991px) {
          .admission-req-pane {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>

      <section
        id="admissions"
        className="admission-cyber-section py-5"
      >
        <div className="admission-ambient-orb"></div>

        <div
          className="container py-5 position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Header */}
          <div className="text-center mb-5">
            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Admissions
            </span>

            <h2 className="display-6 fw-bold mb-3 text-white">
              Start Your{' '}
              <span className="text-gradient-primary">
                Learning Journey
              </span>
            </h2>

            <p
              className="mx-auto mb-0"
              style={{
                maxWidth: '650px',
                color: '#a1a1aa',
                lineHeight: '1.7',
              }}
            >
              Take the first step toward your future. Our simple
              admission process makes it easy to join our institute.
            </p>
          </div>

          {/* Admission Steps */}
          <div className="row g-4 mb-5">
            {steps.map((step, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
              >
                <div className="card admission-step-card h-100 border-0">
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      {/* Step Header */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="step-icon-wrapper d-flex align-items-center justify-content-center">
                          <i className={`bi ${step.icon} fs-5`}></i>
                        </div>

                        <span className="step-number fs-5">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h5 className="fw-bold text-white mb-3">
                        {step.title}
                      </h5>
                    </div>

                    {/* Description */}
                    <p
                      className="small mb-0"
                      style={{
                        color: '#a1a1aa',
                        lineHeight: '1.6',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admission Information */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card admission-info-card border-0 rounded-4 overflow-hidden">
                <div className="row g-0">
                  {/* Requirements */}
                  <div className="col-lg-6 admission-req-pane p-4 p-lg-5 text-white">
                    <h3 className="fw-bold mb-4 fs-4 text-gradient-primary">
                      Admission Requirements
                    </h3>

                    <div className="d-flex mb-3 align-items-start">
                      <i className="bi bi-check-circle-fill check-icon-glow me-3 fs-5"></i>
                      <span
                        style={{
                          color: '#f4f4f5',
                          fontSize: '0.95rem',
                        }}
                      >
                        Completed application form
                      </span>
                    </div>

                    <div className="d-flex mb-3 align-items-start">
                      <i className="bi bi-check-circle-fill check-icon-glow me-3 fs-5"></i>
                      <span
                        style={{
                          color: '#f4f4f5',
                          fontSize: '0.95rem',
                        }}
                      >
                        Valid educational qualification documents
                      </span>
                    </div>

                    <div className="d-flex mb-3 align-items-start">
                      <i className="bi bi-check-circle-fill check-icon-glow me-3 fs-5"></i>
                      <span
                        style={{
                          color: '#f4f4f5',
                          fontSize: '0.95rem',
                        }}
                      >
                        Valid identification document
                      </span>
                    </div>

                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill check-icon-glow me-3 fs-5"></i>
                      <span
                        style={{
                          color: '#f4f4f5',
                          fontSize: '0.95rem',
                        }}
                      >
                        Passport-size photographs
                      </span>
                    </div>
                  </div>

                  {/* Ready to Apply */}
                  <div className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold mb-3 fs-4 text-white">
                      Ready to Apply?
                    </h3>

                    <p
                      className="mb-4"
                      style={{
                        color: '#a1a1aa',
                        lineHeight: '1.7',
                        fontSize: '0.95rem',
                      }}
                    >
                      Take the next step toward achieving your
                      educational and career goals. Apply today and
                      become part of our growing student community.
                    </p>

                    {/* BUTTONS */}
                    <div className="d-flex flex-wrap gap-3">
                      <NavLink
                        to="/admission-form"
                        className="btn-luxury-gold"
                      >
                        <span>Apply Now</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </NavLink>

                      <NavLink
                        to="/contact"
                        className="btn-cyber-outline"
                      >
                        Contact Admissions
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;