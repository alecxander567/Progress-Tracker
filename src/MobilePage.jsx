import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function MobilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
    {
        title: 'Flutter 3.22 Released: What’s New',
        url: 'https://docs.flutter.dev/release/whats-new',
        description: 'Flutter 3.22 brings performance improvements, new widgets, and enhanced DevTools.',
        icon: 'mobile-alt',
    },
    {
        title: 'React Native 0.73 Brings TurboModules Enhancements',
        url: 'https://reactnative.dev/blog/',
        description: 'Improved performance, simplified architecture, and better iOS/Android support.',
        icon: 'react',
    },
    {
        title: 'Kotlin Multiplatform Mobile Hits Stable',
        url: 'https://kotlinlang.org/lp/mobile/',
        description: 'Write shared code for Android and iOS using Kotlin Multiplatform Mobile (KMM).',
        icon: 'code',
    },
    {
        title: 'Jetpack Compose for Android Gets Major Update',
        url: 'https://developer.android.com/jetpack/compose',
        description: 'New APIs, performance gains, and improved tooling for modern Android UI.',
        icon: 'android',
    },
    {
        title: 'SwiftUI Enhancements in iOS 18',
        url: 'https://developer.apple.com/xcode/swiftui/',
        description: 'Apple adds powerful layout tools and improved navigation features in SwiftUI.',
        icon: 'apple',
    },
    {
        title: 'Firebase Update Adds GenAI and ML Tools',
        url: 'https://firebase.google.com/blog',
        description: 'Firebase introduces new ML Kit and GenAI features for mobile developers.',
        icon: 'fire',
    },
    {
        title: 'Expo SDK 50 Released for React Native',
        url: 'https://blog.expo.dev/',
        description: 'New modules, bug fixes, and support for the latest React Native version.',
        icon: 'cubes',
    },
    {
        title: 'Xamarin Evolves into .NET MAUI',
        url: 'https://learn.microsoft.com/en-us/dotnet/maui/',
        description: '.NET MAUI lets you build native mobile apps using C# and XAML.',
        icon: 'microsoft',
    },
    {
        title: 'Best Practices for Mobile App Accessibility',
        url: 'https://developer.android.com/guide/topics/ui/accessibility',
        description: 'Make your mobile apps more inclusive with accessibility guidelines.',
        icon: 'universal-access',
    },
    {
        title: '2025 Mobile UI Trends: What to Expect',
        url: 'https://uxdesign.cc/',
        description: 'Explore upcoming trends in mobile UI/UX design for the next generation of apps.',
        icon: 'paint-brush',
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
                <Link to="/MobilePage" className="nav-link text-white">
                  📈 Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MobileCourses" className="nav-link text-white">
                  📚 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MobileIdeas" className="nav-link text-white">
                  💡 Project Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MobileTerms" className="nav-link text-white">
                  📄 Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MobileSettings" className="nav-link text-white">
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
          <h1 className="fw-bold m-0">🚀 Mobile App Roadmap</h1>

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
      Mobile App Development
      <div className="tech-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="tech-icon" style={{ position: 'absolute', top: '10%', left: '15%', width: '30px' }} alt="Flutter" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="tech-icon" style={{ position: 'absolute', top: '40%', left: '70%', width: '30px' }} alt="React Native" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className="tech-icon" style={{ position: 'absolute', top: '70%', left: '25%', width: '30px' }} alt="Kotlin" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="tech-icon" style={{ position: 'absolute', top: '20%', left: '80%', width: '30px' }} alt="Swift" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="tech-icon" style={{ position: 'absolute', top: '30%', left: '40%', width: '30px' }} alt="Firebase" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="tech-icon" style={{ position: 'absolute', top: '60%', left: '55%', width: '30px' }} alt="Android" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="tech-icon" style={{ position: 'absolute', top: '50%', left: '10%', width: '30px' }} alt="GitHub" />
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
              <i className="fas fa-newspaper text-info"></i> Mobile App Development Tech News
            </h3>
            <p>Stay updated with the latest trends in Mobile App development:</p>
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
                    <i className="fas fa-mobile-alt text-info"></i> Mobile App Focus Breakdown
                </h3>
                <p>Technologies you should focus on:</p>
                <ul className="list-unstyled">
                {[
                    { tech: "Flutter", percentage: 90 },
                    { tech: "React Native", percentage: 85 },
                    { tech: "Kotlin (Android)", percentage: 75 },
                    { tech: "Swift (iOS)", percentage: 70 },
                    { tech: "Firebase", percentage: 65 },
                    { tech: "APIs & JSON", percentage: 60 },
                    { tech: "State Management (e.g., Provider, Redux)", percentage: 55 },
                    { tech: "Mobile UI/UX Design", percentage: 50 },
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

export default MobilePage;
