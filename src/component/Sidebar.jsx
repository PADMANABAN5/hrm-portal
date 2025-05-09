import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';
import {
  FaTachometerAlt,
  FaClipboardList,
  FaBoxOpen,
  FaUsers,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaUser
} from 'react-icons/fa';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Detect screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsMobileOpen(false); // Auto-close mobile sidebar
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const toggleMobileSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(!isMobileOpen);
    }
  };

  const closeMobileSidebar = () => {
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <div className="position-fixed top-0 start-0 p-3" style={{ zIndex: 1050 }}>
          <FaBars
            onClick={toggleMobileSidebar}
            style={{ fontSize: '24px', cursor: 'pointer' }}
          />
        </div>
      )}

      {/* Overlay */}
      {isMobile && isMobileOpen && (
        <div
          onClick={closeMobileSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`container d-flex flex-column flex-shrink-0 p-3 bg-light border-end ${isCollapsed ? 'collapsed' : ''}`}
        style={{
          width: isCollapsed ? '80px' : '280px',
          height: '96vh',
          transition: 'width 0.3s ease, left 0.3s ease',
          position: isMobile ? 'fixed' : 'relative',
          top: 0,
          left: isMobile ? (isMobileOpen ? '0' : '-280px') : '0',
          zIndex: 1051
        }}
      >
        {/* Desktop Collapse Toggle */}
        <div className="mb-3 d-none d-md-flex justify-content-end">
          {isCollapsed ? (
            <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer', fontSize: '20px' }} />
          ) : (
            <FaTimes onClick={toggleSidebar} style={{ cursor: 'pointer', fontSize: '20px' }} />
          )}
        </div>

        {/* User Profile */}
        <div className="dropdown mb-3">
          <a
            href="#"
            className={`d-flex align-items-center link-dark text-decoration-none ${!isCollapsed ? 'dropdown-toggle' : ''}`}
            id="dropdownUser2"
            data-bs-toggle={!isCollapsed ? 'dropdown' : ''}
            aria-expanded="false"
          >
            <FaUser size={32} className="me-2" style={{ marginLeft: '5px' }}/>
            <span className={isCollapsed ? 'd-none' : ''}><strong>User Name</strong></span>
          </a>
          {!isCollapsed && (
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
            </ul>
          )}
        </div>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link link-dark ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              <FaTachometerAlt className="me-2" /> <span className={isCollapsed ? 'd-none' : ''}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/order" className={`nav-link link-dark ${location.pathname === '/order' ? 'active' : ''}`}>
              <FaClipboardList className="me-2" /> <span className={isCollapsed ? 'd-none' : ''}>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className={`nav-link link-dark ${location.pathname === '/products' ? 'active' : ''}`}>
              <FaBoxOpen className="me-2" /> <span className={isCollapsed ? 'd-none' : ''}>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className={`nav-link link-dark ${location.pathname === '/customers' ? 'active' : ''}`}>
              <FaUsers className="me-2" /> <span className={isCollapsed ? 'd-none' : ''}>Customers</span>
            </Link>
          </li>
        </ul>

        <Link to="/login" className="d-flex align-items-center link-dark text-decoration-none mt-auto">
          <FaSignOutAlt className="me-2" /> <span className={isCollapsed ? 'd-none' : ''}>Log Out</span>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
