import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function MobileIdeas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Built a Simple Mobile Portfolio App', icon: '📱', stack: 'Flutter, Dart' },
        { title: 'Created a To-Do List Mobile App', icon: '📝', stack: 'React Native, JavaScript, AsyncStorage' },
        { title: 'Developed a Weather Forecast App', icon: '☀️', stack: 'Flutter, REST API, Dart' },
        { title: 'Made a Calculator App', icon: '🧮', stack: 'React Native, JavaScript' },
        { title: 'Built a Personal Blog Reader App', icon: '✍️', stack: 'React Native, RSS Feed' },
        { title: 'Created a Mobile Photo Gallery', icon: '📸', stack: 'Flutter, Dart, GridView' },
        { title: 'Designed a Login/Signup Screen', icon: '🔐', stack: 'React Native, Firebase Auth' },
        { title: 'Developed a Product Showcase App', icon: '🛍️', stack: 'Flutter, Firebase' },
        { title: 'Implemented Modal/Popup UI', icon: '📦', stack: 'React Native, JavaScript' },
        { title: 'Built a Navigation Drawer', icon: '🧭', stack: 'React Native Navigation' },
        { title: 'Created a Countdown Timer App', icon: '⏰', stack: 'Flutter, Dart' },
        { title: 'Developed a Quiz App', icon: '❓', stack: 'React Native, JavaScript, Expo' },
        { title: 'Built an Animation Demo App', icon: '🎞️', stack: 'Flutter, Dart, Animated Widgets' },
        { title: 'Created a Pricing Plan Page', icon: '💲', stack: 'React Native, Styled Components' },
        { title: 'Designed a Blog Post UI Card', icon: '📰', stack: 'Flutter, Dart' },
        { title: 'Built a FAQ Accordion', icon: '📖', stack: 'React Native, JavaScript' },
        { title: 'Implemented Dark Mode', icon: '🌙', stack: 'React Native, Context API' },
        { title: 'Created Social Media Share Buttons', icon: '🔗', stack: 'Flutter, Share Plus Package' },
        { title: 'Built a Custom Footer Navigation', icon: '👣', stack: 'React Native, React Navigation' },
        { title: 'Developed a Contact Form with Validation', icon: '📧', stack: 'React Native, Formik, Yup' },
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
                            <Link to="/MobilePage" className="nav-link text-white">
                                📈 Progress
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MobileCourses" className="nav-link text-white">
                                📚 Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MobileIdeas" className="nav-link text-white">
                                💡 Project Ideas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MobileTerms" className="nav-link text-white">
                                📄 Terms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MobileSettings" className="nav-link text-white">
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
                        <a href="https://github.com/alecxander567/Progress-Tracker" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/alec.xander.espaldon.2024/" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.reddit.com/user/Historical_Rub8018/" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
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

export default MobileIdeas;