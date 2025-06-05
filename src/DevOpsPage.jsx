import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function DataAnalystPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
        {
            title: 'Top DevOps Tools to Learn in 2025',
            url: 'https://www.redhat.com/en/topics/devops/devops-tools',
            description: 'Explore essential DevOps tools like Docker, Kubernetes, and Jenkins that streamline CI/CD and infrastructure management.',
            icon: 'tools',
        },
        {
            title: 'Getting Started with CI/CD Pipelines',
            url: 'https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-devops',
            description: 'Understand how continuous integration and delivery pipelines improve software deployment speed and reliability.',
            icon: 'cogs',
        },
        {
            title: 'Kubernetes 101: Orchestrating Containers at Scale',
            url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
            description: 'A beginner-friendly guide to container orchestration using Kubernetes.',
            icon: 'layer-group',
        },
        {
            title: 'Terraform for Infrastructure as Code (IaC)',
            url: 'https://developer.hashicorp.com/terraform/intro',
            description: 'Learn how to manage cloud infrastructure efficiently using Terraform scripts.',
            icon: 'cloud',
        },
        {
            title: 'Monitoring and Logging with Prometheus & Grafana',
            url: 'https://grafana.com/oss/prometheus/',
            description: 'Set up robust monitoring dashboards using Prometheus for metrics and Grafana for visualization.',
            icon: 'chart-line',
        },
        {
            title: 'Understanding GitOps: DevOps + Git Workflow',
            url: 'https://www.weave.works/technologies/gitops/',
            description: 'Discover how GitOps improves automation, rollback, and deployment visibility.',
            icon: 'code-branch',
        },
        {
            title: 'Securing the DevOps Pipeline',
            url: 'https://www.snyk.io/learn/devsecops/',
            description: 'Learn the principles of DevSecOps and how to embed security throughout the development pipeline.',
            icon: 'shield-alt',
        },
        {
            title: 'Serverless and DevOps: A Perfect Match?',
            url: 'https://aws.amazon.com/serverless/devops/',
            description: 'Explore how serverless computing integrates with DevOps practices for better scalability and reduced ops overhead.',
            icon: 'cloud-upload-alt',
        },
        {
            title: 'Using Ansible for Automated Configuration',
            url: 'https://docs.ansible.com/ansible/latest/index.html',
            description: 'Automate IT infrastructure and software provisioning with Ansible.',
            icon: 'tasks',
        },
        {
            title: 'The DevOps Engineer Roadmap (2025 Edition)',
            url: 'https://roadmap.sh/devops',
            description: 'A comprehensive roadmap to becoming a DevOps engineer, covering tools, concepts, and best practices.',
            icon: 'map',
        },
    ];


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
                <Link to="/DevOpsPage" className="nav-link text-white">
                  📈 Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/DevOpsCourses" className="nav-link text-white">
                  📚 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/DevOpsIdeas" className="nav-link text-white">
                  💡 Project Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/DevOpsTerms" className="nav-link text-white">
                  📄 Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/DevOpsSettings" className="nav-link text-white">
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
          <h1 className="fw-bold m-0">🚀 DevOps Engineer Roadmap</h1>

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

        <div className="row mb-4">
        <div className="col">
            <div
                className="rounded p-4 text-white d-flex flex-column justify-content-center position-relative"
                style={{
                    background: 'linear-gradient(135deg, #1b0036, #3c096c)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    minHeight: '200px',
                    textAlign: 'left',
                    overflow: 'hidden',
                }}
                >
            <h3>My Career Path : </h3>
            DevOps Engineer
            <div className="tech-icons">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '10%', left: '15%', width: '30px' }}
                    alt="Docker"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '40%', left: '70%', width: '30px' }}
                    alt="Kubernetes"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '70%', left: '25%', width: '30px' }}
                    alt="Git"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '20%', left: '80%', width: '30px' }}
                    alt="Terraform"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '30%', left: '40%', width: '30px' }}
                    alt="Ansible"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '60%', left: '55%', width: '30px' }}
                    alt="Linux"
                />
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
                    className="tech-icon"
                    style={{ position: 'absolute', top: '50%', left: '10%', width: '30px' }}
                    alt="Jenkins"
                />
                </div>


            </div>
            </div>
            </div>

        <div
          className="d-flex flex-column flex-md-row gap-3"
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          <div
            className="p-3 rounded flex-grow-1"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              maxHeight: '340px',
              overflowY: 'auto',
              minWidth: '0',
            }}
          >
            <h3 className="d-flex align-items-center gap-2">
              <i className="fas fa-newspaper text-info"></i> DevOps Tech News
            </h3>
            <p>Stay updated with the latest trends in DevOps:</p>
            <ul className="list-unstyled">
            {NEWS.map((newsItem, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                  padding: '8px 12px',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ffff', textDecoration: 'underline' }}
                  className="d-flex align-items-center gap-2"
                >
                  <i className={`fas fa-${newsItem.icon} text-warning`}></i>
                  <span>{newsItem.title}</span>
                </a>
                <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>{newsItem.description}</p>
              </li>
                ))}
            </ul>
          </div>

          <div
            className="p-3 rounded flex-grow-1"
            style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                maxHeight: '340px',
                overflowY: 'auto',
                minWidth: '0',
            }}
            >
            <h3 className="d-flex align-items-center gap-2">
                <i className="fas fa-cogs text-info"></i> DevOps Skills Breakdown
            </h3>
            <p>Key skills and tools to focus on:</p>
            <ul className="list-unstyled">
                {[
                { tech: "Linux & Shell Scripting", percentage: 90 },
                { tech: "CI/CD (Jenkins/GitHub Actions)", percentage: 85 },
                { tech: "Docker & Containers", percentage: 80 },
                { tech: "Kubernetes", percentage: 75 },
                { tech: "Infrastructure as Code (Terraform)", percentage: 70 },
                { tech: "Cloud Platforms (AWS/Azure/GCP)", percentage: 85 },
                { tech: "Monitoring (Prometheus/Grafana)", percentage: 65 },
                { tech: "Version Control (Git)", percentage: 95 },
                ].map((item, index) => (
                <li key={index} className="mb-3">
                    <div className="d-flex justify-content-between">
                    <strong>{item.tech}</strong>
                    <span>{item.percentage}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
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
