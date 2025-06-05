import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function CloudPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
        {
            title: 'AWS EC2 Introduces Graviton4 Instances',
            url: 'https://aws.amazon.com/ec2/graviton/',
            description: 'Amazon EC2 now offers Graviton4-based instances, delivering better performance and cost-efficiency.',
            icon: 'server',
        },
        {
            title: 'Google Cloud Enhances AI and ML Services',
            url: 'https://cloud.google.com/blog/topics/ai-machine-learning/',
            description: 'Google Cloud expands Vertex AI capabilities to help engineers build and deploy models faster.',
            icon: 'robot',
        },
        {
            title: 'Azure Launches Confidential VM Series',
            url: 'https://azure.microsoft.com/en-us/blog/',
            description: 'Microsoft Azure adds confidential VMs to enhance workload security for cloud environments.',
            icon: 'lock',
        },
        {
            title: 'Terraform 1.8 Released with Dependency Improvements',
            url: 'https://www.hashicorp.com/blog/',
            description: 'Terraform’s latest release introduces better resource targeting and module dependency tracking.',
            icon: 'cogs',
        },
        {
            title: 'Best Practices for Designing Multi-Cloud Architectures',
            url: 'https://www.redhat.com/en/resources/multicloud-architecture-design-guide',
            description: 'Learn strategies and design patterns for managing infrastructure across multiple cloud providers.',
            icon: 'project-diagram',
        },
        {
            title: 'Kubernetes 1.30 Brings Improved Job Scheduling',
            url: 'https://kubernetes.io/blog/',
            description: 'The latest version of Kubernetes improves batch job performance and cluster stability.',
            icon: 'cubes',
        },
        {
            title: 'Understanding IAM Roles and Policies in AWS',
            url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/',
            description: 'A guide to implementing secure access control using AWS Identity and Access Management.',
            icon: 'key',
        },
        {
            title: 'Serverless Trends in 2025: What You Need to Know',
            url: 'https://www.infoq.com/articles/serverless-trends-2025/',
            description: 'Explore the evolution of serverless computing and how cloud engineers can leverage it.',
            icon: 'cloud',
        },
        {
            title: 'Cloud Monitoring Tools: Prometheus vs CloudWatch',
            url: 'https://www.datadoghq.com/blog/prometheus-vs-cloudwatch/',
            description: 'Compare key features and use cases for Prometheus and AWS CloudWatch.',
            icon: 'chart-line',
        },
        {
            title: 'Securing Cloud Infrastructure with Zero Trust Architecture',
            url: 'https://www.cisa.gov/zero-trust-maturity-model',
            description: 'Explore how Zero Trust principles enhance security for cloud-based systems.',
            icon: 'shield-alt',
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

        <main className="flex-grow-1 p-3" style={{ zIndex: 1 }}>
            <header
            className="d-flex justify-content-between align-items-center mb-4"
            style={{ borderBottom: '1px solid', paddingLeft: '50px', paddingBottom: '10px' }}
        >
            <h1 className="fw-bold m-0">🚀 Cloud Engineer Roadmap</h1>

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
                        Cloud Engineer
                        <div className="tech-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="tech-icon" style={{ position: 'absolute', top: '10%', left: '15%', width: '30px' }} alt="AWS" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" className="tech-icon" style={{ position: 'absolute', top: '40%', left: '70%', width: '30px' }} alt="GCP" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="tech-icon" style={{ position: 'absolute', top: '70%', left: '25%', width: '30px' }} alt="Azure" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="tech-icon" style={{ position: 'absolute', top: '20%', left: '80%', width: '30px' }} alt="Terraform" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="tech-icon" style={{ position: 'absolute', top: '30%', left: '40%', width: '30px' }} alt="Docker" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" className="tech-icon" style={{ position: 'absolute', top: '60%', left: '55%', width: '30px' }} alt="Kubernetes" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" className="tech-icon" style={{ position: 'absolute', top: '50%', left: '10%', width: '30px' }} alt="Bash" />
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
                        <i className="fas fa-newspaper text-info"></i> Cloud Tech News
                    </h3>
                    <p>Stay updated with the latest trends in Cloud Engineering:</p>
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
                <i className="fas fa-cloud text-info"></i> Cloud Engineer Focus Breakdown
            </h3>
            <p>Technologies you should focus on:</p>
            <ul className="list-unstyled">
                {[
                    { tech: "AWS / Azure / GCP", percentage: 90 },
                    { tech: "Linux & Shell Scripting", percentage: 85 },
                    { tech: "Infrastructure as Code (Terraform)", percentage: 80 },
                    { tech: "CI/CD (GitHub Actions, Jenkins)", percentage: 75 },
                    { tech: "Containers & Kubernetes", percentage: 70 },
                    { tech: "Serverless (AWS Lambda, Azure Functions)", percentage: 65 },
                    { tech: "Monitoring (CloudWatch, Prometheus)", percentage: 60 },
                    { tech: "Security (IAM, Encryption)", percentage: 55 },
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

export default CloudPage;