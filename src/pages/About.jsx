import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <style>{`
        /* =========================================================
           ABOUT SECTION
        ========================================================= */

        .about-cyber-section {
          background-color: #0b0f19;

          background-image:
            radial-gradient(
              at 10% 20%,
              rgba(139, 92, 246, 0.15) 0px,
              transparent 45%
            ),
            radial-gradient(
              at 90% 80%,
              rgba(99, 102, 241, 0.15) 0px,
              transparent 45%
            );

          position: relative;
          overflow: hidden;

          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* =========================================================
           AMBIENT GLOW
        ========================================================= */

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

        /* =========================================================
           BADGE
        ========================================================= */

        .cyber-badge {
          background: rgba(139, 92, 246, 0.12);

          border: 1px solid rgba(139, 92, 246, 0.25);

          color: #c4b5fd;

          font-weight: 500;

          letter-spacing: 0.5px;
        }

        /* =========================================================
           GRADIENT TEXT
        ========================================================= */

        .text-gradient-primary {
          background: linear-gradient(
            135deg,
            #a78bfa 0%,
            #6366f1 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          background-clip: text;
        }

        /* =========================================================
           IMAGE CONTAINER
        ========================================================= */

        .about-image-container {
          border-radius: 1.25rem;

          border: 1px solid rgba(255, 255, 255, 0.1);

          overflow: hidden;

          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.6);

          position: relative;
        }

        .about-image-container img {
          display: block;

          width: 100%;

          height: auto;

          object-fit: cover;

          transition: transform 0.5s ease;
        }

        .about-image-container:hover img {
          transform: scale(1.02);
        }

        /* =========================================================
           EXPERIENCE CARD
        ========================================================= */

        .glass-experience-card {
          background: rgba(15, 23, 42, 0.88) !important;

          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);

          border: 1px solid rgba(139, 92, 246, 0.3) !important;

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(139, 92, 246, 0.2) !important;

          z-index: 2;
        }

        /* =========================================================
           FEATURE ICON
        ========================================================= */

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

        .about-feature-item {
          transition: transform 0.3s ease;
        }

        .about-feature-item:hover {
          transform: translateY(-2px);
        }

        .about-feature-item:hover .about-icon-wrapper {
          background: linear-gradient(
            135deg,
            #8b5cf6 0%,
            #6366f1 100%
          );

          color: #ffffff;

          transform: scale(1.08);

          box-shadow:
            0 6px 16px rgba(139, 92, 246, 0.4);
        }

        /* =========================================================
           CTA BUTTON
        ========================================================= */

        .btn-cyber-primary {
          background: linear-gradient(
            135deg,
            #f59e0b 0%,
            #d97706 100%
          );

          border: 1px solid rgba(255, 255, 255, 0.2);

          color: #0b0f19 !important;

          font-weight: 700;

          border-radius: 0.75rem;

          padding: 0.75rem 1.75rem;

          transition: all 0.3s
            cubic-bezier(0.4, 0, 0.2, 1);

          display: inline-flex;

          align-items: center;

          text-decoration: none;

          box-shadow:
            0 8px 20px -4px
            rgba(245, 158, 11, 0.5);
        }

        .btn-cyber-primary:hover {
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #f59e0b 100%
          );

          color: #0b0f19 !important;

          transform: translateY(-2px);

          box-shadow:
            0 12px 25px -2px
            rgba(245, 158, 11, 0.7);
        }

        .btn-cyber-primary i {
          transition: transform 0.3s ease;
        }

        .btn-cyber-primary:hover i {
          transform: translateX(4px);
        }

        /* =========================================================
           MOBILE ONLY
           Desktop remains unchanged
        ========================================================= */

        @media (max-width: 767.98px) {

          .about-cyber-section {
            overflow: hidden;
          }

          .about-cyber-section .container {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }

          /* Image */

          .about-image-container {
            border-radius: 1rem;
          }

          .about-image-container img {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }

          /* Experience badge */

          .glass-experience-card {
            right: 10px !important;
            bottom: 10px !important;

            margin: 0 !important;

            border-radius: 1rem !important;
          }

          .glass-experience-card .card-body {
            padding: 0.7rem 1rem !important;
          }

          .glass-experience-card h2 {
            font-size: 1.8rem !important;
          }

          .glass-experience-card small {
            font-size: 0.72rem !important;
          }

          /* Text */

          .about-cyber-section h2 {
            font-size: 2rem !important;

            line-height: 1.2;
          }

          .about-cyber-section p {
            font-size: 0.95rem;

            line-height: 1.65 !important;
          }

          /* Features */

          .about-feature-item {
            gap: 0.75rem !important;
          }

          .about-icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .about-feature-item h6 {
            font-size: 0.9rem;
          }

          .about-feature-item small {
            font-size: 0.75rem;
          }

          /* CTA */

          .btn-cyber-primary {
            width: 100%;

            justify-content: center;

            padding: 0.8rem 1rem;
          }
        }

        /* Very Small Phones */

        @media (max-width: 380px) {

          .about-image-container img {
            height: 220px;
          }

          .glass-experience-card {
            right: 8px !important;
            bottom: 8px !important;
          }

          .glass-experience-card h2 {
            font-size: 1.5rem !important;
          }

          .glass-experience-card small {
            font-size: 0.65rem !important;
          }

          .about-cyber-section h2 {
            font-size: 1.75rem !important;
          }

          .about-feature-item {
            gap: 0.6rem !important;
          }

          .about-icon-wrapper {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <section
        id="about"
        className="about-cyber-section py-5"
      >
        {/* Ambient Glow */}
        <div className="about-ambient-orb"></div>

        <div
          className="container py-5 position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="row align-items-center g-5">

            {/* =====================================================
                LEFT IMAGE
            ===================================================== */}

            <div className="col-lg-6">

              <div className="position-relative">

                <div className="about-image-container">

                  {/* SAME IMAGE AS HERO */}
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                    alt="Students learning together"
                    className="img-fluid w-100"
                  />

                </div>

                {/* =================================================
                    EXPERIENCE BADGE
                ================================================= */}

                <div
                  className="
                    card
                    glass-experience-card
                    border-0
                    rounded-4
                    position-absolute
                    bottom-0
                    end-0
                    mb-4
                    me-3
                  "
                >
                  <div className="card-body text-center px-4 py-3">

                    <h2 className="fw-bold text-gradient-primary mb-0 display-6">
                      15+
                    </h2>

                    <small
                      style={{
                        color: '#c4b5fd',
                        fontSize: '0.85rem'
                      }}
                    >
                      Years of Excellence
                    </small>

                  </div>
                </div>

              </div>

            </div>

            {/* =====================================================
                RIGHT CONTENT
            ===================================================== */}

            <div className="col-lg-6">

              {/* Badge */}

              <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">

                About Our Institute

              </span>

              {/* Heading */}

              <h2 className="display-6 fw-bold mb-4 text-white">

                Empowering Students to{' '}

                <span className="text-gradient-primary">
                  Achieve More
                </span>

              </h2>

              {/* Paragraph 1 */}

              <p
                className="mb-4"
                style={{
                  color: '#94a3b8',
                  lineHeight: '1.7'
                }}
              >
                We are committed to providing quality education
                that combines academic knowledge, practical skills,
                and personal development. Our goal is to prepare
                students for a successful and rewarding future.
              </p>

              {/* Paragraph 2 */}

              <p
                className="mb-4"
                style={{
                  color: '#94a3b8',
                  lineHeight: '1.7'
                }}
              >
                With experienced faculty, modern learning
                facilities, and industry-focused programs, we
                create an environment where students can learn,
                innovate, and grow with confidence.
              </p>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="row g-4 mb-4">

                {/* Expert Faculty */}

                <div className="col-sm-6">

                  <div className="d-flex align-items-center gap-3 about-feature-item">

                    <div className="about-icon-wrapper">
                      <i className="bi bi-person-check fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1 text-white">
                        Expert Faculty
                      </h6>

                      <small style={{ color: '#94a3b8' }}>
                        Experienced educators
                      </small>
                    </div>

                  </div>

                </div>

                {/* Quality Learning */}

                <div className="col-sm-6">

                  <div className="d-flex align-items-center gap-3 about-feature-item">

                    <div className="about-icon-wrapper">
                      <i className="bi bi-book-half fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1 text-white">
                        Quality Learning
                      </h6>

                      <small style={{ color: '#94a3b8' }}>
                        Practical education
                      </small>
                    </div>

                  </div>

                </div>

                {/* Modern Facilities */}

                <div className="col-sm-6">

                  <div className="d-flex align-items-center gap-3 about-feature-item">

                    <div className="about-icon-wrapper">
                      <i className="bi bi-laptop fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1 text-white">
                        Modern Facilities
                      </h6>

                      <small style={{ color: '#94a3b8' }}>
                        Tech-enabled learning
                      </small>
                    </div>

                  </div>

                </div>

                {/* Proven Results */}

                <div className="col-sm-6">

                  <div className="d-flex align-items-center gap-3 about-feature-item">

                    <div className="about-icon-wrapper">
                      <i className="bi bi-award fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1 text-white">
                        Proven Results
                      </h6>

                      <small style={{ color: '#94a3b8' }}>
                        Student success focused
                      </small>
                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <Link
                to="/courses"
                className="btn btn-cyber-primary"
              >
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