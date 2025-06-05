import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function GameIdeas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Created a 2D Platformer Game', icon: '🎮', stack: 'Unity, C#, Photoshop' },
        { title: 'Built a Real-Time Multiplayer Arena', icon: '⚔️', stack: 'Unity, Photon Engine, C#' },
        { title: 'Designed Game UI/UX for Mobile', icon: '📱', stack: 'Unity, Figma, C#' },
        { title: 'Developed AI for Enemy NPCs', icon: '🤖', stack: 'Unity, C#, Behavior Trees' },
        { title: 'Created an RPG Inventory System', icon: '🎒', stack: 'Unity, C#' },
        { title: 'Implemented Game Save/Load System', icon: '💾', stack: 'Unity, JSON, PlayerPrefs' },
        { title: 'Built a Physics-Based Puzzle Game', icon: '🧩', stack: 'Godot, GDScript' },
        { title: 'Integrated In-App Purchases & Ads', icon: '💰', stack: 'Unity, C#, Unity Ads, IAP' },
        { title: 'Developed a Turn-Based Strategy Game', icon: '♟️', stack: 'Godot, GDScript, A* Pathfinding' },
        { title: 'Created a VR Exploration Game', icon: '🕶️', stack: 'Unity, C#, Oculus SDK' },
        { title: 'Implemented Game Sound & Music System', icon: '🎵', stack: 'Unity, FMOD, C#' },
        { title: 'Built a Pixel Art Game', icon: '🎨', stack: 'Godot, Aseprite, GDScript' },
        { title: 'Created a Dialogue System for NPCs', icon: '💬', stack: 'Unity, C#' },
        { title: 'Developed a Leaderboard with Firebase', icon: '🏆', stack: 'Unity, Firebase, C#' },
        { title: 'Made a Game Trailer Video', icon: '📽️', stack: 'Unity Recorder, Premiere Pro' },
        { title: 'Built a Local Multiplayer Game', icon: '🎲', stack: 'Unity, C#, Input System' },
        { title: 'Developed Procedural Map Generation', icon: '🗺️', stack: 'Unity, C#, Perlin Noise' },
        { title: 'Integrated Gamepad Controller Support', icon: '🎮', stack: 'Unity, C#' },
        { title: 'Created Game Menus and Settings', icon: '🛠️', stack: 'Unity UI, C#' },
        { title: 'Published a Game to itch.io', icon: '🚀', stack: 'Unity, WebGL, itch.io' }
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

export default GameIdeas;