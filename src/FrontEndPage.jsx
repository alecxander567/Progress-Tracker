import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function FrontEndPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
    {
      title: "React 18 Released: What You Need to Know",
      url: "https://reactjs.org/blog/2022/03/29/react-v18.html",
      description:
        "React 18 introduces concurrent features and improvements to Suspense.",
      icon: "react",
    },
    {
      title: "CSS Container Queries Are Now Supported",
      url: "https://css-tricks.com/css-container-queries/",
      description:
        "Container Queries allow styling based on parent size instead of viewport size.",
      icon: "css3-alt",
    },
    {
      title: "TypeScript 5.0 is Here with New Features",
      url: "https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/",
      description:
        "The latest version adds improved type inference and performance boosts.",
      icon: "code",
    },
    {
      title: "Vite 4 Released — Faster Build Tool for Front-End",
      url: "https://vitejs.dev/guide/",
      description:
        "Vite 4 continues to improve build speed and plugin support for modern web projects.",
      icon: "bolt",
    },
    {
      title: "Using WebAssembly for Front-End Performance Boosts",
      url: "https://web.dev/wasm/",
      description:
        "Learn how WebAssembly can help speed up compute-heavy tasks in the browser.",
      icon: "cubes",
    },
    {
      title: "Next.js 14 Brings Server Components to the Forefront",
      url: "https://nextjs.org/blog/next-14",
      description:
        "Next.js 14 introduces new optimizations and easier server components support.",
      icon: "server",
    },
    {
      title: "Tailwind CSS 3.3 Released with New Utilities",
      url: "https://tailwindcss.com/blog/tailwindcss-v3-3",
      description:
        "Utility-first CSS framework adds new features to speed up UI development.",
      icon: "wind",
    },
    {
      title: "Accessibility Best Practices for Front-End Developers",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
      description: "A guide to making your web apps usable for everyone.",
      icon: "universal-access",
    },
    {
      title: "Understanding React Server Components",
      url: "https://reactjs.org/docs/react-server-components.html",
      description:
        "A look into React’s new server-side rendering capabilities.",
      icon: "server",
    },
    {
      title: "State Management Trends in 2025",
      url: "https://blog.logrocket.com/state-management-trends-in-2025/",
      description: "An overview of how front-end state management is evolving.",
      icon: "project-diagram",
    },
  ];

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
          <h1 className="fw-bold m-0">🚀 Front-End Roadmap</h1>

          <div className="d-flex gap-2">
            <a
              href="https://github.com/alecxander567/Progress-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/alec.xander.espaldon.2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.reddit.com/user/Historical_Rub8018/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-reddit"></i>
            </a>
          </div>
        </header>

        <div className="row mb-4">
          <div className="col">
            <div
              className="rounded p-4 text-white d-flex flex-column justify-content-center position-relative"
              style={{
                background: "linear-gradient(135deg, #1b0036, #3c096c)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                fontWeight: "bold",
                fontSize: "1.5rem",
                minHeight: "200px",
                textAlign: "left",
                overflow: "hidden",
              }}
            >
              <h3>My Career Path : </h3>
              Front-End Development
              <div className="tech-icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    width: "30px",
                  }}
                  alt="HTML"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "70%",
                    width: "30px",
                  }}
                  alt="CSS"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "25%",
                    width: "30px",
                  }}
                  alt="JavaScript"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "80%",
                    width: "30px",
                  }}
                  alt="React"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    width: "30px",
                  }}
                  alt="Bootstrap"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "55%",
                    width: "30px",
                  }}
                  alt="Node.js"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    width: "30px",
                  }}
                  alt="GitHub"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-md-row gap-3"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div
            className="p-3 rounded flex-grow-1"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "white",
              maxHeight: "340px",
              overflowY: "auto",
              minWidth: "0",
            }}
          >
            <h3 className="d-flex align-items-center gap-2">
              <i className="fas fa-newspaper text-info"></i> Front-End Tech News
            </h3>
            <p>Stay updated with the latest trends in front-end development:</p>
            <ul className="list-unstyled">
              {NEWS.map((newsItem, i) => (
                <li
                  key={i}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    padding: "8px 12px",
                    color: "white",
                    marginBottom: "12px",
                  }}
                >
                  <a
                    href={newsItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00ffff", textDecoration: "underline" }}
                    className="d-flex align-items-center gap-2"
                  >
                    <i className={`fas fa-${newsItem.icon} text-warning`}></i>
                    <span>{newsItem.title}</span>
                  </a>
                  <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>
                    {newsItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-3 rounded flex-grow-1"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "white",
              maxHeight: "340px",
              overflowY: "auto",
              minWidth: "0",
            }}
          >
            <h3 className="d-flex align-items-center gap-2">
              <i className="fas fa-chart-bar text-info"></i> Front-End Focus
              Breakdown
            </h3>
            <p>Technologies you should focus on:</p>
            <ul className="list-unstyled">
              {[
                { tech: "HTML & CSS", percentage: 90 },
                { tech: "JavaScript", percentage: 85 },
                { tech: "React", percentage: 70 },
                { tech: "Bootstrap/Tailwind", percentage: 60 },
                { tech: "Version Control (Git)", percentage: 50 },
                { tech: "APIs/Fetch", percentage: 45 },
                { tech: "Testing/Debugging", percentage: 40 },
                { tech: "Web Performance", percentage: 35 },
              ].map((item, index) => (
                <li key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <strong>{item.tech}</strong>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${item.percentage}%` }}
                      aria-valuenow={item.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <style>
        {`
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
        .project-item {
          padding: 8px 12px;
          border-radius: 6px;
          transition: background-color 0.3s ease;
          cursor: pointer;
        }
        .project-item:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }

       .tech-icons {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .tech-icon {
          position: absolute;
          width: 90px;
          height: 90px;
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
    `}
      </style>
    </div>
  );
}

export default FrontEndPage;
