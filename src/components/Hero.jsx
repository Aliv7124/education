import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <style>{`
        /* Premium Dark Mesh Hero Section */
        .hero-section {
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.12) 0%, transparent 40%),
                      linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Backdrop Blur Elements */
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

        /* Pill Badge Styling */
        .badge-premium {
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #818cf8;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 50rem;
        }

        /* Gradient Text Effects */
        .text-gradient-primary {
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Unified Yellowish/Amber Primary Button */
        .btn-hero-primary {
          position: relative;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #0b0f19 !important;
          font-weight: 700;
          letter-spacing: 0.3px;
          border-radius: 50rem;
          padding: 0.85rem 2rem;
          box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-hero-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: 0.6s ease;
          z-index: 2;
        }

        .btn-hero-primary:hover::before {
          left: 100%;
        }

        .btn-hero-primary:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #0b0f19 !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 14px 32px -4px rgba(245, 158, 11, 0.7);
        }

        /* Secondary Modern Glass Button */
        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #f8fafc !important;
          font-weight: 600;
          border-radius: 50rem;
          padding: 0.85rem 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
          transform: translateY(-2px);
        }

        /* Elevated Stat Cards */
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

        /* Image Wrapper with Soft Glow */
        .hero-img-wrapper {
          position: relative;
          z-index: 1;
        }

        .hero-img {
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
          transition: transform 0.5s ease;
        }

        .hero-img-wrapper:hover .hero-img {
          transform: scale(1.01);
        }

        /* Glassmorphic Floating Badge Card */
        .floating-glass-card {
          background: rgba(15, 23, 42, 0.85) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 1.25rem !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
        }

        .floating-icon-box {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
        }
      `}</style>

      <section className="hero-section py-5 position-relative">
        {/* Background Ambient Glows */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>

        <div className="container py-4 py-lg-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">

            {/* Left Content */}
            <div className="col-lg-6">
              <span className="badge badge-premium px-3 py-2 mb-4 d-inline-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-indigo-400" role="status" style={{ animationDuration: '2s' }}></span>
                Welcome to EduInstitute
              </span>

              <h1 className="display-4 fw-bold mb-4 leading-tight text-white">
                Shape Your Future With <br />
                <span className="text-gradient-primary">Quality Education</span>
              </h1>

              <p className="lead text-slate-300 mb-4 pb-2 fs-5" style={{ color: '#cbd5e1' }}>
                Learn from experienced educators, develop valuable skills, and build a successful career with our industry-focused educational programs.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/courses" className="btn btn-hero-primary">
                  Explore Courses
                </Link>

                <a href="#about" className="btn btn-hero-secondary">
                  Learn More
                </a>
              </div>

              {/* Enhanced Interactive Statistics */}
              <div className="row g-3">
                <div className="col-4">
                  <div className="stat-card text-center">
                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">10K+</h3>
                    <small className="text-slate-400 fw-medium" style={{ color: '#94a3b8' }}>
                      Students
                    </small>
                  </div>
                </div>

                <div className="col-4">
                  <div className="stat-card text-center">
                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">50+</h3>
                    <small className="text-slate-400 fw-medium" style={{ color: '#94a3b8' }}>
                      Courses
                    </small>
                  </div>
                </div>

                <div className="col-4">
                  <div className="stat-card text-center">
                    <h3 className="fw-bold text-gradient-primary mb-1 display-6 fs-3">95%</h3>
                    <small className="text-slate-400 fw-medium" style={{ color: '#94a3b8' }}>
                      Success Rate
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="col-lg-6">
              <div className="hero-img-wrapper ms-lg-4">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="Students learning together"
                  className="img-fluid rounded-4 hero-img w-100"
                />

                {/* Floating Glassmorphic Badge Card */}
                <div className="card floating-glass-card position-absolute bottom-0 start-0 translate-middle-y ms-3 ms-md-4 mb-3">
                  <div className="card-body d-flex align-items-center gap-3 px-4 py-3">
                    <div className="floating-icon-box text-white rounded-circle p-3 d-flex align-items-center justify-content-center">
                      <i className="bi bi-mortarboard-fill fs-4"></i>
                    </div>

                    <div>
                      <h6 className="fw-bold text-white mb-0 fs-6">
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