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

  const NEWS = [
  {
    title: 'React 18 Released: What You Need to Know',
    url: 'https://reactjs.org/blog/2022/03/29/react-v18.html',
    description: 'React 18 introduces concurrent features and improvements to Suspense.',
    icon: 'react',
  },
  {
    title: 'CSS Container Queries Are Now Supported',
    url: 'https://css-tricks.com/css-container-queries/',
    description: 'Container Queries allow styling based on parent size instead of viewport size.',
    icon: 'css3-alt',
  },
  {
    title: 'TypeScript 5.0 is Here with New Features',
    url: 'https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/',
    description: 'The latest version adds improved type inference and performance boosts.',
    icon: 'code',
  },
  {
    title: 'Vite 4 Released — Faster Build Tool for Front-End',
    url: 'https://vitejs.dev/guide/',
    description: 'Vite 4 continues to improve build speed and plugin support for modern web projects.',
    icon: 'bolt',
  },
  {
    title: 'Using WebAssembly for Front-End Performance Boosts',
    url: 'https://web.dev/wasm/',
    description: 'Learn how WebAssembly can help speed up compute-heavy tasks in the browser.',
    icon: 'cubes',
  },
  {
    title: 'Next.js 14 Brings Server Components to the Forefront',
    url: 'https://nextjs.org/blog/next-14',
    description: 'Next.js 14 introduces new optimizations and easier server components support.',
    icon: 'server',
  },
  {
    title: 'Tailwind CSS 3.3 Released with New Utilities',
    url: 'https://tailwindcss.com/blog/tailwindcss-v3-3',
    description: 'Utility-first CSS framework adds new features to speed up UI development.',
    icon: 'wind',
  },
  {
    title: 'Accessibility Best Practices for Front-End Developers',
    url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    description: 'A guide to making your web apps usable for everyone.',
    icon: 'universal-access',
  },
  {
    title: 'Understanding React Server Components',
    url: 'https://reactjs.org/docs/react-server-components.html',
    description: 'A look into React’s new server-side rendering capabilities.',
    icon: 'server',
  },
  {
    title: 'State Management Trends in 2025',
    url: 'https://blog.logrocket.com/state-management-trends-in-2025/',
    description: 'An overview of how front-end state management is evolving.',
    icon: 'project-diagram',
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

  const focusData = [
  { skill: 'HTML/CSS', priority: 100 },
  { skill: 'JavaScript', priority: 90 },
  { skill: 'Responsive Design', priority: 85 },
  { skill: 'DOM Manipulation', priority: 80 },
  { skill: 'Git/GitHub', priority: 75 },
  { skill: 'React/Vue', priority: 70 },
  { skill: 'APIs & Fetching Data', priority: 65 },
  { skill: 'Accessibility (a11y)', priority: 60 },
  { skill: 'Performance Optimization', priority: 55 },
  { skill: 'Testing & Debugging', priority: 50 }
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
            <Link to='/Achievements' className="nav-link text-white">
              🏆 Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/Settings' className="nav-link text-white">
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
              <i className="fas fa-newspaper text-info"></i> Front-End Tech News
            </h3>
            <p>Stay updated with the latest trends in front-end development:</p>
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
              <i className="fas fa-chart-bar text-info"></i> Front-End Focus Breakdown
            </h3>
            <p>Technologies you should focus on:</p>
            <ul className="list-unstyled">
            {[
              { tech: "HTML & CSS", percentage: 90 },
              { tech: "JavaScript", percentage: 85 },
              { tech: "React", percentage: 70 },
              { tech: "Bootstrap/Tailwind", percentage: 60 },
              { tech: "Version Control (Git)", percentage: 50 },
              { tech: "APIs/Fetch", percentage: 45 },
              { tech: "Testing/Debugging", percentage: 40 },
              { tech: "Web Performance", percentage: 35 },
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
    `}
    </style>
  </div>
  );
}

export default FrontEndPage;
