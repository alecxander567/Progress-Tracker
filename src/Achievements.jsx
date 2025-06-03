import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Achievements() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Built a Responsive Portfolio Website', icon: '🌐', stack: 'HTML, CSS, JavaScript, Bootstrap' },
        { title: 'Created a To-Do List App', icon: '📝', stack: 'React, JavaScript, localStorage' },
        { title: 'Developed a Weather Forecast Widget', icon: '☀️', stack: 'JavaScript, APIs, CSS' },
        { title: 'Made a Calculator Application', icon: '🧮', stack: 'JavaScript, HTML, CSS' },
        { title: 'Built a Personal Blog Layout', icon: '✍️', stack: 'HTML, CSS, React' },
        { title: 'Created a Photo Gallery', icon: '📸', stack: 'React, CSS Grid, JavaScript' },
        { title: 'Designed a Login/Signup Form', icon: '🔐', stack: 'React, Formik, Yup, Firebase Auth' },
        { title: 'Developed a Product Landing Page', icon: '🛒', stack: 'HTML, CSS, JavaScript, Bootstrap' },
        { title: 'Implemented Modal/Popup Components', icon: '📦', stack: 'React, CSS, JavaScript' },
        { title: 'Built a Responsive Navigation Bar', icon: '🧭', stack: 'HTML, CSS, JavaScript' },
        { title: 'Created a Countdown Timer', icon: '⏰', stack: 'JavaScript, React' },
        { title: 'Developed a Quiz App', icon: '❓', stack: 'React, JavaScript, CSS' },
        { title: 'Built a CSS Animation Showcase', icon: '🎞️', stack: 'CSS, HTML, JavaScript' },
        { title: 'Created a Pricing Table', icon: '💲', stack: 'HTML, CSS, JavaScript' },
        { title: 'Designed a Blog Post Card UI', icon: '📰', stack: 'React, CSS Modules' },
        { title: 'Built a FAQ Accordion', icon: '📖', stack: 'React, CSS' },
        { title: 'Implemented Dark Mode Toggle', icon: '🌙', stack: 'React, CSS Variables' },
        { title: 'Created a Social Media Buttons Set', icon: '🔗', stack: 'HTML, CSS, JavaScript' },
        { title: 'Built a Responsive Footer', icon: '👣', stack: 'HTML, CSS' },
        { title: 'Developed a Contact Form with Validation', icon: '📧', stack: 'React, Formik, Yup' },
    ];

    return (
        <div
            className="position-relative min-vh-100 d-flex overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #2e003e, #12002d)',
                color: 'white',
            }}
        >
            <aside
                className={`d-flex flex-column p-4 ${sidebarOpen ? 'open' : ''}`}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2,
                }}
            >
                <h4 className="mb-4 fw-bold">My Progress</h4>
                    <ul className="nav flex-column gap-3">
                        <li className="nav-item">
                            <Link to="/FrontEndPage" className="nav-link text-white">
                                📈 Progress
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/FrontEndCourses" className="nav-link text-white">
                                📚 Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Achievements" className="nav-link text-white">
                                💡 Project Ideas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Terms" className="nav-link text-white">
                                📄 Terms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Settings" className="nav-link text-white">
                                ⚙️ Settings
                            </Link>
                        </li>
                </ul>
            </aside>

            <button
                className="btn btn-outline-light d-md-none position-fixed top-0 start-0 m-3 sidebar-toggle-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <i className="fas fa-bars"></i>
            </button>

           <main className="flex-grow-1 p-3" style={{ overflowY: 'auto' }}>
                <header
                    className="d-flex justify-content-between align-items-center mb-4"
                    style={{ borderBottom: '1px solid', paddingLeft: '50px', paddingBottom: '10px' }}
                >
                    <h1 className="fw-bold m-0">💡 Project Ideas</h1>

                    <div className="d-flex gap-2">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="fab fa-reddit"></i>
                        </a>
                    </div>
                </header>

                <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <div
                            className="card h-100 text-white"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                {project.icon} {project.title}
                                </h5>
                                <p className="card-text">
                                    <small>Ideal tech stack: {project.stack}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </main>

            <style>
                {`
                    a.nav-link:hover {
                        background: #00ffee;
                        color: black !important;
                        border-radius: 5px;
                        padding-left: 8px;
                    }
                    @media (min-width: 768px) {
                        aside {
                            position: fixed !important;
                            width: 250px;
                            height: 100vh;
                            left: 0 !important;
                            top: 0;
                            z-index: 2;
                        }
                        main {
                            margin-left: 250px;
                        }
                        button.sidebar-toggle-btn {
                            display: none !important;
                        }
                    }
                    @media (max-width: 767.98px) {
                        aside {
                            position: fixed !important;
                            width: 250px;
                            height: 100vh;
                            left: -250px;
                            top: 0;
                            transition: left 0.3s ease;
                            z-index: 3;
                        }
                        aside.open {
                            left: 0;
                        }
                        main {
                            margin-left: 0;
                        }
                        main h1 {
                            font-size: 15px;
                            margin-left: 150px !important;
                            text-align: center;
                        }
                        button {
                            display: block !important;
                            z-index: 4;
                        }
                    }
        
                `}
            </style>
        </div>
    );
}

export default Achievements;