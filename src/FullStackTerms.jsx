import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function FullStackTerms() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const terms = [
    {
      term: "HTML",
      category: "Markup",
      definition: "HyperText Markup Language - the foundation for structuring web content.",
      example: "<header>, <section>, <footer>"
    },
    {
      term: "CSS",
      category: "Styling",
      definition: "Cascading Style Sheets - controls the layout and design of web pages.",
      example: "padding: 20px; display: grid;"
    },
    {
      term: "JavaScript",
      category: "Programming",
      definition: "A scripting language that adds interactivity and logic to web applications.",
      example: "addEventListener('click', () => {})"
    },
    {
      term: "React",
      category: "Frontend Framework",
      definition: "A JavaScript library for building dynamic user interfaces using components.",
      example: "useState, JSX, props"
    },
    {
      term: "Node.js",
      category: "Backend Runtime",
      definition: "A runtime environment that lets you run JavaScript on the server side.",
      example: "const http = require('http');"
    },
    {
      term: "Express.js",
      category: "Backend Framework",
      definition: "A minimal Node.js web application framework used for building APIs and web servers.",
      example: "app.get('/api', (req, res) => res.send('Hello'))"
    },
    {
      term: "MongoDB",
      category: "Database",
      definition: "A NoSQL database used to store data in flexible, JSON-like documents.",
      example: "{ name: 'John', age: 25 }"
    },
    {
      term: "Mongoose",
      category: "Database",
      definition: "An ODM library for MongoDB that provides schema-based modeling for your data.",
      example: "const User = mongoose.model('User', userSchema);"
    },
    {
      term: "REST API",
      category: "Concepts",
      definition: "An architectural style for designing networked applications using HTTP methods.",
      example: "GET /users, POST /login"
    },
    {
      term: "JWT",
      category: "Security",
      definition: "JSON Web Token - a compact, URL-safe token used for secure data transmission and authentication.",
      example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    {
      term: "Database Schema",
      category: "Concepts",
      definition: "The structure of a database, including tables, fields, and relationships.",
      example: "User has fields: name, email, password"
    },
    {
      term: "SQL",
      category: "Database",
      definition: "Structured Query Language - used to manage relational databases.",
      example: "SELECT * FROM users WHERE id = 1;"
    },
    {
      term: "Git",
      category: "Tools",
      definition: "Version control system for tracking code changes collaboratively.",
      example: "git clone, git branch, git pull"
    },
    {
      term: "GitHub",
      category: "Tools",
      definition: "A platform for hosting and managing Git repositories with collaboration features.",
      example: "Pull requests, Issues, Actions"
    },
    {
      term: "npm",
      category: "Tools",
      definition: "Node Package Manager - manages JavaScript libraries and tools for your projects.",
      example: "npm install express"
    },
    {
      term: "Webpack",
      category: "Tools",
      definition: "A tool for bundling JavaScript modules and assets for efficient browser delivery.",
      example: "entry, output, loaders, plugins"
    },
    {
      term: "CORS",
      category: "Security",
      definition: "Cross-Origin Resource Sharing - a mechanism to allow restricted resources on a web page to be requested from another domain.",
      example: "Access-Control-Allow-Origin"
    },
    {
      term: "API",
      category: "Concepts",
      definition: "Application Programming Interface - allows different software systems to communicate with each other.",
      example: "fetch('/api/products')"
    }
  ];
  
  const categories = [
    'All', 
    'Markup', 
    'Styling', 
    'Programming', 
    'Frontend Framework', 
    'Backend Runtime', 
    'Backend Framework', 
    'Database', 
    'Concepts', 
    'Security', 
    'Tools'
  ];
  
  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
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

            <main 
              className="flex-grow-1 p-3 p-md-4"
              style={{
                marginLeft: window.innerWidth >= 768 ? '250px' : '0',
                transition: 'margin-left 0.3s ease'
              }}
            >
              <header
                className="d-flex justify-content-between align-items-center mb-4"
                style={{ borderBottom: '1px solid', paddingLeft: '50px', paddingBottom: '10px' }}
              >
                <h1 className="fw-bold m-0">📄 Terms to study</h1>

                <div className="d-flex gap-2">
                  <a href="https://github.com/alecxander567/Progress-Tracker" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.facebook.com/alec.xander.espaldon.2024/" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.reddit.com/user/Historical_Rub8018/" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
                    <i className="fab fa-reddit"></i>
                  </a>
                </div>
              </header>
              <div className="container-fluid">
                <div className="row mb-3 mb-md-4">
                  <div className="col-12">
                    <p className="lead mb-3 mb-md-4 fs-6 fs-md-5">Master the essential vocabulary of full-stack development</p>
              
                    <div className="row g-2 g-md-3 mb-3 mb-md-4">
                      <div className="col-12 col-sm-6 col-md-6">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Search terms..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: 'white'
                          }}
                        />
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <select
                          className="form-select form-select-lg"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: 'white',
                            fontSize: window.innerWidth < 768 ? '0.9rem' : '1.25rem',
                            padding: window.innerWidth < 768 ? '0.5rem 0.75rem' : '0.5rem 1rem'
                          }}
                        >
                        {categories.map(category => (
                          <option key={category} value={category} style={{ backgroundColor: '#2e003e', color: 'white' }}>
                            {category}
                          </option>
                        ))}
                        </select>
                      </div>
                      <div className="col-12 col-md-2">
                        <div className="text-center text-md-end">
                          <small className="text-light opacity-75">
                            {filteredTerms.length} terms
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-3 g-md-4">
                {filteredTerms.map((termData, index) => (
                  <div key={index} className="col-12 col-sm-6 col-lg-6 col-xl-4">
                    <div 
                      className="card h-100 border-0 shadow-lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px)';
                        e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      <div className="card-body p-3 p-md-4" style={{ border: "1px solid white", borderRadius: "10px" }}>
                        <div className="d-flex justify-content-between align-items-start mb-2 mb-md-3">
                          <h5 className="card-title fw-bold text-white mb-0 fs-6 fs-md-5">
                            {termData.term}
                          </h5>
                          <span 
                            className="badge rounded-pill px-2 px-md-3 py-1 py-md-2"
                            style={{
                              backgroundColor: getCategoryColor(termData.category),
                              fontSize: '0.65rem'
                            }}
                          >
                            {termData.category}
                          </span>
                        </div>
                        <p className="card-text text-light mb-2 mb-md-3 small">
                          {termData.definition}
                        </p>
                        <div 
                          className="mt-auto p-2 p-md-3 rounded"
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          <small className="text-light opacity-75 d-block mb-1">Example:</small>
                            <code 
                              className="text-info small"
                              style={{ 
                                backgroundColor: 'transparent',
                                fontSize: '0.75rem',
                                wordBreak: 'break-word'
                              }}
                            >
                              {termData.example}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                  {filteredTerms.length === 0 && (
                  <div className="row">
                    <div className="col-12 text-center py-4 py-md-5">
                      <div 
                        className="p-4 p-md-5 rounded"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <h3 className="text-light mb-3 fs-4 fs-md-3">No terms found</h3>
                        <p className="text-light opacity-75 small">
                          Try adjusting your search or category filter
                        </p>
                      </div>
                    </div>
                  </div>
                  )}
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
              .form-control:focus, .form-select:focus {
                background-color: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.5) !important;
                box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25) !important;
                color: white !important;
              }
              .form-control::placeholder {
                color: rgba(255, 255, 255, 0.7) !important;
              }
        
              @media (max-width: 767px) {
                main {
                margin-left: 0 !important;
              }
            `}
          </style>
        </div>
      );
    }

function getCategoryColor(category) {
  const colors = {
    'Markup': '#ff6b6b',
    'Styling': '#4ecdc4',
    'Programming': '#45b7d1',
    'Framework': '#96ceb4',
    'Concepts': '#ffeaa7',
    'Data': '#fd79a8',
    'Tools': '#a29bfe'
  };
  return colors[category] || '#6c757d';
}

export default FullStackTerms;