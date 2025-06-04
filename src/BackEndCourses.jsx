import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState  } from 'react';


function BackEndCourses() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                      <Link to="/BackEndPage" className="nav-link text-white">
                        📈 Progress
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/BackEndCourses" className="nav-link text-white">
                        📚 Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/BackEndIdeas" className="nav-link text-white">
                        💡 Project Ideas
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/BackEndTerms" className="nav-link text-white">
                        📄 Terms
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/BackEndSettings" className="nav-link text-white">
                        ⚙️ Settings
                      </Link>
                    </li>
                  </ul>
                </aside>

                <button
                    className="btn btn-outline-light d-md-none position-fixed top-0 start-0 m-3"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <i className="fas fa-bars"></i>
                </button>
        
                <main className="flex-grow-1 p-3" style={{ zIndex: 1 }}>
                    <header
                        className="d-flex justify-content-between align-items-center mb-4"
                        style={{ borderBottom: '1px solid', paddingLeft: '50px', paddingBottom: '10px' }}
                    >
                        <h1 className="fw-bold m-0"><i className="fas fa-book-open text-info"></i> Courses</h1>
                        <div className="d-flex gap-2">
                        {[
                            { href: "https://github.com/alecxander567/Progress-Tracker", icon: "fab fa-github" },
                            { href: "https://www.facebook.com/alec.xander.espaldon.2024/", icon: "fab fa-facebook" },
                            { href: "https://www.reddit.com/user/Historical_Rub8018/", icon: "fab fa-reddit" }
                        ].map(({ href, icon }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                                style={{ fontSize: '1.5rem' }}
                            >
                                <i className={icon}></i>
                            </a>
                            ))}
                        </div>
                    </header>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {[
                        {
                            title: "Java Crash Course",
                            description: "Learn Java syntax, object-oriented programming, and build back-end apps.",
                            href: "https://youtu.be/xTtL8E4LzTQ?si=4iLkxDVCzhazSwFN",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"]
                        },
                        {
                            title: "Spring Boot Tutorial",
                            description: "Build modern REST APIs and full back-end systems with Spring Boot.",
                            href: "https://youtu.be/9SGDpanrc8U",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"]
                        },
                        {
                            title: "Python Crash Course",
                            description: "Master Python basics and build the foundation for back-end development.",
                            href: "https://youtu.be/ix9cRaBkVe0?si=oOM1uETl8kI1XDM5",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"]
                        },
                        {
                            title: "Django Full Course",
                            description: "Learn Django to build secure and scalable back-end systems with Python.",
                            href: "https://youtu.be/F5mRW0jo-U4",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"]
                        },
                        {
                            title: "PHP Crash Course",
                            description: "Understand PHP for dynamic websites and back-end server scripting.",
                            href: "https://youtu.be/zZ6vybT1HQs?si=X0GTtf77r8H-IKyo",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"]
                        },
                        {
                            title: "Laravel Full Course",
                            description: "Build modern PHP web applications using the Laravel framework.",
                            href: "https://youtu.be/ImtZ5yENzgE",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"]
                        },
                        {
                            title: "Node.js Crash Course",
                            description: "Use JavaScript on the server to create fast and scalable back-end systems.",
                            href: "https://youtu.be/fBNz5xF-Kx4",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"]
                        },
                        {
                            title: "Express.js Tutorial",
                            description: "Use Express.js with Node to build powerful REST APIs easily.",
                            href: "https://youtu.be/L72fhGm1tfE",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"]
                        },
                        {
                            title: "MySQL Crash Course",
                            description: "Learn how to work with relational databases and write SQL queries.",
                            href: "https://youtu.be/5OdVJbNCSso?si=G01VjSUfmCjk8KFE",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"]
                        },
                        {
                            title: "MongoDB Full Course",
                            description: "Understand NoSQL and how to manage data with MongoDB.",
                            href: "https://youtu.be/c2M-rlkkT5o?si=lJ5Ag7OGe4jsGi8P",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"]
                        },
                        {
                            title: "REST API Crash Course",
                            description: "Learn how RESTful APIs work and how to build one from scratch.",
                            href: "https://youtu.be/q-BVwd9H6nE",
                            icons: ["https://cdn-icons-png.flaticon.com/512/3969/3969690.png"] // Use a REST API icon
                        },
                        {
                            title: "Authentication with JWT",
                            description: "Secure your API with JSON Web Tokens for user authentication.",
                            href: "https://youtu.be/mbsmsi7l3r4",
                            icons: ["https://cdn-icons-png.flaticon.com/512/9196/9196883.png"] // JWT icon
                        },
                        {
                            title: "Docker for Beginners",
                            description: "Learn Docker to containerize your applications for easy deployment.",
                            href: "https://youtu.be/3c-iBn73dDE",
                            icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"]
                        },
                        {
                            title: "Git & GitHub for Beginners",
                            description: "Track your code changes and collaborate effectively using Git.",
                            href: "https://youtu.be/RGOj5yH7evk",
                            icons: [
                                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            ]
                        }
                    ].map(({ title, description, href, icons }, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 text-white" style={{ backgroundColor: '#1c0033' }}>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        {icons.map((icon, i) => (
                                            <img
                                                key={i}
                                                src={icon}
                                                width="40"
                                                alt="tech-icon"
                                                className={i !== 0 ? "ms-2" : ""}
                                            />
                                        ))}
                                    </div>
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a
                                        href={href}
                                        className="btn btn-outline-light mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Watch Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                 </main>

        <style>{`
            @keyframes waveBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
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
            button {
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
         `}</style>
        </div>
    );
}

export default BackEndCourses;