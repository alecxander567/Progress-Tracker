import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState  } from 'react';


function AIMLCourses() {
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
                      <Link to="/AIMLPage" className="nav-link text-white">
                        📈 Progress
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/AIMLCourses" className="nav-link text-white">
                        📚 Courses
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/AIMLIdeas" className="nav-link text-white">
                        💡 Project Ideas
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/AIMLTerms" className="nav-link text-white">
                        📄 Terms
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/AIMLSettings" className="nav-link text-white">
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
                        title: "Python for Data Science",
                        description: "Master Python basics tailored for data analysis and AI/ML projects.",
                        href: "https://youtu.be/rfscVS0vtbw",
                        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"]
                        },
                        {
                        title: "Pandas Crash Course",
                        description: "Learn essential Python libraries for data manipulation and numerical computing.",
                        href: "https://youtu.be/ZyhVh-qRZPA",
                        icons: [
                            "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
                        ]
                        },
                        {
                        title: "Matplotlib & Pandas Tutorial",
                        description: "Visualize your data effectively using popular Python libraries.",
                        href: "https://youtu.be/0P7QnIQDBJY",
                        icons: [
                            "https://matplotlib.org/_static/images/logo2.svg",
                            "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
                        ]
                        },
                        {
                        title: "Scikit-learn Full Course",
                        description: "Understand and implement traditional ML models with Scikit-learn.",
                        href: "https://youtu.be/0Lt9w-BxKFQ",
                        icons: ["https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png"]
                        },
                        {
                        title: "TensorFlow Crash Course",
                        description: "Build deep learning models with TensorFlow and understand neural networks.",
                        href: "https://youtu.be/tPYj3fFJGjk",
                        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"]
                        },
                        {
                        title: "PyTorch for Deep Learning",
                        description: "Learn how to create AI models using PyTorch's dynamic computation graphs.",
                        href: "https://youtu.be/V_xro1bcAuA?si=pu5yR5zfqet50VoW",
                        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"]
                        },
                        {
                        title: "Machine Learning by Google",
                        description: "A full course on ML theory and practice from Google engineers.",
                        href: "https://youtu.be/i_LwzRVP7bg",
                        icons: ["https://www.gstatic.com/devrel-devsite/prod/vdf6a1891f1e2f831df1b7f40485fd03486fc5418a8533f4cc31aa3b650b33845/tensorflow/images/lockup.svg"]
                        },
                        {
                        title: "Model Deployment with Flask",
                        description: "Deploy ML models via web API using Flask or FastAPI.",
                        href: "https://youtu.be/UbCWoMf80PY",
                        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"]
                        },
                        {
                        title: "Git & GitHub for ML Projects",
                        description: "Version control for your AI/ML codebases using Git and GitHub.",
                        href: "https://youtu.be/zTjRZNkhiEU?si=Or-yo1g6ksen_uHx",
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

export default AIMLCourses;