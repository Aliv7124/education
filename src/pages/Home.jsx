import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import About from './About';
import Courses from './Courses';
import Faculty from './Faculty';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Rahul Sharma',
    course: 'Full Stack Development',
    message:
      'The course was excellent. I learned practical development skills and built several real-world projects.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Priya Singh',
    course: 'Data Science',
    message:
      'The faculty members are very supportive and explain difficult concepts in a simple way.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Aman Verma',
    course: 'UI/UX Design',
    message:
      'I really enjoyed the learning experience. The projects helped me improve my design skills.',
    rating: 4,
    image: 'https://i.pravatar.cc/150?img=33',
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        /* Cyber Violet Section Base */
        .cyber-section {
          background-color: #0b0f19;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Effect */
        .home-ambient-glow {
          position: absolute;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.08);
          filter: blur(140px);
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
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

        /* Call To Action Banner */
        .cta-cyber-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.15) 100%);
          border: 1px solid rgba(139, 92, 246, 0.35);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .cta-cyber-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 350px;
          height: 350px;
          background: rgba(139, 92, 246, 0.25);
          filter: blur(90px);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Unified Yellowish Primary Button */
        .btn-cyber-yellow {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #0b0f19;
          font-weight: 700;
          border-radius: 0.75rem;
          padding: 0.85rem 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px -4px rgba(245, 158, 11, 0.5);
        }

        .btn-cyber-yellow:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #0b0f19;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -2px rgba(245, 158, 11, 0.7);
        }

        .btn-cyber-yellow i {
          transition: transform 0.3s ease;
        }

        .btn-cyber-yellow:hover i {
          transform: translateX(4px);
        }
      `}</style>

      <Hero />

      <About />

      <Courses preview={true} />

      <Faculty />

      {/* Testimonials */}
      <section className="py-5 cyber-section border-top border-bottom border-secondary border-opacity-10">
        <div className="home-ambient-glow"></div>

        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>

          {/* Heading */}
          <div className="text-center mb-5">

            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Testimonials
            </span>

            <h2 className="display-6 fw-bold mb-3 text-white">
              What Our{' '}
              <span className="text-gradient-primary">
                Students Say
              </span>
            </h2>

            <p className="mx-auto mb-0" style={{ maxWidth: '650px', color: '#94a3b8', lineHeight: '1.7' }}>
              Hear from students who have experienced our courses,
              faculty, and learning environment.
            </p>

          </div>

          {/* Testimonial Cards */}
          <div className="row g-4">

            {testimonials.map((testimonial, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={index}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-5 cyber-section">
        <div className="container py-4">

          <div className="cta-cyber-card p-4 p-md-5">

            <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>

              <div className="col-lg-8 text-center text-lg-start">

                <h2 className="fw-bold mb-2 text-white display-6">
                  Ready to Start Your Learning Journey?
                </h2>

                <p className="mb-0" style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Join thousands of students and take the next step toward
                  achieving your career goals.
                </p>

              </div>

              <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">

                <Link
                  to="/admission"
                  className="btn-cyber-yellow"
                >
                  <span>Apply Now</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}