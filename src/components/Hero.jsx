import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <style>{`
        /* =========================================
           HERO SECTION
        ========================================= */

        .hero-section {
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(99, 102, 241, 0.15) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(37, 99, 235, 0.12) 0%,
              transparent 40%
            ),
            linear-gradient(
              135deg,
              #0f172a 0%,
              #1e293b 100%
            );

          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* =========================================
           BACKGROUND GLOW
        ========================================= */

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(99, 102, 241, 0.3);
          top: -50px;
          right: -50px;
        }

        .glow-orb-2 {
          width: 250px;
          height: 250px;
          background: rgba(59, 130, 246, 0.2);
          bottom: -50px;
          left: -50px;
        }

        /* =========================================
           BADGE
        ========================================= */

        .badge-premium {
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #818cf8;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 50rem;
        }

        /* =========================================
           GRADIENT TEXT
        ========================================= */

        .text-gradient-primary {
          background: linear-gradient(
            135deg,
            #818cf8 0%,
            #6366f1 50%,
            #3b82f6 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* =========================================
           PRIMARY BUTTON
        ========================================= */

        .btn-hero-primary {
          position: relative;

          background: linear-gradient(
            135deg,
            #f59e0b 0%,
            #d97706 100%
          );

          border: 1px solid rgba(255, 255, 255, 0.2);

          color: #0b0f19 !important;

          font-weight: 700;
          letter-spacing: 0.3px;

          border-radius: 50rem;

          padding: 0.85rem 2rem;

          box-shadow:
            0 10px 25px -5px rgba(245, 158, 11, 0.5);

          transition:
            all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

          overflow: hidden;

          z-index: 1;

          text-decoration: none;

          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-hero-primary::before {
          content: '';

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );

          transition: 0.6s ease;

          z-index: 2;
        }

        .btn-hero-primary:hover::before {
          left: 100%;
        }

        .btn-hero-primary:hover {
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #f59e0b 100%
          );

          color: #0b0f19 !important;

          transform: translateY(-2px) scale(1.02);

          box-shadow:
            0 14px 32px -4px rgba(245, 158, 11, 0.7);
        }

        /* =========================================
           SECONDARY BUTTON
        ========================================= */

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.05);

          border: 1px solid rgba(255, 255, 255, 0.15);

          color: #f8fafc !important;

          font-weight: 600;

          border-radius: 50rem;

          padding: 0.85rem 2rem;

          backdrop-filter: blur(10px);

          transition:
            all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

          text-decoration: none;

          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.12);

          border-color: rgba(255, 255, 255, 0.3);

          color: #ffffff !important;

          transform: translateY(-2px);
        }

        /* =========================================
           STAT CARDS
        ========================================= */

        .stat-card {
          background: rgba(255, 255, 255, 0.03);

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 1.25rem;

          padding: 1rem 1.25rem;

          backdrop-filter: blur(12px);

          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.06);

          border-color: rgba(99, 102, 241, 0.3);

          transform: translateY(-2px);
        }

        /* =========================================
           IMAGE WRAPPER
        ========================================= */

        .hero-img-wrapper {
          position: relative;

          width: 100%;

          z-index: 1;

          overflow: visible;
        }

        .hero-img {
          display: block;

          width: 100%;

          height: auto;

          border: 1px solid rgba(255, 255, 255, 0.15);

          box-shadow:
            0 25px 50px -12px rgba(0, 0, 0, 0.6);

          transition: transform 0.5s ease;

          object-fit: cover;
        }

        .hero-img-wrapper:hover .hero-img {
          transform: scale(1.01);
        }

        /* =========================================
           FLOATING CARD
        ========================================= */

        .floating-glass-card {
          position: absolute !important;

          left: 18px !important;

          bottom: 18px !important;

          margin: 0 !important;

          transform: none !important;

          background: rgba(15, 23, 42, 0.94) !important;

          backdrop-filter: blur(16px);

          -webkit-backdrop-filter: blur(16px);

          border: 1px solid rgba(255, 255, 255, 0.15) !important;

          border-radius: 1.25rem !important;

          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.5) !important;

          z-index: 5;

          max-width: calc(100% - 36px);

          overflow: hidden;
        }

        /* =========================================
           FLOATING ICON
        ========================================= */

        .floating-icon-box {
          width: 48px;

          height: 48px;

          min-width: 48px;

          flex-shrink: 0;

          background: linear-gradient(
            135deg,
            #6366f1 0%,
            #4f46e5 100%
          );

          box-shadow:
            0 6px 16px rgba(99, 102, 241, 0.4);
        }

        /* =========================================
           LAPTOP
        ========================================= */

        @media (min-width: 992px) and (max-width: 1199.98px) {

          .hero-section h1 {
            font-size: 3rem;
            line-height: 1.2;
          }

          .hero-section .lead {
            font-size: 1rem !important;
          }

          .hero-img-wrapper {
            margin-left: 0 !important;
          }

          .floating-glass-card {
            left: 14px !important;
            bottom: 14px !important;

            max-width: calc(100% - 28px);
          }

          .floating-glass-card .card-body {
            padding: 0.75rem 1rem !important;
          }

          .floating-icon-box {
            width: 44px;
            height: 44px;
            min-width: 44px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (min-width: 768px) and (max-width: 991.98px) {

          .hero-img-wrapper {
            margin-left: 0 !important;
          }

          .hero-img {
            border-radius: 1rem !important;
          }

          .floating-glass-card {
            left: 15px !important;
            bottom: 15px !important;

            max-width: calc(100% - 30px);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 767.98px) {

          .hero-section {
            overflow: hidden;
          }

          .hero-section .container {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }

          /* Heading */

          .hero-section h1 {
            font-size: 2.1rem !important;

            line-height: 1.2 !important;
          }

          /* Description */

          .hero-section .lead {
            font-size: 1rem !important;

            line-height: 1.7 !important;
          }

          /* Buttons */

          .hero-section .hero-buttons {
            width: 100%;

            display: flex;

            flex-direction: column;

            gap: 12px !important;
          }

          .btn-hero-primary,
          .btn-hero-secondary {
            width: 100%;

            padding: 0.8rem 1.5rem;
          }

          /* Statistics */

          .stat-card {
            padding: 0.8rem 0.4rem;

            border-radius: 0.9rem;
          }

          .stat-card h3 {
            font-size: 1.35rem !important;
          }

          .stat-card small {
            font-size: 0.7rem;
          }

          /* Image */

          .hero-img-wrapper {
            margin-left: 0 !important;

            width: 100%;
          }

          .hero-img {
            width: 100%;

            height: 280px;

            object-fit: cover;

            border-radius: 1rem !important;
          }

          /* Floating card */

          .floating-glass-card {
            left: 12px !important;

            right: 12px !important;

            bottom: 12px !important;

            width: auto !important;

            max-width: none !important;

            margin: 0 !important;

            transform: none !important;

            border-radius: 14px !important;
          }

          .floating-glass-card .card-body {
            padding: 0.65rem 0.8rem !important;

            gap: 0.7rem !important;
          }

          .floating-icon-box {
            width: 42px;

            height: 42px;

            min-width: 42px;
          }

          .floating-icon-box i {
            font-size: 1rem !important;
          }

          .floating-glass-card h6 {
            font-size: 0.85rem !important;
          }

          .floating-glass-card small {
            font-size: 0.65rem !important;

            white-space: nowrap;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .hero-section h1 {
            font-size: 1.85rem !important;
          }

          .badge-premium {
            font-size: 0.75rem;
          }

          .stat-card {
            padding: 0.65rem 0.2rem;
          }

          .stat-card h3 {
            font-size: 1.2rem !important;
          }

          .stat-card small {
            font-size: 0.62rem;
          }

          .hero-img {
            height: 250px;
          }

          .floating-glass-card {
            left: 8px !important;

            right: 8px !important;

            bottom: 8px !important;
          }

          .floating-glass-card .card-body {
            padding: 0.55rem 0.65rem !important;
          }

          .floating-icon-box {
            width: 36px;

            height: 36px;

            min-width: 36px;
          }

          .floating-glass-card h6 {
            font-size: 0.78rem !important;
          }

          .floating-glass-card small {
            font-size: 0.58rem !important;
          }
        }
      `}</style>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero-section py-5 position-relative">

        {/* Background Glows */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>

        <div
          className="container py-4 py-lg-5 position-relative"
          style={{ zIndex: 1 }}
        >

          <div className="row align-items-center gy-5">

            {/* =====================================
                LEFT SIDE
            ===================================== */}

            <div className="col-lg-6">

              {/* Badge */}

              <span className="badge badge-premium px-3 py-2 mb-4 d-inline-flex align-items-center gap-2">

                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  style={{
                    animationDuration: '2s',
                    backgroundColor: '#818cf8',
                  }}
                ></span>

                Welcome to EduInstitute

              </span>

              {/* Heading */}

              <h1 className="display-4 fw-bold mb-4 text-white">

                Shape Your Future With
                <br />

                <span className="text-gradient-primary">
                  Quality Education
                </span>

              </h1>

              {/* Description */}

              <p
                className="lead mb-4 pb-2 fs-5"
                style={{
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                }}
              >
                Learn from experienced educators, develop valuable
                skills, and build a successful career with our
                industry-focused educational programs.
              </p>

              {/* Buttons */}

              <div className="hero-buttons d-flex flex-wrap gap-3 mb-5">

                <Link
                  to="/courses"
                  className="btn btn-hero-primary"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/about"
                  className="btn btn-hero-secondary"
                >
                  Learn More
                </Link>

              </div>

              {/* =====================================
                  STATISTICS
              ===================================== */}

              <div className="row g-3">

                {/* Students */}

                <div className="col-4">

                  <div className="stat-card text-center">

                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">
                      10K+
                    </h3>

                    <small
                      className="fw-medium"
                      style={{ color: '#94a3b8' }}
                    >
                      Students
                    </small>

                  </div>

                </div>

                {/* Courses */}

                <div className="col-4">

                  <div className="stat-card text-center">

                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">
                      50+
                    </h3>

                    <small
                      className="fw-medium"
                      style={{ color: '#94a3b8' }}
                    >
                      Courses
                    </small>

                  </div>

                </div>

                {/* Success Rate */}

                <div className="col-4">

                  <div className="stat-card text-center">

                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">
                      95%
                    </h3>

                    <small
                      className="fw-medium"
                      style={{ color: '#94a3b8' }}
                    >
                      Success Rate
                    </small>

                  </div>

                </div>

              </div>

            </div>

            {/* =====================================
                RIGHT SIDE IMAGE
            ===================================== */}

            <div className="col-lg-6">

              <div className="hero-img-wrapper">

                {/* Main Image */}

                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Students learning together"
                  className="img-fluid rounded-4 hero-img"
                />

                {/* =================================
                    FLOATING LEARN & GROW CARD
                ================================= */}

                <div className="card floating-glass-card">

                  <div className="card-body d-flex align-items-center gap-3 px-4 py-3">

                    {/* Icon */}

                    <div className="floating-icon-box text-white rounded-circle d-flex align-items-center justify-content-center">

                      <i className="bi bi-mortarboard-fill fs-4"></i>

                    </div>

                    {/* Text */}

                    <div>

                      <h6 className="fw-bold text-white mb-0">
                        Learn & Grow
                      </h6>

                      <small style={{ color: '#94a3b8' }}>
                        Build your career with us
                      </small>

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