import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function FullStackIdeas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projects = [
    {
      title: "Developed a Full Stack Blog Platform",
      icon: "📝",
      stack: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Built a RESTful API for Task Management",
      icon: "🧾",
      stack: "Node.js, Express, MongoDB, Postman",
    },
    {
      title: "Created a MERN Stack E-Commerce Site",
      icon: "🛍️",
      stack: "MongoDB, Express, React, Node.js",
    },
    {
      title: "Designed a User Authentication System",
      icon: "🔐",
      stack: "Node.js, Express, JWT, MongoDB",
    },
    {
      title: "Built a Real-Time Chat App",
      icon: "💬",
      stack: "Socket.IO, Node.js, Express, React",
    },
    {
      title: "Implemented File Upload Feature",
      icon: "📁",
      stack: "Node.js, Multer, Express, MongoDB",
    },
    {
      title: "Created a Job Board Web App",
      icon: "💼",
      stack: "React, Node.js, Express, PostgreSQL",
    },
    {
      title: "Built a Full Stack Notes App",
      icon: "🗒️",
      stack: "React, Express, Node.js, MongoDB",
    },
    {
      title: "Integrated Payment Gateway",
      icon: "💳",
      stack: "React, Stripe API, Node.js, Express",
    },
    {
      title: "Deployed a Portfolio to Vercel",
      icon: "🚀",
      stack: "React, Vercel, GitHub Actions",
    },
    {
      title: "Created a Blog CMS Dashboard",
      icon: "📊",
      stack: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Implemented Admin Role System",
      icon: "🛡️",
      stack: "Node.js, Express, JWT, MongoDB",
    },
    {
      title: "Built a Multi-Page Form with Validation",
      icon: "📄",
      stack: "React, Formik, Yup, Node.js",
    },
    {
      title: "Designed a Full Stack Contact Form",
      icon: "📧",
      stack: "React, Node.js, Nodemailer",
    },
    {
      title: "Created a Responsive Landing Page",
      icon: "🌐",
      stack: "HTML, CSS, Bootstrap, JavaScript",
    },
    {
      title: "Built a Project Management Tool",
      icon: "📋",
      stack: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Developed a Full Stack Voting App",
      icon: "🗳️",
      stack: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Created a Weather Dashboard with API",
      icon: "☁️",
      stack: "React, OpenWeather API, Node.js",
    },
    {
      title: "Implemented Email Verification System",
      icon: "✅",
      stack: "Node.js, Express, Nodemailer, MongoDB",
    },
    {
      title: "Built a Full Stack Portfolio CMS",
      icon: "👨‍💻",
      stack: "React, Node.js, MongoDB, Admin Panel",
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
        className="btn btn-outline-light d-md-none position-fixed top-0 start-0 m-3 sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <main className="flex-grow-1 p-3" style={{ overflowY: "auto" }}>
        <header
          className="d-flex justify-content-between align-items-center mb-4"
          style={{
            borderBottom: "1px solid",
            paddingLeft: "50px",
            paddingBottom: "10px",
          }}
        >
          <h1 className="fw-bold m-0">💡 Project Ideas</h1>

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

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 text-white"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
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

export default FullStackIdeas;
