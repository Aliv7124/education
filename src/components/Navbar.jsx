import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getLinkClass = ({ isActive }) =>
    `nav-link px-3 py-2 rounded-pill position-relative transition-all fw-medium ${
      isActive
        ? 'active text-white bg-blue-active shadow-sm fw-semibold'
        : 'text-zinc-300 hover-nav-link'
    }`;

  return (
    <>
      <style>{`
        /* ---------------------------------------------------------
           PREMIUM CYBER OBSIDIAN NAVBAR
           DESKTOP DESIGN PRESERVED
        --------------------------------------------------------- */

        .custom-navbar {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          background: linear-gradient(
            135deg,
            rgba(12, 10, 9, 0.95) 0%,
            rgba(24, 24, 27, 0.93) 50%,
            rgba(12, 10, 9, 0.96) 100%
          ) !important;

          border-bottom: 1px solid rgba(255, 255, 255, 0.1);

          box-shadow:
            0 10px 30px -10px rgba(0, 0, 0, 0.8);

          transition: all 0.3s
            cubic-bezier(0.4, 0, 0.2, 1);

          z-index: 1050;
        }

        /* ---------------------------------------------------------
           LOGO
        --------------------------------------------------------- */

        .brand-logo {
          height: 48px;
          width: auto;
          max-width: 210px;
          object-fit: contain;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;

          display: block;
        }

        /* ---------------------------------------------------------
           DESKTOP TOP ROW
           This keeps desktop exactly like before.
        --------------------------------------------------------- */

        .navbar-top {
          display: contents;
        }

        /* ---------------------------------------------------------
           ACTIVE NAV LINK
        --------------------------------------------------------- */

        .bg-blue-active {
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #1d4ed8 100%
          ) !important;

          color: #ffffff !important;

          border: 1px solid
            rgba(147, 197, 253, 0.4) !important;

          box-shadow:
            0 4px 15px
            rgba(37, 99, 235, 0.4) !important;
        }

        /* ---------------------------------------------------------
           NORMAL NAV TEXT
        --------------------------------------------------------- */

        .text-zinc-300 {
          color: #d4d4d8 !important;
        }

        /* ---------------------------------------------------------
           NAV HOVER
        --------------------------------------------------------- */

        .nav-link.hover-nav-link {
          transition: all 0.25s ease;
        }

        .nav-link.hover-nav-link:hover {
          color: #60a5fa !important;

          background: rgba(
            37,
            99,
            235,
            0.15
          );

          border: 1px solid
            rgba(59, 130, 246, 0.25);

          transform: translateY(-1px);
        }

        /* ---------------------------------------------------------
           LUXURY GOLD CONTACT BUTTON
        --------------------------------------------------------- */

        .btn-luxury-gold {
          position: relative;

          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #d97706 50%,
            #b45309 100%
          );

          border: 1px solid
            rgba(254, 240, 138, 0.5);

          color: #000000 !important;

          font-weight: 700;

          letter-spacing: 0.4px;

          border-radius: 50rem;

          padding: 0.65rem 1.75rem;

          box-shadow:
            0 8px 25px -4px
              rgba(245, 158, 11, 0.4),
            inset 0 1px 0
              rgba(255, 255, 255, 0.4);

          transition: all 0.3s
            cubic-bezier(0.4, 0, 0.2, 1);

          overflow: hidden;

          z-index: 1;
        }

        /* Shimmer */

        .btn-luxury-gold::before {
          content: '';

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );

          transition: 0.6s ease;

          z-index: 2;
        }

        .btn-luxury-gold:hover::before {
          left: 100%;
        }

        .btn-luxury-gold:hover {
          transform:
            translateY(-2px)
            scale(1.02);

          box-shadow:
            0 12px 30px -2px
              rgba(245, 158, 11, 0.6),
            0 0 20px
              rgba(251, 191, 36, 0.4);

          background: linear-gradient(
            135deg,
            #fef08a 0%,
            #f59e0b 50%,
            #d97706 100%
          );

          border-color:
            rgba(255, 255, 255, 0.8);

          color: #000000 !important;
        }

        .btn-luxury-gold:active {
          transform:
            translateY(0)
            scale(1);

          box-shadow:
            0 4px 15px -2px
              rgba(245, 158, 11, 0.5);
        }

        /* ---------------------------------------------------------
           MOBILE HAMBURGER
           Hidden on desktop
        --------------------------------------------------------- */

        .mobile-menu-btn {
          width: 46px;
          height: 46px;

          display: none;

          align-items: center;
          justify-content: center;

          flex-direction: column;

          gap: 5px;

          background:
            rgba(255, 255, 255, 0.08);

          border:
            1px solid
            rgba(255, 255, 255, 0.15);

          border-radius: 10px;

          cursor: pointer;

          padding: 0;

          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background:
            rgba(59, 130, 246, 0.2);

          border-color:
            rgba(59, 130, 246, 0.5);
        }

        .hamburger-line {
          width: 22px;
          height: 2px;

          background: #ffffff;

          border-radius: 5px;

          transition:
            all 0.3s ease;
        }

        /* ---------------------------------------------------------
           HAMBURGER → X
        --------------------------------------------------------- */

        .mobile-menu-btn.open
          .hamburger-line:nth-child(1) {
          transform:
            translateY(7px)
            rotate(45deg);
        }

        .mobile-menu-btn.open
          .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open
          .hamburger-line:nth-child(3) {
          transform:
            translateY(-7px)
            rotate(-45deg);
        }

        /* ---------------------------------------------------------
           DESKTOP NAVIGATION
           PRESERVED
        --------------------------------------------------------- */

        .navbar-collapse-custom {
          display: flex;
          align-items: center;
        }

        /* ---------------------------------------------------------
           MOBILE ONLY
        --------------------------------------------------------- */

        @media (max-width: 991.98px) {

          /* Navbar container can wrap */
          .custom-navbar .container {
            flex-wrap: wrap;
          }

          /* -------------------------------------------------------
             LOGO + HAMBURGER TOP ROW
          ------------------------------------------------------- */

          .navbar-top {
            width: 100%;

            display: flex;

            align-items: center;

            justify-content: space-between;
          }

          /* Logo stays at top */
          .brand-logo {
            height: 48px;
            max-width: 180px;
          }

          /* Show hamburger */
          .mobile-menu-btn {
            display: flex;
          }

          /* -------------------------------------------------------
             MOBILE MENU
          ------------------------------------------------------- */

          .navbar-collapse-custom {
            width: 100%;

            display: none;

            margin-top: 15px;

            padding: 18px;

            background: linear-gradient(
              145deg,
              #0c0a09 0%,
              #18181b 100%
            );

            border-radius: 18px;

            border:
              1px solid
              rgba(255, 255, 255, 0.12);

            box-shadow:
              0 20px 40px
              rgba(0, 0, 0, 0.7);
          }

          /* Show menu */
          .navbar-collapse-custom.show {
            display: block;
          }

          /* -------------------------------------------------------
             MOBILE NAV LINKS
          ------------------------------------------------------- */

          .navbar-nav {
            width: 100%;

            align-items: stretch !important;

            gap: 4px !important;
          }

          .navbar-nav .nav-item {
            width: 100%;

            margin-bottom: 6px;
          }

          .navbar-nav .nav-link {
            width: 100%;

            display: block;

            padding:
              12px 16px !important;
          }

          /* -------------------------------------------------------
             CONTACT BUTTON MOBILE
          ------------------------------------------------------- */

          .nav-item-contact {
            width: 100%;

            margin-top: 12px !important;

            margin-left: 0 !important;
          }

          .btn-luxury-gold {
            width: 100%;

            display: block;

            text-align: center;
          }
        }

        /* ---------------------------------------------------------
           VERY SMALL MOBILE
        --------------------------------------------------------- */

        @media (max-width: 400px) {

          .brand-logo {
            height: 42px;
            max-width: 160px;
          }

          .mobile-menu-btn {
            width: 44px;
            height: 44px;
          }

          .navbar-collapse-custom {
            padding: 14px;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg custom-navbar py-2 py-lg-3">

        <div className="container">

          {/* =====================================================
              MOBILE TOP ROW
              On desktop .navbar-top uses display: contents,
              so desktop layout stays unchanged.
          ===================================================== */}

          <div className="navbar-top">

            {/* LOGO */}

            <NavLink
              to="/"
              onClick={closeMenu}
              className="navbar-brand p-0 me-4 d-flex align-items-center"
            >
              <img
                src={logo}
                alt="EduInstitute"
                className="brand-logo"
              />
            </NavLink>


            {/* MOBILE HAMBURGER */}

            <button
              type="button"
              className={`mobile-menu-btn ${
                menuOpen ? 'open' : ''
              }`}
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

          </div>


          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div
            className={`navbar-collapse-custom ${
              menuOpen ? 'show' : ''
            }`}
          >

            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-2">

              {/* HOME */}

              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={getLinkClass}
                >
                  Home
                </NavLink>
              </li>


              {/* ABOUT */}

              <li className="nav-item">
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={getLinkClass}
                >
                  About
                </NavLink>
              </li>


              {/* COURSES */}

              <li className="nav-item">
                <NavLink
                  to="/courses"
                  onClick={closeMenu}
                  className={getLinkClass}
                >
                  Courses
                </NavLink>
              </li>


              {/* FACULTY */}

              <li className="nav-item">
                <NavLink
                  to="/faculty"
                  onClick={closeMenu}
                  className={getLinkClass}
                >
                  Faculty
                </NavLink>
              </li>


              {/* ADMISSION */}

              <li className="nav-item">
                <NavLink
                  to="/admission"
                  onClick={closeMenu}
                  className={getLinkClass}
                >
                  Admission
                </NavLink>
              </li>


              {/* CONTACT */}

              <li className="nav-item nav-item-contact ms-lg-3 mt-3 mt-lg-0">

                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="btn btn-luxury-gold d-inline-block w-100 text-center text-decoration-none"
                >
                  Contact Us
                </NavLink>

              </li>

            </ul>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;