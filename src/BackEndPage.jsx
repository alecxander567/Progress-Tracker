import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function BackEndPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
    {
      title: "Node.js 20 Released with Better Performance",
      url: "https://nodejs.org/en/blog/release/v20.0.0",
      description:
        "Node.js 20 improves startup time and adds better support for native modules.",
      icon: "node-js",
    },
    {
      title: "What’s New in Express 5",
      url: "https://expressjs.com/en/guide/migrating-5.html",
      description:
        "Express 5 introduces async route handlers and removes deprecated middleware.",
      icon: "server",
    },
    {
      title: "PostgreSQL 16 Brings Performance Boosts",
      url: "https://www.postgresql.org/about/news/postgresql-16-released-2657/",
      description:
        "PostgreSQL 16 adds better query optimization and more logical replication features.",
      icon: "database",
    },
    {
      title: "Django 5 Released with Async Views by Default",
      url: "https://docs.djangoproject.com/en/5.0/releases/5.0/",
      description:
        "Django 5 supports async views out of the box and improves ORM performance.",
      icon: "python",
    },
    {
      title: "Mastering REST API Design Principles",
      url: "https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/",
      description:
        "Learn best practices and pitfalls to avoid when designing RESTful APIs.",
      icon: "project-diagram",
    },
    {
      title: "MongoDB 7 Launches with Vector Search",
      url: "https://www.mongodb.com/press/mongodb-7-announcement",
      description:
        "The latest MongoDB adds vector search and enhanced time-series support.",
      icon: "cubes",
    },
    {
      title: "Understanding OAuth 2.0 and Authentication Workflows",
      url: "https://oauth.net/2/",
      description:
        "A deep dive into secure user authentication using OAuth 2.0.",
      icon: "key",
    },
    {
      title: "GraphQL vs REST: Choosing the Right API Style",
      url: "https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/",
      description:
        "Compare the benefits and use cases for GraphQL and REST APIs.",
      icon: "code-branch",
    },
    {
      title: "Improving API Security with Rate Limiting and Throttling",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Rate_limiting",
      description:
        "Explore strategies to secure your back-end APIs against abuse.",
      icon: "shield-alt",
    },
    {
      title: "Exploring Serverless Back-End with AWS Lambda",
      url: "https://aws.amazon.com/lambda/",
      description:
        "Learn how to build scalable serverless applications with AWS Lambda.",
      icon: "cloud",
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
          style={{
            borderBottom: "1px solid",
            paddingLeft: "50px",
            paddingBottom: "10px",
          }}
        >
          <h1 className="fw-bold m-0">🚀 Back-End Roadmap</h1>

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
              Back-End Development
              <div className="tech-icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    width: "30px",
                  }}
                  alt="Node.js"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "70%",
                    width: "30px",
                  }}
                  alt="Express"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "25%",
                    width: "30px",
                  }}
                  alt="MongoDB"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "80%",
                    width: "30px",
                  }}
                  alt="MySQL"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    width: "30px",
                  }}
                  alt="PostgreSQL"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "55%",
                    width: "30px",
                  }}
                  alt="Python"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    width: "30px",
                  }}
                  alt="Git"
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
              <i className="fas fa-newspaper text-info"></i> Back-End Tech News
            </h3>
            <p>Stay updated with the latest trends in Back-end development:</p>
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
              <i className="fas fa-server text-info"></i> Back-End Focus
              Breakdown
            </h3>
            <p>Technologies you should focus on:</p>
            <ul className="list-unstyled">
              {[
                { tech: "Node.js", percentage: 85 },
                { tech: "Express.js", percentage: 80 },
                { tech: "MongoDB", percentage: 75 },
                { tech: "MySQL/PostgreSQL", percentage: 70 },
                { tech: "Authentication (JWT, OAuth)", percentage: 65 },
                { tech: "API Development (REST/GraphQL)", percentage: 60 },
                { tech: "Version Control (Git)", percentage: 55 },
                { tech: "Security & Middleware", percentage: 50 },
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

export default BackEndPage;
