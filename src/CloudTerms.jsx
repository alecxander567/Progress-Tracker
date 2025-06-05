import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function CloudTerms() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

   const terms = [
        {
            term: "AWS EC2",
            category: "Compute",
            definition: "Amazon Elastic Compute Cloud provides scalable virtual servers in the cloud.",
            example: "Launching an EC2 instance to host a web application."
        },
        {
            term: "Terraform",
            category: "Infrastructure as Code",
            definition: "An open-source tool to define and provision infrastructure using declarative configuration files.",
            example: "terraform apply -auto-approve"
        },
        {
            term: "Kubernetes",
            category: "Orchestration",
            definition: "An open-source system for automating deployment, scaling, and management of containerized applications.",
            example: "kubectl get pods"
        },
        {
            term: "AWS Lambda",
            category: "Serverless",
            definition: "A serverless compute service that runs your code in response to events and automatically manages the compute resources.",
            example: "Writing a function triggered by S3 uploads."
        },
        {
            term: "Docker",
            category: "Containers",
            definition: "A platform to package applications and their dependencies into containers for consistent deployment.",
            example: "docker build -t myapp ."
        },
        {
            term: "AWS S3",
            category: "Storage",
            definition: "Amazon Simple Storage Service offers scalable object storage with high availability.",
            example: "Uploading files to an S3 bucket."
        },
        {
            term: "IAM",
            category: "Security",
            definition: "Identity and Access Management service to securely control access to AWS resources.",
            example: "Creating a user with specific permissions."
        },
        {
            term: "CloudWatch",
            category: "Monitoring",
            definition: "A monitoring and observability service for AWS cloud resources and applications.",
            example: "Setting up alarms on CPU usage."
        },
        {
            term: "VPC",
            category: "Networking",
            definition: "Virtual Private Cloud allows you to provision a logically isolated section of the cloud.",
            example: "Configuring subnets and security groups."
        },
        {
            term: "Ansible",
            category: "Automation",
            definition: "An open-source tool for automating cloud provisioning, configuration management, and application deployment.",
            example: "ansible-playbook deploy.yml"
        },
        {
            term: "Azure DevOps",
            category: "CI/CD",
            definition: "A set of development tools to support continuous integration and delivery pipelines.",
            example: "Creating build and release pipelines."
        },
        {
            term: "CloudFormation",
            category: "Infrastructure as Code",
            definition: "AWS service to model and provision resources using templates written in JSON or YAML.",
            example: "Deploying stacks with cloudformation deploy."
        },
        {
            term: "Elastic Load Balancer (ELB)",
            category: "Networking",
            definition: "A load balancing service that distributes incoming traffic across multiple targets.",
            example: "Setting up an ELB for high availability."
        },
        {
            term: "Prometheus",
            category: "Monitoring",
            definition: "An open-source system monitoring and alerting toolkit.",
            example: "Querying metrics with PromQL."
        },
        {
            term: "GitOps",
            category: "Deployment",
            definition: "A methodology using Git repositories as the source of truth for declarative infrastructure and applications.",
            example: "Using Flux or ArgoCD for deployments."
        },
        {
            term: "CloudTrail",
            category: "Security",
            definition: "AWS service that logs and monitors account activity and API usage for governance and compliance.",
            example: "Reviewing user activity logs."
        },
        {
            term: "Google Cloud Storage",
            category: "Storage",
            definition: "Object storage service for storing and accessing data on Google's infrastructure.",
            example: "Uploading backups to a GCS bucket."
        },
        {
            term: "Serverless Framework",
            category: "Serverless",
            definition: "A framework for building and deploying serverless applications across cloud providers.",
            example: "serverless deploy"
        },
        {
            term: "Istio",
            category: "Service Mesh",
            definition: "An open-source service mesh that provides traffic management, security, and observability for microservices.",
            example: "Configuring Istio routing rules."
        },  
    ];

    const categories = [
    'All',
    'Compute',
    'Infrastructure as Code',
    'Containers',
    'Serverless',
    'Storage',
    'Security',
    'Networking',
    'Monitoring',
    'Automation',
    'CI/CD',
    'Deployment',
    'Service Mesh',
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
                  <Link to="/CloudPage" className="nav-link text-white">
                    📈 Progress
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/CloudCourses" className="nav-link text-white">
                    📚 Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/CloudIdeas" className="nav-link text-white">
                    💡 Project Ideas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/CloudTerms" className="nav-link text-white">
                    📄 Terms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/CloudSettings" className="nav-link text-white">
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
                    <p className="lead mb-3 mb-md-4 fs-6 fs-md-5">Master the essential vocabulary of Coud Engineering</p>
              
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

export default CloudTerms;