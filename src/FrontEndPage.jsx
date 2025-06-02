import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function FrontEndPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const boxTitles = ['My Course', 'Streak', 'Achievements', 'Status'];
  const [streak, setStreak] = useState(0); 
  const [dayCount, setDayCount] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const achievements = Math.min(Math.floor(streak / 5), 10);

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

  const PROJECTS = [
    {
      name: "Build a Personal Portfolio Website",
      guide: `1. Create sections: About, Projects, Contact\n2. Use responsive layout with Flexbox/Grid\n3. Add smooth scrolling and animations`,
      sampleCode: `<section id="about">\n  <h2>About Me</h2>\n  <p>I'm a web developer...</p>\n</section>`
    },
    {
      name: "Create a To-Do List App",
      guide: `1. Add input to enter tasks\n2. Show tasks in a list\n3. Add delete + mark as done options`,
      sampleCode: `const [tasks, setTasks] = useState([]);\n<ul>{tasks.map(t => <li>{t}</li>)}</ul>`
    },
    {
      name: "Build a Simple Blog with React",
      guide: `1. Add post list and post detail views\n2. Use React Router for navigation\n3. Allow users to add new posts`,
      sampleCode: `<Route path="/post/:id" element={<PostDetail />} />`
    },
    {
      name: "Create a Calculator",
      guide: `1. Create buttons for digits and operators\n2. Handle input logic with state\n3. Evaluate expression on equals`,
      sampleCode: `const [result, setResult] = useState("");\n<button onClick={() => setResult(result + "1")}>1</button>`
    },
    {
      name: "Develop a Responsive Landing Page",
      guide: `1. Use CSS Flexbox/Grid\n2. Add navigation bar and hero section\n3. Make it mobile-friendly`,
      sampleCode: `<div className="hero">\n  <h1>Welcome</h1>\n</div>`
    },
  ];

  useEffect(() => {
    const today = new Date().toDateString(); // Format: "Mon Jun 2 2025"
    const lastVisit = localStorage.getItem("lastVisitDate");
    const savedStreak = parseInt(localStorage.getItem("streak") || "0", 10);

    if (!lastVisit) {
      localStorage.setItem("lastVisitDate", today);
      localStorage.setItem("streak", "1");
      setStreak(1);
    } else if (lastVisit !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = new Date(lastVisit).toDateString() === yesterday.toDateString();

      const newStreak = wasYesterday ? savedStreak + 1 : 1;

      localStorage.setItem("lastVisitDate", today);
      localStorage.setItem("streak", newStreak.toString());
      setStreak(newStreak);
    } else {
      setStreak(savedStreak);
    }
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const storedStart = localStorage.getItem('startDate');
    const today = new Date();

    if (!storedStart) {
      localStorage.setItem('startDate', today.toISOString());
      setDayCount(1);
    } else {
      const startDate = new Date(storedStart);
      const diffTime = today.setHours(0,0,0,0) - startDate.setHours(0,0,0,0);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      setDayCount(diffDays);
    }
  }, []);

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
            <Link to="/FrontEndPage" className="nav-link text-white">
              📈 Progress
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/FrontEndCourses" className="nav-link text-white">
              📚 Courses
            </Link>
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
                  <div style={{ fontWeight: 'normal', fontSize: '1.4rem' }}>{`Day ${dayCount}`}</div>
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
              <i className="fas fa-tasks text-info"></i> Project Suggestions
            </h3>
            <p>
              Use what you've learned and build these projects to <br />
              challenge yourself
            </p>
            <p>Suggested projects you can try:</p>
              <ul className="list-unstyled">
              {PROJECTS.map((project, i) => (
                <li
                  key={i}
                  onClick={() => toggleDropdown(i)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                    padding: '8px 12px',
                    color: 'white',
                    cursor: 'pointer',
                    marginBottom: '8px',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-lightbulb text-warning"></i>
                      <span>{project.name}</span>
                    </div>
                    <i className={`fas fa-chevron-${openIndex === i ? 'up' : 'down'}`}></i>
                  </div>
                  {openIndex === i && (
                  <div style={{ marginTop: '8px', fontSize: '0.85rem', whiteSpace: 'pre-wrap' }}>
                    <strong>Steps:</strong> <br />
                    {project.guide}
                    <br />
                    <br />
                    <strong>Sample Code:</strong>
                      <pre style={{ background: '#222', padding: '8px', borderRadius: '4px', overflowX: 'auto' }}>
                      {project.sampleCode}
                    </pre>
                  </div>
                  )}
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
                <i className="fas fa-lightbulb text-info"></i> Learning Tips & Advice
              </h3>
              <p>Just some few advices. Remember consistency is the key : </p>
              <ul className="list-unstyled">
              {[
              "Practice coding daily to build consistency.",
              "Break big problems into small manageable tasks.",
              "Understand the concept before copying code.",
              "Build real projects to apply what you learn.",
              "Read and understand documentation regularly.",
              "Ask questions or search when you're stuck.",
              "Review and refactor your old code often.",
              "Follow developers on GitHub and learn from open-source.",
              "Stay updated with web development trends.",
              "Take breaks to avoid burnout and improve retention."
            ].map((tip, index) => (
              <li
                key={index}
                className="mb-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                  padding: '8px 12px',
                }}
              >
              <div className="d-flex align-items-start gap-2">
                <i className="fas fa-check-circle text-success mt-1"></i>
                  <span>{tip}</span>
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
        .custom-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid white;
          display: inline-block;
          position: relative;
          transition: background 0.2s ease;
        }
        .custom-checkbox.checked {
          background-color: #0dcaf0; /* Bootstrap info color */
          border-color: #0dcaf0;
        }
    `}
    </style>
  </div>
  );
}

export default FrontEndPage;
