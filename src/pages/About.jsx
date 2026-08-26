import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <style>{`
        /* Localized Cyber Violet Dark Section Background */
        .about-cyber-section {
          background-color: #0b0f19;
          background-image: 
            radial-gradient(at 10% 20%, rgba(139, 92, 246, 0.15) 0px, transparent 45%),
            radial-gradient(at 90% 80%, rgba(99, 102, 241, 0.15) 0px, transparent 45%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Subtle Ambient Glow Orb */
        .about-ambient-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.08);
          filter: blur(120px);
          top: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
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

        /* Gradient Headings */
        .text-gradient-primary {
          background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Glassmorphic Experience Card */
        .glass-experience-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5),
                      0 0 20px rgba(139, 92, 246, 0.2);
        }

        /* Feature Icon Container */
        .about-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .about-feature-item:hover .about-icon-wrapper {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
        }

        /* Image Wrapper Styling */
        .about-image-container {
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        /* Unified Yellowish Primary Button */
        .btn-cyber-primary {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #0b0f19;
          font-weight: 700;
          border-radius: 0.75rem;
          padding: 0.75rem 1.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          box-shadow: 0 8px 20px -4px rgba(245, 158, 11, 0.5);
        }

        .btn-cyber-primary:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #0b0f19;
          transform: translateY(-2px);
          box-shadow: 0 12px 25px -2px rgba(245, 158, 11, 0.7);
        }

        .btn-cyber-primary i {
          transition: transform 0.3s ease;
        }

        .btn-cyber-primary:hover i {
          transform: translateX(4px);
        }
      `}</style>

      <section id="about" className="about-cyber-section py-5">
        <div className="about-ambient-orb"></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">

            {/* Left Image Section */}
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="about-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                    alt="Students in classroom"
                    className="img-fluid w-100"
                  />
                </div>

                {/* Glassmorphic Experience Badge */}
                <div className="card glass-experience-card border-0 rounded-4 position-absolute bottom-0 end-0 mb-4 me-3">
                  <div className="card-body text-center px-4 py-3">
                    <h2 className="fw-bold text-gradient-primary mb-0 display-6">15+</h2>
                    <small style={{ color: '#c4b5fd', fontSize: '0.85rem' }}>
                      Years of Excellence
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-6">
              <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
                About Our Institute
              </span>

              <h2 className="display-6 fw-bold mb-4 text-white">
                Empowering Students to{' '}
                <span className="text-gradient-primary">Achieve More</span>
              </h2>

              <p className="mb-4" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                We are committed to providing quality education that combines
                academic knowledge, practical skills, and personal development.
                Our goal is to prepare students for a successful and rewarding
                future.
              </p>

              <p className="mb-4" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                With experienced faculty, modern learning facilities, and
                industry-focused programs, we create an environment where
                students can learn, innovate, and grow with confidence.
              </p>

              {/* Grid Features */}
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 about-feature-item">
                    <div className="about-icon-wrapper">
                      <i className="bi bi-person-check fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-white">Expert Faculty</h6>
                      <small style={{ color: '#94a3b8' }}>Experienced educators</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 about-feature-item">
                    <div className="about-icon-wrapper">
                      <i className="bi bi-book-half fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-white">Quality Learning</h6>
                      <small style={{ color: '#94a3b8' }}>Practical education</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 about-feature-item">
                    <div className="about-icon-wrapper">
                      <i className="bi bi-laptop fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-white">Modern Facilities</h6>
                      <small style={{ color: '#94a3b8' }}>Tech-enabled learning</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-3 about-feature-item">
                    <div className="about-icon-wrapper">
                      <i className="bi bi-award fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1 text-white">Proven Results</h6>
                      <small style={{ color: '#94a3b8' }}>Student success focused</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/courses" className="btn btn-cyber-primary">
                Discover Our Courses
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}