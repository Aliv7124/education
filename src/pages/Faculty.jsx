function Faculty() {
  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Head of Computer Science',
      experience: '12+ Years Experience',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Prof. Michael Anderson',
      role: 'Data Science Instructor',
      experience: '10+ Years Experience',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Dr. Emily Williams',
      role: 'UI/UX Design Instructor',
      experience: '8+ Years Experience',
      image:
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'James Wilson',
      role: 'Digital Marketing Expert',
      experience: '9+ Years Experience',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <>
      <style>{`
        /* Cyber Violet Dark Section Background */
        .faculty-cyber-section {
          background-color: #0b0f19;
          background-image: 
            radial-gradient(at 10% 20%, rgba(139, 92, 246, 0.12) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(99, 102, 241, 0.12) 0px, transparent 50%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Ambient Glow Orb */
        .faculty-ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.07);
          filter: blur(140px);
          top: 30%;
          right: -10%;
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

        /* Glassmorphic Cards */
        .faculty-card {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faculty-card:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 0 20px 30px -10px rgba(139, 92, 246, 0.25);
        }

        /* Image Zoom Overlay Effect */
        .faculty-img-wrapper {
          position: relative;
          overflow: hidden;
        }

        .faculty-img-wrapper img {
          transition: transform 0.5s ease;
        }

        .faculty-card:hover .faculty-img-wrapper img {
          transform: scale(1.06);
        }

        /* Social Action Buttons */
        .faculty-social-btn {
          width: 38px;
          height: 38px;
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

        .faculty-social-btn:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
        }
      `}</style>

      <section id="faculty" className="faculty-cyber-section py-5">
        <div className="faculty-ambient-glow"></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>

          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Our Faculty
            </span>

            <h2 className="display-6 fw-bold mb-3 text-white">
              Learn From Our{' '}
              <span className="text-gradient-primary">Expert Faculty</span>
            </h2>

            <p
              className="mx-auto"
              style={{ maxWidth: '650px', color: '#94a3b8', lineHeight: '1.7' }}
            >
              Our experienced educators and industry professionals are
              dedicated to helping students develop the knowledge and skills
              they need to succeed.
            </p>
          </div>

          {/* Faculty Cards */}
          <div className="row g-4">

            {faculty.map((member, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>

                <div className="card faculty-card border-0 overflow-hidden h-100">

                  {/* Faculty Image */}
                  <div className="faculty-img-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top"
                      style={{
                        height: '280px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Faculty Details */}
                  <div className="card-body text-center p-4">

                    <h5 className="fw-bold mb-2 text-white">
                      {member.name}
                    </h5>

                    <p className="mb-2 fw-medium" style={{ color: '#c4b5fd' }}>
                      {member.role}
                    </p>

                    <small style={{ color: '#94a3b8' }}>
                      <i className="bi bi-award me-2" style={{ color: '#a78bfa' }}></i>
                      {member.experience}
                    </small>

                  </div>

                  {/* Social Icons */}
                  <div className="card-footer bg-transparent border-0 text-center pb-4 pt-0">

                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href="#!"
                        className="faculty-social-btn"
                        aria-label="LinkedIn"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>

                      <a
                        href="#!"
                        className="faculty-social-btn"
                        aria-label="Twitter"
                      >
                        <i className="bi bi-twitter-x"></i>
                      </a>

                      <a
                        href="#!"
                        className="faculty-social-btn"
                        aria-label="Email"
                      >
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Faculty;