import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function BackEndIdeas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Deployed Scalable Web Application on AWS', icon: '☁️', stack: 'AWS EC2, S3, Route 53' },
        { title: 'Automated Infrastructure with Terraform', icon: '🌍', stack: 'Terraform, AWS, Azure' },
        { title: 'Built CI/CD Pipeline for Cloud Deployments', icon: '🔁', stack: 'GitHub Actions, Jenkins, Docker' },
        { title: 'Configured Kubernetes Cluster for Microservices', icon: '☸️', stack: 'Kubernetes, Helm, Docker' },
        { title: 'Implemented Serverless Functions', icon: '⚡', stack: 'AWS Lambda, API Gateway' },
        { title: 'Designed Cloud Monitoring Dashboard', icon: '📊', stack: 'Prometheus, Grafana, AWS CloudWatch' },
        { title: 'Managed Containerized Apps with Docker', icon: '🐳', stack: 'Docker, AWS ECS, Azure Container Instances' },
        { title: 'Set Up Load Balancing & Auto Scaling', icon: '📈', stack: 'AWS ELB, Auto Scaling Groups' },
        { title: 'Created Infrastructure Automation Scripts', icon: '🤖', stack: 'Ansible, Bash, PowerShell' },
        { title: 'Migrated Legacy App to Cloud Environment', icon: '🚚', stack: 'Azure VM, AWS RDS, S3' },
        { title: 'Implemented Secure Cloud Networking', icon: '🔐', stack: 'VPC, Security Groups, IAM' },
        { title: 'Developed Real-Time Log Aggregation System', icon: '📝', stack: 'ELK Stack, Fluentd, AWS CloudWatch Logs' },
        { title: 'Built Multi-Region Backup & Disaster Recovery', icon: '🛡️', stack: 'AWS S3, Glacier, Route 53' },
        { title: 'Configured CDN for Global Content Delivery', icon: '🌐', stack: 'AWS CloudFront, Azure CDN' },
        { title: 'Created ChatOps Bot for Cloud Management', icon: '🤖', stack: 'Slack API, Python, AWS Lambda' },
        { title: 'Implemented Identity and Access Management', icon: '🛂', stack: 'AWS IAM, Azure AD, Okta' },
        { title: 'Built Cloud Cost Optimization Reports', icon: '💰', stack: 'AWS Cost Explorer, Azure Cost Management' },
        { title: 'Set Up Database as a Service', icon: '🗄️', stack: 'AWS RDS, Azure SQL, Google Cloud SQL' },
        { title: 'Automated Cloud Security Audits', icon: '🔍', stack: 'AWS Config, Terraform, Python' },
        { title: 'Created Dockerized Microservices Architecture', icon: '⚙️', stack: 'Docker, Kubernetes, AWS EKS' },
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
                            <Link to="/CoudSettings" className="nav-link text-white">
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

export default BackEndIdeas;