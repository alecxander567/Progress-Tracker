import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function BackEndIdeas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projects = [
    {
      title: "Developed a RESTful API for Bookstore",
      icon: "📚",
      stack: "Node.js, Express, MongoDB",
    },
    {
      title: "Built a User Authentication System",
      icon: "🔐",
      stack: "JWT, Node.js, Bcrypt",
    },
    {
      title: "Created a Blogging Platform Backend",
      icon: "✍️",
      stack: "Django, PostgreSQL, DRF",
    },
    {
      title: "Implemented File Upload Service",
      icon: "📁",
      stack: "Node.js, Multer, Cloudinary",
    },
    {
      title: "Built a Real-Time Chat Backend",
      icon: "💬",
      stack: "Node.js, WebSocket, MongoDB",
    },
    {
      title: "Developed an E-commerce Backend",
      icon: "🛒",
      stack: "Laravel, MySQL, API Resources",
    },
    {
      title: "Created a Task Manager API",
      icon: "✅",
      stack: "Spring Boot, PostgreSQL, JPA",
    },
    {
      title: "Designed a Secure Payment Gateway",
      icon: "💳",
      stack: "Node.js, Stripe API, Express",
    },
    {
      title: "Built a Job Posting Backend API",
      icon: "💼",
      stack: "Python, Flask, SQLite",
    },
    {
      title: "Implemented Role-Based Access Control",
      icon: "🛡️",
      stack: "Express.js, MongoDB, RBAC",
    },
    {
      title: "Built a Commenting System API",
      icon: "💬",
      stack: "Django Rest Framework, JWT",
    },
    {
      title: "Created a Feedback Form Handler",
      icon: "📝",
      stack: "PHP, MySQL, SMTP",
    },
    {
      title: "Developed a Microservice for Notifications",
      icon: "🔔",
      stack: "Node.js, RabbitMQ, Docker",
    },
    {
      title: "Built a Blog API with Pagination",
      icon: "📰",
      stack: "Spring Boot, MySQL, REST",
    },
    {
      title: "Set up Continuous Integration Pipeline",
      icon: "🔁",
      stack: "GitHub Actions, Docker, Node.js",
    },
    {
      title: "Designed a REST API with Swagger Docs",
      icon: "📃",
      stack: "Express, Swagger, OpenAPI",
    },
    {
      title: "Created a Backend for Weather App",
      icon: "⛅",
      stack: "Flask, OpenWeather API, JSON",
    },
    {
      title: "Implemented Email Verification System",
      icon: "📨",
      stack: "PHP, PHPMailer, MySQL",
    },
    {
      title: "Built a Session Management System",
      icon: "🧠",
      stack: "Express-session, Redis",
    },
    {
      title: "Created a Dockerized API Service",
      icon: "🐳",
      stack: "Node.js, Express, Docker",
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

export default BackEndIdeas;
