import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function CyberSecurityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 const NEWS = [
        {
            title: 'CISA Updates Zero Trust Maturity Model 2.0',
            url: 'https://www.cisa.gov/zero-trust-maturity-model',
            description: 'The Cybersecurity and Infrastructure Security Agency (CISA) enhances guidance for implementing Zero Trust principles across enterprise systems.',
            icon: 'shield-alt',
        },
        {
            title: 'MITRE Releases ATT&CK Framework Update',
            url: 'https://attack.mitre.org/',
            description: 'MITRE updates the ATT&CK framework, refining adversary tactics and techniques used in real-world cyber threats.',
            icon: 'sitemap',
        },
        {
            title: 'OWASP Top 10 for 2025 Released',
            url: 'https://owasp.org/Top10/',
            description: 'The latest OWASP Top 10 lists the most critical web application security risks for 2025, helping developers and security teams mitigate threats.',
            icon: 'bug',
        },
        {
            title: 'NIST Publishes Guidance on Post-Quantum Cryptography',
            url: 'https://www.nist.gov/pqcrypto',
            description: 'NIST provides recommendations for transitioning cryptographic systems to resist quantum computing threats.',
            icon: 'lock',
        },
        {
            title: 'Microsoft Patch Tuesday Fixes Critical Exchange Vulnerabilities',
            url: 'https://msrc.microsoft.com/update-guide/',
            description: 'Security updates address critical vulnerabilities in Microsoft Exchange Server that could allow remote code execution.',
            icon: 'exclamation-triangle',
        },
        {
            title: 'Understanding Ransomware-as-a-Service (RaaS) Trends',
            url: 'https://www.darkreading.com/',
            description: 'A breakdown of how cybercriminals are increasingly using Ransomware-as-a-Service to execute widespread attacks.',
            icon: 'skull',
        },
        {
            title: 'Top SIEM Tools Compared: Splunk vs. QRadar',
            url: 'https://www.techtarget.com/searchsecurity/tip/Comparing-top-SIEM-tools',
            description: 'Analyze the strengths and use cases of leading Security Information and Event Management tools.',
            icon: 'chart-line',
        },
        {
            title: 'Cybersecurity in Cloud Environments: AWS Best Practices',
            url: 'https://docs.aws.amazon.com/security/',
            description: 'Explore security recommendations for protecting cloud workloads on Amazon Web Services.',
            icon: 'cloud',
        },
        {
            title: 'Linux Kernel Vulnerability (CVE-2025-12345) Discovered',
            url: 'https://www.cve.org/',
            description: 'A critical Linux vulnerability could allow privilege escalation. Patch and mitigation instructions included.',
            icon: 'terminal',
        },
        {
            title: 'Cyber Hygiene Checklist for 2025',
            url: 'https://www.cisa.gov/resources-tools/resources/cyber-essentials-toolkit',
            description: 'CISA provides an updated checklist for small and mid-sized organizations to improve their basic cybersecurity posture.',
            icon: 'tasks',
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
                <Link to="/CyberSecurityPage" className="nav-link text-white">
                  📈 Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CyberSecurityCourses" className="nav-link text-white">
                  📚 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CyberSecurityIdeas" className="nav-link text-white">
                  💡 Project Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CyberSecurityTerms" className="nav-link text-white">
                  📄 Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CyberSecuritySettings" className="nav-link text-white">
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
            <h1 className="fw-bold m-0">🚀 Cybersecurity Specialist Roadmap</h1>

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
                        Cybersecurity Specialist
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
                        <i className="fas fa-newspaper text-info"></i> Cybersecurity Tech News
                    </h3>
                    <p>Stay updated with the latest trends in Cybersecurity:</p>
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
                    <i className="fas fa-shield-alt text-info"></i> Cybersecurity Specialist Focus Breakdown
                </h3>
                <p>Skills and areas you should focus on:</p>
                <ul className="list-unstyled">
                    {[
                        { tech: "Network Security & Firewalls", percentage: 90 },
                        { tech: "Security Information and Event Management (SIEM)", percentage: 85 },
                        { tech: "Threat Hunting & Incident Response", percentage: 80 },
                        { tech: "Vulnerability Assessment & Penetration Testing", percentage: 75 },
                        { tech: "Identity & Access Management (IAM)", percentage: 70 },
                        { tech: "Endpoint Detection & Response (EDR)", percentage: 65 },
                        { tech: "Cryptography & Encryption", percentage: 60 },
                        { tech: "Security Compliance (NIST, ISO 27001)", percentage: 55 },
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

export default CyberSecurityPage;