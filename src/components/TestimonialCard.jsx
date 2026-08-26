function TestimonialCard({ testimonial }) {
  // Dynamically render rating stars (defaults to 5 if not provided)
  const rating = testimonial.rating || 5;

  return (
    <>
      <style>{`
        /* Glassmorphic Dark Testimonial Card */
        .testimonial-card-glow {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        /* Hover Elevation & Ambient Glow */
        .testimonial-card-glow:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 0 16px 32px -8px rgba(139, 92, 246, 0.25),
                      0 0 0 1px rgba(139, 92, 246, 0.15);
        }

        /* Glowing Accent Line at Top */
        .testimonial-card-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .testimonial-card-glow:hover::before {
          opacity: 1;
        }

        /* Decorative Background Watermark Quote */
        .quote-icon-bg {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          font-size: 3.5rem;
          color: rgba(139, 92, 246, 0.08);
          line-height: 1;
          pointer-events: none;
          transition: color 0.4s ease;
        }

        .testimonial-card-glow:hover .quote-icon-bg {
          color: rgba(139, 92, 246, 0.18);
        }

        /* Glowing Avatar Ring */
        .avatar-glow-ring {
          padding: 2px;
          background: linear-gradient(135deg, #a78bfa 0%, #6366f1 100%);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.3);
        }

        /* Star Rating Glow */
        .rating-star-glow {
          color: #fbbf24;
          filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.4));
        }

        /* Gradient Name Text */
        .student-name {
          color: #f8fafc;
          transition: color 0.3s ease;
        }

        .testimonial-card-glow:hover .student-name {
          background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="card testimonial-card-glow h-100">
        <div className="card-body p-4 d-flex flex-column justify-content-between position-relative z-1">

          {/* Background Watermark Icon */}
          <i className="bi bi-quote quote-icon-bg"></i>

          <div>
            {/* Dynamic Rating Stars */}
            <div className="rating-star-glow mb-3 d-flex gap-1">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`bi ${
                    index < rating ? 'bi-star-fill' : 'bi-star'
                  } fs-6`}
                ></i>
              ))}
            </div>

            {/* Review Body */}
            <p className="mb-4" style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.65' }}>
              "{testimonial.message}"
            </p>
          </div>

          {/* Student Profile Info */}
          <div className="d-flex align-items-center pt-3 border-top border-secondary border-opacity-25">
            <div className="avatar-glow-ring me-3 flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle d-block"
                width="50"
                height="50"
                style={{ objectFit: 'cover', background: '#1e293b' }}
              />
            </div>

            <div className="overflow-hidden">
              <h6 className="student-name fw-bold mb-0 text-truncate">
                {testimonial.name}
              </h6>
              <small style={{ color: '#94a3b8', fontSize: '0.825rem' }} className="d-block text-truncate">
                {testimonial.course}
              </small>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TestimonialCard;