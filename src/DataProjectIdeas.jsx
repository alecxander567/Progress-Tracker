import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function DataProjectIdeas() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projects = [
    {
      title: "Analyzed Customer Purchase Patterns",
      icon: "📊",
      stack: "Python, Pandas, Jupyter Notebook",
    },
    {
      title: "Created Interactive Sales Dashboards",
      icon: "📈",
      stack: "Tableau, Excel, Power BI",
    },
    {
      title: "Cleaned and Transformed Raw Datasets",
      icon: "🧹",
      stack: "Python, Pandas, NumPy",
    },
    {
      title: "Designed SQL Queries for Reporting",
      icon: "🗃️",
      stack: "MySQL, PostgreSQL, SQL Server",
    },
    {
      title: "Built Automated Data Pipelines",
      icon: "⛓️",
      stack: "Python, Airflow, Cron",
    },
    {
      title: "Performed A/B Testing on Campaigns",
      icon: "⚖️",
      stack: "Excel, Python, SciPy",
    },
    {
      title: "Created Customer Segmentation Models",
      icon: "👥",
      stack: "K-Means, Scikit-learn, Python",
    },
    {
      title: "Visualized KPIs for Executives",
      icon: "📌",
      stack: "Power BI, Excel, Tableau",
    },
    {
      title: "Forecasted Sales using Time Series",
      icon: "⏳",
      stack: "ARIMA, Prophet, Python",
    },
    {
      title: "Scraped Data from Public Sources",
      icon: "🕷️",
      stack: "BeautifulSoup, Requests, Python",
    },
    {
      title: "Explored Correlations in Datasets",
      icon: "🔍",
      stack: "Python, Seaborn, Pandas",
    },
    {
      title: "Automated Excel Reporting",
      icon: "📑",
      stack: "VBA, Python, openpyxl",
    },
    {
      title: "Analyzed Social Media Trends",
      icon: "📱",
      stack: "Twitter API, Python, NLTK",
    },
    {
      title: "Created Survey Result Insights",
      icon: "📝",
      stack: "Excel, Python, Matplotlib",
    },
    {
      title: "Built Data Quality Audit Reports",
      icon: "✅",
      stack: "Python, Pandas-Profiling",
    },
    {
      title: "Built Power BI Reports for Finance",
      icon: "💰",
      stack: "Power BI, DAX, Excel",
    },
    {
      title: "Mapped Data using Geolocation",
      icon: "🗺️",
      stack: "GeoPandas, Folium, Python",
    },
    {
      title: "Cleaned CRM Export for Marketing",
      icon: "🧼",
      stack: "Excel, Power Query, Python",
    },
    {
      title: "Implemented KPI Tracker Dashboard",
      icon: "🎯",
      stack: "Google Sheets, Data Studio",
    },
    {
      title: "Prepared Data for ML Models",
      icon: "🧠",
      stack: "Scikit-learn, Pandas, Python",
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
            <Link to="/DataAnalystPage" className="nav-link text-white">
              📈 Progress
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DataAnalystCourses" className="nav-link text-white">
              📚 Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DataProjectIdeas" className="nav-link text-white">
              💡 Project Ideas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DataAnalystTerms" className="nav-link text-white">
              📄 Terms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/DataAnalystSettings" className="nav-link text-white">
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

export default DataProjectIdeas;
