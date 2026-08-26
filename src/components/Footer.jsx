import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <style>{`
        /* Ultra-Premium Footer Dark Theme */
        .footer-custom {
          background: linear-gradient(180deg, #0f172a 0%, #090d16 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Ambient Background Glow */
        .footer-glow-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.12);
          filter: blur(90px);
          pointer-events: none;
          top: -50px;
          left: 10%;
        }

        /* Brand Gradient Accent */
        .footer-brand-text {
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Interactive Footer Link Transitions */
        .footer-link {
          color: #94a3b8 !important;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          position: relative;
        }

        .footer-link:hover {
          color: #c4b5fd !important;
          transform: translateX(4px);
        }

        /* Glowing Social Media Buttons */
        .btn-social-glow {
          width: 42px;
          height: 42px;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1 !important;
          border-radius: 50%;
          backdrop-filter: blur(8px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-social-glow:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px -4px rgba(139, 92, 246, 0.6);
        }

        /* Contact Info Cards with Subtle Glow */
        .contact-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
        }

        .contact-icon-box {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          width: 36px;
          height: 36px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Bottom Copyright Border Gradient */
        .footer-divider {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
          height: 1px;
        }
      `}</style>

      <footer className="footer-custom position-relative">
        {/* Subtle Ambient Glow */}
        <div className="footer-glow-orb"></div>

        {/* Main Content */}
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row g-4 gy-5">

            {/* Institute Brand Info */}
            <div className="col-lg-4">
              <h4 className="fw-bold mb-3 fs-3 text-white">
                Edu<span className="footer-brand-text">Institute</span>
              </h4>

              <p className="mb-4 pe-lg-4" style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                Empowering students with quality education, practical skills,
                and the industry knowledge needed to build a successful career.
              </p>

              {/* Enhanced Glowing Social Icons */}
              <div className="d-flex gap-2">
                <a href="#!" className="btn-social-glow" aria-label="Facebook">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#!" className="btn-social-glow" aria-label="Instagram">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#!" className="btn-social-glow" aria-label="LinkedIn">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#!" className="btn-social-glow" aria-label="YouTube">
                  <i className="bi bi-youtube fs-5"></i>
                </a>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3 text-white text-uppercase tracking-wider fs-6">
                Quick Links
              </h6>

              <ul className="list-unstyled">
                <li className="mb-2.5">
                  <NavLink to="/" className="footer-link">
                    Home
                  </NavLink>
                </li>
                <li className="mb-2.5">
                  <NavLink to="/about" className="footer-link">
                    About Us
                  </NavLink>
                </li>
                <li className="mb-2.5">
                  <NavLink to="/courses" className="footer-link">
                    Courses
                  </NavLink>
                </li>
                <li className="mb-2.5">
                  <NavLink to="/faculty" className="footer-link">
                    Faculty
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-6 col-lg-2">
              <h6 className="fw-bold mb-3 text-white text-uppercase tracking-wider fs-6">
                Useful Links
              </h6>

              <ul className="list-unstyled">
                <li className="mb-2.5">
                  <NavLink to="/admission" className="footer-link">
                    Admissions
                  </NavLink>
                </li>
                <li className="mb-2.5">
                  <NavLink to="/contact" className="footer-link">
                    Contact
                  </NavLink>
                </li>
                <li className="mb-2.5">
                  <a href="#!" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2.5">
                  <a href="#!" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information Cards */}
            <div className="col-lg-4">
              <h6 className="fw-bold mb-3 text-white text-uppercase tracking-wider fs-6">
                Contact Us
              </h6>

              <div className="d-flex flex-column gap-3">
                <div className="contact-item d-flex align-items-center gap-3">
                  <div className="contact-icon-box flex-shrink-0">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                    123 Education Street, New Delhi, India 110001
                  </span>
                </div>

                <div className="contact-item d-flex align-items-center gap-3">
                  <div className="contact-icon-box flex-shrink-0">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                    +91 98765 43210
                  </span>
                </div>

                <div className="contact-item d-flex align-items-center gap-3">
                  <div className="contact-icon-box flex-shrink-0">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                    info@eduinstitute.com
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="footer-divider"></div>
        <div className="container py-3 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <small style={{ color: '#64748b' }}>
                © 2026 EduInstitute. All Rights Reserved.
              </small>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;