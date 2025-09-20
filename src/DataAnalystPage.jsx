import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function DataAnalystPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
    {
      title: "Top Data Analytics Tools in 2025",
      url: "https://www.datacamp.com/blog/top-data-analytics-tools",
      description:
        "Explore the leading tools used by data analysts today including Python, R, and Power BI.",
      icon: "chart-bar",
    },
    {
      title: "Mastering SQL for Data Analysis",
      url: "https://mode.com/sql-tutorial/",
      description:
        "Learn how SQL is used to query, analyze, and manage large datasets effectively.",
      icon: "database",
    },
    {
      title: "Pandas 3.0: What’s New?",
      url: "https://pandas.pydata.org/whatsnew/",
      description:
        "The latest version of Pandas introduces performance boosts and simplified data transformations.",
      icon: "code",
    },
    {
      title: "Data Cleaning Techniques Every Analyst Should Know",
      url: "https://www.kaggle.com/learn/data-cleaning",
      description:
        "Get practical with techniques to clean and prepare messy datasets.",
      icon: "broom",
    },
    {
      title: "Excel Power Query: Automate Your Data Workflow",
      url: "https://support.microsoft.com/en-us/excel-power-query",
      description:
        "Power Query lets you automate and transform your data directly in Excel.",
      icon: "table",
    },
    {
      title: "Visualizing Data with Tableau: A Beginner’s Guide",
      url: "https://www.tableau.com/learn/get-started",
      description:
        "An introduction to building interactive dashboards with Tableau.",
      icon: "chart-pie",
    },
    {
      title: "Python vs R: Which Should Data Analysts Use?",
      url: "https://towardsdatascience.com/python-vs-r-for-data-science-which-should-you-learn-first-2edc71e35260",
      description:
        "A comparison of two of the most popular languages in data analysis.",
      icon: "balance-scale",
    },
    {
      title: "Data Storytelling: Turning Insights into Action",
      url: "https://www.linkedin.com/pulse/data-storytelling-key-skill-analyst/",
      description:
        "Learn how to present your findings effectively with clear narratives and visuals.",
      icon: "book-open",
    },
    {
      title: "AI and the Future of Data Analysis",
      url: "https://www.forbes.com/sites/forbestechcouncil/2024/11/10/how-ai-is-redefining-data-analysis/",
      description:
        "Understand how artificial intelligence is changing the landscape of data analytics.",
      icon: "robot",
    },
    {
      title: "Ethics in Data: What Every Analyst Must Know",
      url: "https://hbr.org/2020/01/what-you-need-to-know-about-data-ethics",
      description:
        "A look at ethical responsibilities when working with user and organizational data.",
      icon: "shield-alt",
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
          <h1 className="fw-bold m-0">🚀 Data Analyst Roadmap</h1>

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
              Data Analyst
              <div className="tech-icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    width: "30px",
                  }}
                  alt="Python"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "70%",
                    width: "30px",
                  }}
                  alt="R"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "25%",
                    width: "30px",
                  }}
                  alt="MySQL"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Tableau_Logo.png"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "80%",
                    width: "30px",
                  }}
                  alt="Tableau"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Office_Excel_%282018–present%29.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    width: "30px",
                  }}
                  alt="Excel"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/Microsoft_Power_BI_Logo.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "55%",
                    width: "30px",
                  }}
                  alt="Power BI"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    width: "30px",
                  }}
                  alt="Jupyter Notebook"
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
              <i className="fas fa-newspaper text-info"></i> Data Analyst Tech
              News
            </h3>
            <p>Stay updated with the latest trends in Data Analyst:</p>
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
              <i className="fas fa-chart-bar text-info"></i> Data Analyst Skills
              Breakdown
            </h3>
            <p>Key skills and tools to focus on:</p>
            <ul className="list-unstyled">
              {[
                { tech: "Python", percentage: 90 },
                { tech: "SQL", percentage: 85 },
                { tech: "Excel", percentage: 80 },
                {
                  tech: "Data Visualization (Tableau/Power BI)",
                  percentage: 75,
                },
                { tech: "Statistics & Probability", percentage: 70 },
                { tech: "R Programming", percentage: 60 },
                { tech: "Data Cleaning & Wrangling", percentage: 65 },
                { tech: "Machine Learning Basics", percentage: 50 },
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

export default DataAnalystPage;
