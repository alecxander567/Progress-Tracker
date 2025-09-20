import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function CloudCourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          style={{
            borderBottom: "1px solid",
            paddingLeft: "50px",
            paddingBottom: "10px",
          }}
        >
          <h1 className="fw-bold m-0">
            <i className="fas fa-book-open text-info"></i> Courses
          </h1>
          <div className="d-flex gap-2">
            {[
              {
                href: "https://github.com/alecxander567/Progress-Tracker",
                icon: "fab fa-github",
              },
              {
                href: "https://www.facebook.com/alec.xander.espaldon.2024/",
                icon: "fab fa-facebook",
              },
              {
                href: "https://www.reddit.com/user/Historical_Rub8018/",
                icon: "fab fa-reddit",
              },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                style={{ fontSize: "1.5rem" }}
              >
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </header>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {[
            {
              title: "AWS Full Course",
              description:
                "Master Amazon Web Services and learn how to deploy and scale cloud applications.",
              href: "https://youtu.be/zA8guDqfv40?si=5meoPJopglZ2h4R2",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
              ],
            },
            {
              title: "Google Cloud Platform (GCP) Course",
              description:
                "Get started with GCP and learn core services, storage, and deployment.",
              href: "https://www.youtube.com/live/IUU6OR8yHCc?si=vYB9FrpbMqipEfPe",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
              ],
            },
            {
              title: "Microsoft Azure Tutorial",
              description:
                "Understand Azure cloud platform and create scalable cloud solutions.",
              href: "https://youtu.be/tDuruX7XSac?si=jZ-0nc_vqKqZkoUw",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
              ],
            },
            {
              title: "Terraform for Beginners",
              description:
                "Learn infrastructure as code using Terraform and automate cloud setup.",
              href: "https://youtu.be/SLB_c_ayRMo",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
              ],
            },
            {
              title: "Docker for DevOps",
              description:
                "Use Docker to containerize applications for consistent deployment.",
              href: "https://youtu.be/3c-iBn73dDE",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              ],
            },
            {
              title: "Kubernetes Crash Course",
              description:
                "Master Kubernetes for container orchestration and microservices.",
              href: "https://youtu.be/X48VuDVv0do",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
              ],
            },
            {
              title: "Linux for Cloud Engineers",
              description:
                "Learn essential Linux commands and scripting for managing cloud servers.",
              href: "https://youtu.be/IVquJh3DXUA",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
              ],
            },
            {
              title: "Bash Scripting Full Course",
              description:
                "Automate cloud infrastructure tasks with Bash scripting.",
              href: "https://youtu.be/tK9Oc6AEnR4?si=MzukHfR9o1zRkx20",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
              ],
            },
            {
              title: "CI/CD with Jenkins",
              description:
                "Build continuous integration pipelines using Jenkins for automation.",
              href: "https://www.youtube.com/live/h9K1NnqwUvE?si=bPkLX5zrHQj0W9r1",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
              ],
            },
            {
              title: "Ansible for Beginners",
              description:
                "Learn Ansible for automating configuration and provisioning tasks.",
              href: "https://www.youtube.com/live/9Ua2b06oAr4?si=JUSZknV9LCYghFe2",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
              ],
            },
            {
              title: "Prometheus & Grafana",
              description:
                "Monitor cloud systems using Prometheus and visualize with Grafana.",
              href: "https://youtu.be/h4Sl21AKiDg",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
              ],
            },
            {
              title: "Git & GitHub for DevOps",
              description:
                "Use Git and GitHub for version control and collaboration in cloud projects.",
              href: "https://youtu.be/zTjRZNkhiEU?si=tdITBh8-e9uf5Q51",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              ],
            },
          ].map(({ title, description, href, icons }, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 text-white"
                style={{ backgroundColor: "#1c0033" }}
              >
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

export default CloudCourses;
