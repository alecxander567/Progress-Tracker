import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function FullStackCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="position-relative min-vh-100 d-flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #2e003e, #12002d)",
        color: "white",
      }}
    >
      <aside
        className={`d-flex flex-column p-4 ${sidebarOpen ? "open" : ""}`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          zIndex: 2,
        }}
      >
        <h4 className="mb-4 fw-bold">My Progress</h4>
        <ul className="nav flex-column gap-3">
          <li className="nav-item">
            <Link to="/FullStackPage" className="nav-link text-white">
              📈 Progress
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FullStackCourses" className="nav-link text-white">
              📚 Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FullStackIdeas" className="nav-link text-white">
              💡 Project Ideas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FullStackTerms" className="nav-link text-white">
              📄 Terms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FullStackSettings" className="nav-link text-white">
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
          style={{
            borderBottom: "1px solid",
            paddingLeft: "50px",
            paddingBottom: "10px",
          }}
        >
          <h1 className="fw-bold m-0">
            <i className="fas fa-book-open text-info"></i> Courses
          </h1>
          <div className="d-flex gap-2">
            {[
              {
                href: "https://github.com/alecxander567/Progress-Tracker",
                icon: "fab fa-github",
              },
              {
                href: "https://www.facebook.com/alec.xander.espaldon.2024/",
                icon: "fab fa-facebook",
              },
              {
                href: "https://www.reddit.com/user/Historical_Rub8018/",
                icon: "fab fa-reddit",
              },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: "1.5rem" }}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </header>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {[
            {
              title: "HTML, CSS",
              description:
                "Master the foundation of full stack development with this quick introduction to HTML, CSS",
              href: "https://youtu.be/HGTJBPNC-Gw?si=RbwaxaN7P_oGlFPz",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              ],
            },
            {
              title: "JavaScript Crash Course",
              description:
                "Master the foundation of full stack development with this quick introduction to JavaScript.",
              href: "https://youtu.be/lfmg-EJ8gm4?si=dvWIF7-dT0Wx8CzH",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              ],
            },
            {
              title: "React Crash Course",
              description:
                "Learn how to build modern and dynamic UIs using React — a must-have for full stack developers.",
              href: "https://youtu.be/CgkZ7MvWUAA?si=LM-H4ia7a2FXY6LW",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              ],
            },
            {
              title: "Node.js & Express.js Tutorial",
              description:
                "Understand how to build server-side applications using Node.js and Express.",
              href: "https://youtu.be/Oe421EPjeBE?si=XaKMSSMyA6kA5eM-",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              ],
            },
            {
              title: "MongoDB Crash Course",
              description:
                "Learn how to integrate a NoSQL database in your full stack apps using MongoDB.",
              href: "https://youtu.be/c2M-rlkkT5o?si=A8WVF1Y3tUUncKq8",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              ],
            },
            {
              title: "Git & GitHub for Developers",
              description:
                "Learn how to manage your projects with Git and collaborate with others on GitHub.",
              href: "https://youtu.be/zTjRZNkhiEU?si=Sc-MaqunIhjuFEU6",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              ],
            },
            {
              title: "Full Stack App Deployment",
              description:
                "Deploy your full stack app to the web using platforms like Vercel, Netlify, or Heroku.",
              href: "https://youtu.be/71wSzpLyW9k?si=r1KoBC5ZsCvCN1gF",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
              ],
            },
          ].map(({ title, description, href, icons }, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 text-white"
                style={{ backgroundColor: "#1c0033" }}
              >
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

export default FullStackCourses;
