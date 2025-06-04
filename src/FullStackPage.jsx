import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function FullStackPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
  {
    title: 'Node.js 22 Released: Better Performance and APIs',
    url: 'https://nodejs.org/en/blog/release/v22.0.0',
    description: 'Node.js 22 improves startup time, adds web platform APIs, and enhances fetch support.',
    icon: 'node-js',
  },
  {
    title: 'Full Stack Framework Wars: Next.js vs. Remix in 2025',
    url: 'https://dev.to/fullstack/framework-wars-nextjs-vs-remix-2025-abc',
    description: 'A detailed comparison of two leading full stack frameworks in modern web development.',
    icon: 'layer-group',
  },
  {
    title: 'MongoDB Adds Vector Search to Atlas',
    url: 'https://www.mongodb.com/blog/post/introducing-vector-search-mongodb-atlas',
    description: 'MongoDB’s new feature aims to support AI and full stack applications requiring semantic search.',
    icon: 'database',
  },
  {
    title: 'How tRPC is Changing API Development in Full Stack Apps',
    url: 'https://trpc.io/blog/introduction-to-trpc',
    description: 'tRPC allows typesafe APIs without needing a schema, ideal for TypeScript-based stacks.',
    icon: 'exchange-alt',
  },
  {
    title: 'The Rise of Bun: A JavaScript Runtime That’s Fast and Full Stack Friendly',
    url: 'https://bun.sh/blog/bun-v1.0',
    description: 'Bun promises better performance than Node.js and integrates deeply with full stack workflows.',
    icon: 'rocket',
  },
  {
    title: 'Deploy Full Stack Apps with Docker and Kubernetes',
    url: 'https://kubernetes.io/docs/tutorials/',
    description: 'Learn how containerization and orchestration streamline full stack app deployment.',
    icon: 'docker',
  },
  {
    title: 'Authentication in Full Stack Apps: Best Practices in 2025',
    url: 'https://auth0.com/blog/full-stack-authentication-guide/',
    description: 'A comprehensive guide to managing secure and scalable user authentication.',
    icon: 'user-lock',
  },
  {
    title: 'Supabase vs Firebase: Which One is Better for Full Stack Projects?',
    url: 'https://supabase.com/blog/supabase-vs-firebase',
    description: 'A breakdown of key features and use cases for each backend-as-a-service platform.',
    icon: 'fire',
  },
  {
    title: 'Vercel vs Netlify: Hosting for Full Stack Teams',
    url: 'https://vercel.com/blog/vercel-vs-netlify-comparison',
    description: 'Comparing two popular platforms for hosting full stack Jamstack and serverless applications.',
    icon: 'cloud',
  },
  {
    title: 'Building Scalable Full Stack Apps with Microservices',
    url: 'https://microservices.io/patterns/index.html',
    description: 'Explore the architecture patterns behind scalable, modular full stack systems.',
    icon: 'cogs',
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
                <Link to="/FullStackPage" className="nav-link text-white">
                  📈 Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FullStackCourses" className="nav-link text-white">
                  📚 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FullStackIdeas" className="nav-link text-white">
                  💡 Project Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FullStackTerms" className="nav-link text-white">
                  📄 Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/FullStackSettings" className="nav-link text-white">
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
          <h1 className="fw-bold m-0">🚀 Full-Stack Roadmap</h1>

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
      Full-Stack Development
      <div className="tech-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-icon" style={{ position: 'absolute', top: '10%', left: '15%', width: '30px' }} alt="HTML" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-icon" style={{ position: 'absolute', top: '40%', left: '70%', width: '30px' }} alt="CSS" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-icon" style={{ position: 'absolute', top: '70%', left: '25%', width: '30px' }} alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon" style={{ position: 'absolute', top: '20%', left: '80%', width: '30px' }} alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="tech-icon" style={{ position: 'absolute', top: '30%', left: '40%', width: '30px' }} alt="Node.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="tech-icon" style={{ position: 'absolute', top: '60%', left: '55%', width: '30px' }} alt="Express.js" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="tech-icon" style={{ position: 'absolute', top: '50%', left: '10%', width: '30px' }} alt="MongoDB" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="tech-icon" style={{ position: 'absolute', top: '35%', left: '85%', width: '30px' }} alt="Git" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="tech-icon" style={{ position: 'absolute', top: '75%', left: '65%', width: '30px' }} alt="Docker" />
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
              <i className="fas fa-newspaper text-info"></i> Full-Stack Tech News
            </h3>
            <p>Stay updated with the latest trends in Full-Stack development:</p>
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
                <i className="fas fa-layer-group text-info"></i> Full Stack Focus Breakdown
            </h3>
            <p>Technologies and skills to focus on:</p>
            <ul className="list-unstyled">
            {[
                { tech: "HTML, CSS & JavaScript", percentage: 90 },
                { tech: "React (Front-End Framework)", percentage: 80 },
                { tech: "Node.js & Express.js (Back-End)", percentage: 75 },
                { tech: "MongoDB / SQL (Databases)", percentage: 70 },
                { tech: "RESTful APIs & JSON", percentage: 65 },
                { tech: "Authentication & Authorization", percentage: 60 },
                { tech: "Git & GitHub (Version Control)", percentage: 55 },
                { tech: "Deployment (Netlify, Vercel, Heroku)", percentage: 50 },
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

export default FullStackPage;
