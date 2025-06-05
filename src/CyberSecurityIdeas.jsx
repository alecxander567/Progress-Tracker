import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CyberSecurityIdeas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Deployed Secure Web Application with HTTPS & WAF', icon: '🛡️', stack: 'AWS WAF, CloudFront, SSL/TLS' },
        { title: 'Performed Vulnerability Scanning and Mitigation', icon: '🔍', stack: 'Nmap, Nessus, OpenVAS' },
        { title: 'Implemented SIEM for Threat Detection', icon: '📊', stack: 'Splunk, ELK Stack, Graylog' },
        { title: 'Built Incident Response Playbooks', icon: '🚨', stack: 'SOAR, Python, Post-Incident Analysis' },
        { title: 'Automated Security Policies with IaC', icon: '🧾', stack: 'Terraform, AWS Config, Azure Policy' },
        { title: 'Configured IDS/IPS Systems', icon: '🧱', stack: 'Snort, Suricata, Zeek' },
        { title: 'Managed Security in Containerized Environments', icon: '🐳', stack: 'Docker Bench, Kube-bench, Falco' },
        { title: 'Developed Threat Intelligence Dashboard', icon: '📈', stack: 'MISP, ThreatConnect, Kibana' },
        { title: 'Created Secure Authentication Mechanisms', icon: '🔐', stack: 'OAuth2, MFA, SAML, JWT' },
        { title: 'Hardened Operating Systems and Servers', icon: '🛠️', stack: 'CIS Benchmarks, Ansible, Linux Hardening' },
        { title: 'Implemented Network Segmentation & Firewalls', icon: '🌐', stack: 'pfSense, VLANs, AWS Security Groups' },
        { title: 'Conducted Penetration Testing Exercises', icon: '🧪', stack: 'Metasploit, Burp Suite, Kali Linux' },
        { title: 'Designed Data Loss Prevention Strategies', icon: '📦', stack: 'Symantec DLP, Email Filtering, File Integrity Monitoring' },
        { title: 'Built Encrypted Backup & Disaster Recovery Plans', icon: '💾', stack: 'AES-256, AWS S3, Glacier, RTO/RPO' },
        { title: 'Monitored Logs for Anomalies & Threats', icon: '📝', stack: 'Fluentd, CloudWatch Logs, Syslog' },
        { title: 'Enforced Access Control & Privilege Management', icon: '🛂', stack: 'RBAC, IAM, Azure AD, Okta' },
        { title: 'Trained Teams on Cybersecurity Awareness', icon: '🎓', stack: 'Phishing Simulations, Security Workshops' },
        { title: 'Performed Cloud Security Posture Assessments', icon: '🔎', stack: 'ScoutSuite, Prowler, Azure Security Center' },
        { title: 'Configured Endpoint Detection & Response (EDR)', icon: '💻', stack: 'CrowdStrike, Microsoft Defender, SentinelOne' },
        { title: 'Developed Secure APIs and Token-Based Access', icon: '🧩', stack: 'API Gateway, OAuth2, JWT, HMAC' },
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
                className="btn btn-outline-light d-md-none position-fixed top-0 start-0 m-3 sidebar-toggle-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <i className="fas fa-bars"></i>
            </button>

           <main className="flex-grow-1 p-3" style={{ overflowY: 'auto' }}>
                <header
                    className="d-flex justify-content-between align-items-center mb-4"
                    style={{ borderBottom: '1px solid', paddingLeft: '50px', paddingBottom: '10px' }}
                >
                    <h1 className="fw-bold m-0">💡 Project Ideas</h1>

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

                <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                        <div
                            className="card h-100 text-white"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
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

export default CyberSecurityIdeas;