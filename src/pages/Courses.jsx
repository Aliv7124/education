import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    title: 'Full Stack Development',
    description:
      'Learn frontend and backend development and build modern responsive web applications.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    icon: 'bi-code-slash',
  },
  {
    title: 'Data Science',
    description:
      'Develop skills in data analysis, Python, statistics, and machine learning.',
    duration: '8 Months',
    level: 'Intermediate',
    icon: 'bi-bar-chart-line',
  },
  {
    title: 'UI/UX Design',
    description:
      'Master user interface and user experience design using modern design tools.',
    duration: '4 Months',
    level: 'Beginner',
    icon: 'bi-palette',
  },
  {
    title: 'Digital Marketing',
    description:
      'Learn SEO, social media marketing, content strategy, and digital advertising.',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    icon: 'bi-phone',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Explore AI concepts, machine learning models, neural networks, and intelligent applications.',
    duration: '7 Months',
    level: 'Intermediate',
    icon: 'bi-robot',
  },
  {
    title: 'Cyber Security',
    description:
      'Learn ethical hacking, network security, cyber threats, and data protection.',
    duration: '6 Months',
    level: 'Intermediate',
    icon: 'bi-shield-lock',
  },
  {
    title: 'Cloud Computing',
    description:
      'Learn cloud platforms, deployment, storage, virtualization, and modern cloud technologies.',
    duration: '5 Months',
    level: 'Intermediate',
    icon: 'bi-cloud',
  },
  {
    title: 'Mobile App Development',
    description:
      'Build modern Android and cross-platform mobile applications using popular technologies.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    icon: 'bi-phone-fill',
  },
];

function Courses({ preview = false }) {
  const displayedCourses = preview
    ? courses.slice(0, 4)
    : courses;

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------
           PREMIUM GOLD & CYBER OBSIDIAN SECTION THEME
           --------------------------------------------------------- */
        .courses-cyber-section {
          background-color: #0c0a09;
          background-image: 
            radial-gradient(at 50% 0%, rgba(245, 158, 11, 0.12) 0px, transparent 60%),
            radial-gradient(at 80% 100%, rgba(217, 119, 6, 0.08) 0px, transparent 50%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(245, 158, 11, 0.15);
          border-bottom: 1px solid rgba(245, 158, 11, 0.15);
        }

        /* Ambient Glow Orb */
        .courses-ambient-orb {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.08);
          filter: blur(140px);
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        /* Cyber Badge */
        .cyber-badge {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #fbbf24;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* Gold Gradient Text */
        .text-gradient-gold {
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Action Button */
        .btn-gold-primary {
          background: linear-gradient(135deg, #fbbf24 0%, #d97706 50%, #b45309 100%) !important;
          color: #000000 !important;
          font-weight: 700;
          border-radius: 0.75rem;
          padding: 0.75rem 1.75rem;
          border: 1px solid rgba(254, 240, 138, 0.5) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          box-shadow: 0 8px 25px -4px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .btn-gold-primary:hover {
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #d97706 100%) !important;
          transform: translateY(-2px);
          color: #000000 !important;
          box-shadow: 0 12px 30px -2px rgba(245, 158, 11, 0.6), 0 0 20px rgba(251, 191, 36, 0.4);
          border-color: rgba(255, 255, 255, 0.8) !important;
        }

        .btn-gold-primary i {
          transition: transform 0.3s ease;
        }

        .btn-gold-primary:hover i {
          transform: translateX(4px);
        }
      `}</style>

      <section className="courses-cyber-section py-5">
        <div className="courses-ambient-orb"></div>

        <div className="container py-4 position-relative" style={{ zIndex: 1 }}>

          {/* Heading */}
          <div className="text-center mb-5">

            <span className="badge cyber-badge rounded-pill px-3 py-2 mb-3">
              Our Courses
            </span>

            <h2 className="display-6 fw-bold text-white mb-3">
              {preview ? (
                <>
                  Explore Our{' '}
                  <span className="text-gradient-primary">
                    Popular Courses
                  </span>
                </>
              ) : (
                <>
                  All Our{' '}
                  <span className="text-gradient-gold">
                    Courses
                  </span>
                </>
              )}
            </h2>

            <p className="mx-auto" style={{ maxWidth: '700px', color: '#a1a1aa', lineHeight: '1.7' }}>
              Choose from our industry-focused courses designed to help you
              develop practical skills and prepare for your future career.
            </p>

          </div>

          {/* Course Cards */}
          <div className="row g-4">

            {displayedCourses.map((course, index) => (
              <div
                className="col-md-6 col-lg-4 col-xl-3"
                key={index}
              >
                <CourseCard course={course} />
              </div>
            ))}

          </div>

          {/* View All Button */}
          {preview && (
            <div className="text-center mt-5">

              <Link
                to="/courses"
                className="btn-gold-primary"
              >
                <span>View All Courses</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>
          )}

        </div>

      </section>
    </>
  );
}

export default Courses;