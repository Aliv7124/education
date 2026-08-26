function CourseCard({ course }) {
  return (
    <>
      <style>{`
        /* Self-Contained Section Background */
        .course-card-wrapper {
          background: #0b0f19;
          background-image: 
            radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%);
          border-radius: 1.25rem;
          padding: 1px;
        }

        /* Glassmorphic Dark Course Card */
        .course-card-glow {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        /* Hover Elevation & Ambient Glow */
        .course-card-glow:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 20px 40px -12px rgba(139, 92, 246, 0.35),
                      0 0 0 1px rgba(139, 92, 246, 0.2);
        }

        /* Glowing Accent Line on Hover */
        .course-card-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #6366f1, #a78bfa);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .course-card-glow:hover::before {
          opacity: 1;
        }

        /* Glowing Icon Box */
        .course-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 0.85rem;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #a78bfa;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.15);
          transition: all 0.4s ease;
        }

        .course-card-glow:hover .course-icon-wrapper {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.5);
        }

        /* Title Styling */
        .course-title {
          color: #f8fafc;
          transition: color 0.3s ease;
        }

        .course-card-glow:hover .course-title {
          background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Gradient CTA Button */
        .btn-course-cta {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          font-weight: 600;
          border-radius: 0.75rem;
          padding: 0.7rem 1.25rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .btn-course-cta:hover {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          box-shadow: 0 8px 20px -4px rgba(139, 92, 246, 0.5);
        }

        .btn-course-cta i {
          transition: transform 0.3s ease;
        }

        .btn-course-cta:hover i {
          transform: translateX(5px);
        }

        /* Meta Tag Styling */
        .course-meta-item {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .course-meta-item i {
          color: #a78bfa;
        }
      `}</style>

      <div className="course-card-wrapper h-100">
        <div className="card course-card-glow h-100 border-0 overflow-hidden d-flex flex-column justify-content-between">
          
          {/* Card Body */}
          <div className="card-body p-4">
            
            {/* Icon Header */}
            <div className="course-icon-wrapper mb-4">
              <i className={`bi ${course.icon} fs-3`}></i>
            </div>

            {/* Course Title */}
            <h5 className="course-title fw-bold mb-3 fs-5">
              {course.title}
            </h5>

            {/* Course Description */}
            <p className="mb-4" style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {course.description}
            </p>

            {/* Metadata Section */}
            <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-column gap-2">
              
              <div className="d-flex align-items-center course-meta-item">
                <i className="bi bi-clock me-2.5"></i>
                <span>{course.duration}</span>
              </div>

              <div className="d-flex align-items-center course-meta-item">
                <i className="bi bi-bar-chart me-2.5"></i>
                <span>{course.level}</span>
              </div>

            </div>

          </div>

          {/* Card Action Footer */}
          <div className="card-footer bg-transparent border-0 px-4 pb-4 pt-0">
            <a href="#contact" className="btn-course-cta w-100">
              <span>View Details</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default CourseCard;