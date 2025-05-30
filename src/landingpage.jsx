import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dev from './assets/dev.png'

function Landingpage() {
    return(
    <div className="position-relative min-vh-100 d-flex flex-column overflow-hidden" style={{ background: 'linear-gradient(to bottom, #2e003e, #12002d)', color: 'white' }}>
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

      {/* Page Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="#" style={{ fontWeight: '900' }}>Progress Tracker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="py-5 d-flex flex-column align-items-center justify-content-center text-center">
          <div className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="tech-icon" style={{ top: '10%', left: '15%' }} alt="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="tech-icon" style={{ top: '40%', left: '70%' }} alt="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="tech-icon" style={{ top: '70%', left: '25%' }} alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon" style={{ top: '20%', left: '80%' }} alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="tech-icon" style={{ top: '30%', left: '40%' }} alt="Bootstrap" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="tech-icon" style={{ top: '60%', left: '55%' }} alt="Node.js" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="tech-icon" style={{ top: '50%', left: '10%' }} alt="GitHub" />
          </div>
          <img src={Dev} alt="Logo" className="mb-4" />
          <div className="container">
            <h1 className="display-4" style={{ fontWeight: '900' }}>Progress Tracker</h1>
            <p className="lead">Track your goals and stay motivated every day</p>
            <a href="#" className="btn mt-3 shadow-lg" style={{ background: 'linear-gradient(to left, #4b0082, #8a2be2)', color: 'white', padding: '20px 40px', fontWeight: '900', boxShadow: '0 6px #2c004d', borderRadius: '10px', border: 'none', transform: 'translateY(0)', transition: 'transform 0.2s ease-in-out' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  Get Started
            </a>
          </div>
        </header>
         <main className="flex-fill text-center">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2>Stay on Track</h2>
                <p>
                  Our app helps you monitor your daily progress, set targets, and keep yourself accountable.
                  Whether it's learning, fitness, or personal development — we've got you covered.
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-4 mb-4">
                <div className="card text-white h-100 shadow" style={{ background: 'rgb(255, 255, 255, 0.2)'}}>
                  <div className="card-body">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Career Path" className="mb-3" style={{ width: '40px' }} />
                    <h4 className="card-title">Pick a Career Path</h4>
                    <p className="card-text">Choose from a variety of career goals and set your focus on what truly matters to you.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card text-white h-100 shadow" style={{ background: 'rgb(255, 255, 255, 0.2)'}}>
                  <div className="card-body">
                    <img src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png" alt="Hands-On Learning" className="mb-3" style={{ width: '40px' }} />
                    <h4 className="card-title">Get Hands-On Learning</h4>
                    <p className="card-text">Engage with practical exercises and real-world projects to sharpen your skills.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card text-white h-100 shadow" style={{ background: 'rgb(255, 255, 255, 0.2)'}}>
                  <div className="card-body">
                    <img src="https://cdn-icons-png.flaticon.com/512/3468/3468371.png" alt="Build Portfolio" className="mb-3" style={{ width: '40px' }} />
                    <h4 className="card-title">Build Your Way Through</h4>
                    <p className="card-text">Track progress and build your portfolio step by step as you achieve milestones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="py-3 text-center">
          <div className="container">
            <small>&copy; {new Date().getFullYear()} Progress Tracker App. All rights reserved.</small>
          </div>
        </footer>
      </div>

      <style>
        {`
          @keyframes waveBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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

export default Landingpage;