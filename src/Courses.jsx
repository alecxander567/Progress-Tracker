import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Courses() {
    return (
       <div
          className="position-relative min-vh-100 d-flex flex-column overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #2e003e, #12002d)',
            color: 'white'
          }}
         >  
           <div className="tech-icons">
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-icon" style={{ top: '10%', left: '15%' }} alt="HTML" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-icon" style={{ top: '40%', left: '70%' }} alt="CSS" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-icon" style={{ top: '70%', left: '25%' }} alt="JavaScript" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon" style={{ top: '20%', left: '80%' }} alt="React" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="tech-icon" style={{ top: '30%', left: '40%' }} alt="Bootstrap" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="tech-icon" style={{ top: '60%', left: '55%' }} alt="Node.js" />
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="tech-icon" style={{ top: '50%', left: '10%' }} alt="GitHub" />
           </div>
           <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: 'linear-gradient(135deg, #ff00cc, #3333ff, #00ffee)',
                backgroundSize: '400% 400%',
                animation: 'waveBG 5s ease infinite',
                zIndex: 0,
                opacity: 0.25,
                boxShadow: '0 0 60px rgba(255, 255, 255, 0.2) inset'
              }}
            />
            <div className="container position-relative z-1 py-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="display-4 fw-bold d-flex align-items-center gap-2">
                  <i className="fas fa-book-open text-info"></i> Courses
                </h1>
                <button
                  className="btn btn-outline-light"
                  onClick={() => window.location.href = '/'}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#ffffff10'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  ← 
                </button>
              </div>
              <p className="mb-4">Pick your career path. Watch and learn. Build your project</p>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="p-4 bg-dark rounded shadow">
                  <h4 className="text-info mb-3">Software Development</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/FrontEndPage" className="course-link">🔹 Front-End Development</Link></li>
                    <li><Link to="/BackEndPage" className="course-link">🔹 Back-End Development</Link></li>
                    <li><Link to="/FullStackPage" className="course-link">🔹 Full-Stack Development</Link></li>
                    <li><Link to="/MobilePage" className="course-link">🔹 Mobile App Development</Link></li>
                    <li><Link to="/GamePage" className="course-link">🔹 Game Development</Link></li>
                   </ul>
                </div>
               </div>
              <div className="col-md-6 mb-4">
                <div className="p-4 bg-dark rounded shadow">
                  <h4 className="text-info mb-3">Tech Career Paths</h4>
                  <ul className="list-unstyled">
                    <li><Link to="/DataAnalystPage" className="course-link">🔹 Data Analyst</Link></li>
                    <li><Link to="/CloudPage" className="course-link">🔹 Cloud Engineer</Link></li>
                    <li><Link to="/DevOpsPage" className="course-link">🔹 DevOps Engineer</Link></li>
                    <li><Link to="/CyberSecurityPage" className="course-link">🔹 Cybersecurity Specialist</Link></li>
                    <li><Link to="/AIMLPage" className="course-link">🔹 AI/ML Engineer</Link></li>
                  </ul>
                 </div>
                </div>
               </div>
              </div>

              <style>{` 
                @keyframes waveBG {
                  0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  .course-link {
                    display: inline-block;
                    padding: 8px 12px;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 6px;
                    transition: background 0.3s ease, transform 0.2s ease;
                  }
                  .course-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateX(5px);
                    color: #00ffff;
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

export default Courses;