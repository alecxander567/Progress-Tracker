import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function BackEndTerms() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

   const terms = [
  {
    term: "Node.js",
    category: "Programming",
    definition: "A JavaScript runtime built on Chrome's V8 engine used for building scalable network applications.",
    example: "const http = require('http');"
  },
  {
    term: "Express.js",
    category: "Framework",
    definition: "A minimal and flexible Node.js web application framework that provides robust features for building APIs and web servers.",
    example: "app.get('/api', (req, res) => res.send('Hello'))"
  },
  {
    term: "PHP",
    category: "Programming",
    definition: "A general-purpose scripting language especially suited to web development and server-side scripting.",
    example: "<?php echo 'Hello World'; ?>"
  },
  {
    term: "Laravel",
    category: "Framework",
    definition: "A PHP web application framework with expressive, elegant syntax for tasks like routing, authentication, and caching.",
    example: "Route::get('/users', [UserController::class, 'index']);"
  },
  {
    term: "Python",
    category: "Programming",
    definition: "A versatile and easy-to-read language widely used for backend development, scripting, and automation.",
    example: "def hello(): return 'Hello World'"
  },
  {
    term: "Django",
    category: "Framework",
    definition: "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    example: "urlpatterns = [ path('admin/', admin.site.urls) ]"
  },
  {
    term: "Java",
    category: "Programming",
    definition: "A class-based, object-oriented programming language used for building robust back-end systems.",
    example: "public class HelloWorld { public static void main(String[] args) { System.out.println('Hello'); }}"
  },
  {
    term: "Spring Boot",
    category: "Framework",
    definition: "A framework that simplifies the bootstrapping and development of Java back-end applications.",
    example: "@RestController public class HelloController { @GetMapping('/') String home() { return 'Hello'; }}"
  },
  {
    term: "MySQL",
    category: "Data",
    definition: "An open-source relational database management system commonly used in web applications.",
    example: "SELECT * FROM users;"
  },
  {
    term: "MongoDB",
    category: "Data",
    definition: "A NoSQL database that stores data in flexible, JSON-like documents.",
    example: "db.users.find({ name: 'John' });"
  },
  {
    term: "PostgreSQL",
    category: "Data",
    definition: "An advanced, open-source relational database known for reliability and support for complex queries.",
    example: "SELECT * FROM employees WHERE age > 30;"
  },
  {
    term: "JWT",
    category: "Concepts",
    definition: "JSON Web Tokens - a compact way to securely transmit information between parties as a JSON object.",
    example: "Authorization: Bearer <token>"
  },
  {
    term: "REST API",
    category: "Concepts",
    definition: "An architectural style for designing networked applications using stateless communication via HTTP.",
    example: "GET /api/products/1"
  },
  {
    term: "CRUD",
    category: "Concepts",
    definition: "Create, Read, Update, Delete - the basic operations for managing data in a database or API.",
    example: "POST /users, GET /users/1, PUT /users/1, DELETE /users/1"
  },
  {
    term: "ORM",
    category: "Concepts",
    definition: "Object-Relational Mapping - a technique that connects object-oriented code with relational databases.",
    example: "User.objects.create(name='Alice')"
  },
  {
    term: "Docker",
    category: "Tools",
    definition: "A platform that uses OS-level virtualization to deliver software in packages called containers.",
    example: "docker run -p 3000:3000 myapp"
  },
  {
    term: "Postman",
    category: "Tools",
    definition: "An API platform used to build, test, and document APIs quickly and efficiently.",
    example: "GET request to http://localhost:3000/api/products"
  },
  {
    term: "Redis",
    category: "Tools",
    definition: "An in-memory data structure store used as a database, cache, and message broker.",
    example: "SET user:1 'John'; GET user:1"
  }
];

const categories = ['All', 'Programming', 'Framework', 'Concepts', 'Data', 'Tools'];

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
                    <p className="lead mb-3 mb-md-4 fs-6 fs-md-5">Master the essential vocabulary of Back-end development</p>
              
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

export default BackEndTerms;