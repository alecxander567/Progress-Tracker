import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function FrontEndPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const boxTitles = ['My Course', 'Streak', 'Achievements', 'Status'];
  const [streak, setStreak] = useState(42); 
  const [achievements, setAchievements] = useState(5);
  const [status, setStatus] = useState('Ongoing');
  const boxGradients = [
  'linear-gradient(135deg, #ff6b6b, #f06595)',      
  'linear-gradient(135deg, #4ecdc4, #556270)',      
  'linear-gradient(135deg, #a18cd1, #fbc2eb)',      
  'linear-gradient(135deg, #ffe66d, #ff6f91)',     
  ];
  const boxIcons = [
    "fas fa-tachometer-alt",
    "fas fa-fire",
    "fas fa-award",
    "fas fa-info-circle",
  ];

  const toggleStatus = () => {
    setStatus(prev => (prev === 'Ongoing' ? 'Completed' : 'Ongoing'));
  };

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
            <a className="nav-link text-white" href="#">
              📈 Progress
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              📚 Courses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              🏆 Achievements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              👤 Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              ⚙️ Settings
            </a>
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
          <h1 className="fw-bold m-0">🚀 Front-End Roadmap</h1>

          <div className="d-flex gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ fontSize: '1.5rem' }}>
              <i className="fab fa-reddit"></i>
            </a>
          </div>
        </header>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 mb-4">
          {boxTitles.map((title, index) => (
            <div key={index} className="col">
              <div
                className="rounded p-3 text-white text-center h-100 d-flex flex-column align-items-center justify-content-center"
                style={{
                  background: boxGradients[index],
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  minHeight: '100px',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className={boxIcons[index]}></i>
                  <span>{title}</span>
                </div>

                {index === 0 && (
                  <div style={{ fontWeight: 'normal', fontSize: '0.9rem' }}>
                    Front End Development
                  </div>
                )}

                {index === 1 && (
                  <div style={{ fontWeight: 'normal', fontSize: '1.4rem' }}>{streak}</div>
                )}

                {index === 2 && (
                  <div style={{ fontWeight: 'normal', fontSize: '1.4rem' }}>{achievements}</div>
                )}

                {index === 3 && (
                  <div
                    style={{ fontWeight: 'normal', fontSize: '1.2rem', cursor: 'pointer' }}
                    onClick={toggleStatus}
                    title="Click to toggle status"
                  >
                    {status}
                  </div>
                )}
              </div>
            </div>
          ))}
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
              <i className="fas fa-history"></i> Recently Watched
            </h3>
            <p>Continue watching...</p>
            {[...Array(20)].map((_, i) => (
            <p key={i}>Watched video #{i + 1}</p>
            ))}
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
              <i className="fas fa-tachometer-alt"></i> Your current progress
            </h3>
          {[
            { name: 'HTML5 Fundamentals', progress: 100 },
            { name: 'CSS3 and Responsive Design', progress: 80 },
            { name: 'JavaScript Basics', progress: 65 },
            { name: 'Advanced JavaScript (ES6+)', progress: 40 },
            { name: 'React.js Fundamentals', progress: 25 },
            { name: 'State Management (Redux, Context API)', progress: 15 },
            { name: 'CSS Frameworks (Bootstrap, Tailwind CSS)', progress: 50 },
            { name: 'Web Performance Optimization', progress: 10 },
            { name: 'Version Control with Git', progress: 70 },
            { name: 'Testing and Debugging', progress: 5 },
          ].map(({ name, progress }) => (
          <div key={name} className="mb-3">
            <label className="form-label">{name}</label>
              <div className="progress" style={{ height: '20px' }}>
                <div
                  className={`progress-bar ${
                    progress === 100 ? 'bg-success' : 'bg-info'
                  }`}
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                {progress === 100 ? 'Completed' : `${progress}%`}
              </div>
            </div>
          </div>
          ))}
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
      `}</style>
    </div>
  );
}

export default FrontEndPage;
