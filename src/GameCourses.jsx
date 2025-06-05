import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState  } from 'react';


function GameCourses() {
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
                      <Link to="/GamePage" className="nav-link text-white">
                        📈 Progress
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/GameCourses" className="nav-link text-white">
                        📚 Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/GameIdeas" className="nav-link text-white">
                        💡 Project Ideas
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/GameTerms" className="nav-link text-white">
                        📄 Terms
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/GameSettings" className="nav-link text-white">
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
                        title: "Unity for Beginners",
                        description: "Start your game dev journey with Unity and learn the basics of game design using C#.",
                        href: "https://youtu.be/gB1F9G0JXOo", 
                        icons: [
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                        ]
                    },
                    {
                        title: "Unreal Engine 5 Crash Course",
                        description: "Learn how to create AAA-quality games with Unreal Engine 5 and C++.",
                        href: "https://youtu.be/LsNW4FPHuZE?si=CyyMJCPZrxf-rb3M",
                        icons: [
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                        ]
                    },
                    {
                        title: "Godot Engine Basics",
                        description: "Build 2D and 3D games with Godot using GDScript and C#.",
                        href: "https://youtu.be/S8lMTwSRoRg?si=UA7Sib4-dyygNdW8",
                        icons: [
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"
                        ]
                    },
                    {
                        title: "Blender for Game Development",
                        description: "Learn 3D modeling in Blender and create assets for your games.",
                        href: "https://youtu.be/TPrnSACiTJ4",
                        icons: [
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
                        ]
                    },
                    {
                        title: "Version Control with Git",
                        description: "Learn how to manage your game projects using Git and GitHub.",
                        href: "https://youtu.be/zTjRZNkhiEU?si=fPB8OmL_uquu5zr7",
                        icons: [
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        ]
                    },
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

export default GameCourses;