import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function GamePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
    {
      title:
        "Unity 2025 LTS Released: Major Improvements to Performance and UI Tools",
      url: "https://unity.com/releases/editor/whats-new/2025-lts",
      description:
        "Unity’s 2025 LTS brings better rendering, faster workflows, and improved UI Toolkit for game devs.",
      icon: "gamepad",
    },
    {
      title: "Unreal Engine 5.4: Nanite and Lumen Upgrades Boost Realism",
      url: "https://www.unrealengine.com/en-US/blog/unreal-engine-5-4-release",
      description:
        "New features in UE5.4 enhance real-time global illumination and virtualized geometry.",
      icon: "cubes",
    },
    {
      title: "Godot Engine 4.3: The Open Source Challenger Keeps Growing",
      url: "https://godotengine.org/article/godot-4-3-release/",
      description:
        "Godot’s latest version includes Vulkan updates, better 3D tools, and multiplayer support.",
      icon: "cube",
    },
    {
      title: "Blender for Game Dev: New Game Asset Tools in Version 4.0",
      url: "https://www.blender.org/download/releases/4-0/",
      description:
        "Blender 4.0 introduces new asset manager tools and improved texture baking for game artists.",
      icon: "paint-brush",
    },
    {
      title: "Top 10 Game Engines for Beginners in 2025",
      url: "https://gamedeveloper.com/engines/top-10-game-engines-for-beginners-2025",
      description:
        "A beginner-friendly roundup of popular game engines and what makes each one unique.",
      icon: "star",
    },
    {
      title: "From Indie to AAA: Game Publishing Trends to Watch",
      url: "https://gamasutra.com/article/indie-to-aaa-trends",
      description:
        "Explore how indie developers are breaking into the mainstream and what AAA studios are adopting from them.",
      icon: "chart-line",
    },
    {
      title: "Multiplayer Game Development: Essential Tools and Libraries",
      url: "https://developer.mozilla.org/en-US/docs/Games/Multiplayer",
      description:
        "A guide to building online multiplayer games using WebSockets, Netcode, and more.",
      icon: "users",
    },
    {
      title: "How to Monetize Your Game in 2025: Ads, DLC, and Subscriptions",
      url: "https://www.gamedeveloper.com/business/how-to-monetize-your-game",
      description:
        "An in-depth look at modern monetization models for mobile and PC game developers.",
      icon: "dollar-sign",
    },
    {
      title: "AI in Game Development: Procedural Worlds and Smarter NPCs",
      url: "https://towardsdatascience.com/ai-in-games-npcs-and-world-generation",
      description:
        "Learn how AI is changing the way developers build intelligent and immersive game worlds.",
      icon: "robot",
    },
    {
      title: "Optimizing Game Performance for Mobile Devices",
      url: "https://developer.android.com/games/performance",
      description:
        "Techniques for ensuring smooth framerate and battery efficiency in mobile games.",
      icon: "mobile-alt",
    },
  ];

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
            <Link to="/GamePage" className="nav-link text-white">
              📈 Progress
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/GameCourses" className="nav-link text-white">
              📚 Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/GameIdeas" className="nav-link text-white">
              💡 Project Ideas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/GameTerms" className="nav-link text-white">
              📄 Terms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/GameSettings" className="nav-link text-white">
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
          <h1 className="fw-bold m-0">🚀 Game Development Roadmap</h1>

          <div className="d-flex gap-2">
            <a
              href="https://github.com/alecxander567/Progress-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/alec.xander.espaldon.2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.reddit.com/user/Historical_Rub8018/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            >
              <i className="fab fa-reddit"></i>
            </a>
          </div>
        </header>

        <div className="row mb-4">
          <div className="col">
            <div
              className="rounded p-4 text-white d-flex flex-column justify-content-center position-relative"
              style={{
                background: "linear-gradient(135deg, #1b0036, #3c096c)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                fontWeight: "bold",
                fontSize: "1.5rem",
                minHeight: "200px",
                textAlign: "left",
                overflow: "hidden",
              }}
            >
              <h3>My Career Path : </h3>
              Game Development
              <div className="tech-icons">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    width: "30px",
                  }}
                  alt="Unity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "70%",
                    width: "30px",
                  }}
                  alt="Unreal Engine"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    left: "25%",
                    width: "30px",
                  }}
                  alt="Blender"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "80%",
                    width: "30px",
                  }}
                  alt="Godot"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "40%",
                    width: "30px",
                  }}
                  alt="C#"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "55%",
                    width: "30px",
                  }}
                  alt="C++"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    width: "30px",
                  }}
                  alt="Python"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: "85%",
                    width: "30px",
                  }}
                  alt="Git"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                  className="tech-icon"
                  style={{
                    position: "absolute",
                    top: "75%",
                    left: "65%",
                    width: "30px",
                  }}
                  alt="Visual Studio"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-md-row gap-3"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <div
            className="p-3 rounded flex-grow-1"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "white",
              maxHeight: "340px",
              overflowY: "auto",
              minWidth: "0",
            }}
          >
            <h3 className="d-flex align-items-center gap-2">
              <i className="fas fa-newspaper text-info"></i> Game Development
              Tech News
            </h3>
            <p>Stay updated with the latest trends in Game development:</p>
            <ul className="list-unstyled">
              {NEWS.map((newsItem, i) => (
                <li
                  key={i}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                    padding: "8px 12px",
                    color: "white",
                    marginBottom: "12px",
                  }}
                >
                  <a
                    href={newsItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#00ffff", textDecoration: "underline" }}
                    className="d-flex align-items-center gap-2"
                  >
                    <i className={`fas fa-${newsItem.icon} text-warning`}></i>
                    <span>{newsItem.title}</span>
                  </a>
                  <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>
                    {newsItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-3 rounded flex-grow-1"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "white",
              maxHeight: "340px",
              overflowY: "auto",
              minWidth: "0",
            }}
          >
            <h3 className="d-flex align-items-center gap-2">
              <i className="fas fa-gamepad text-info"></i> Game Development
              Focus Breakdown
            </h3>
            <p>Technologies and skills to focus on:</p>
            <ul className="list-unstyled">
              {[
                { tech: "Unity Game Engine (C#)", percentage: 90 },
                { tech: "Unreal Engine (C++)", percentage: 85 },
                { tech: "Godot Engine (GDScript / C#)", percentage: 75 },
                { tech: "3D Modeling with Blender", percentage: 70 },
                { tech: "Animation & Rigging", percentage: 65 },
                { tech: "Physics & Game Mechanics", percentage: 60 },
                { tech: "Version Control (Git & GitHub)", percentage: 55 },
                { tech: "Sound Design & Music Integration", percentage: 50 },
              ].map((item, index) => (
                <li key={index} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <strong>{item.tech}</strong>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
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

      <style>
        {`
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

export default GamePage;
