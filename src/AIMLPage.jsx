import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function AIMLPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NEWS = [
        {
            title: 'PyTorch 2.2 Released with Performance Improvements',
            url: 'https://pytorch.org/blog/pytorch-2.2-release/',
            description: 'PyTorch 2.2 brings compiler enhancements and improved support for dynamic shapes.',
            icon: 'python',
        },
        {
            title: 'TensorFlow 2.15 Adds Better Model Optimization Tools',
            url: 'https://www.tensorflow.org/guide/whats_new',
            description: 'The latest TensorFlow version focuses on Keras usability and model deployment optimization.',
            icon: 'cogs',
        },
        {
            title: 'Scikit-learn 1.4 Released with New Estimators',
            url: 'https://scikit-learn.org/stable/whats_new/v1.4.html',
            description: 'Scikit-learn adds new models, improved outlier detection, and faster training routines.',
            icon: 'chart-line',
        },
        {
            title: 'Transformers Library by Hugging Face Now Supports Vision Models',
            url: 'https://huggingface.co/blog/transformers-vision',
            description: 'Hugging Face expands the Transformers library to include powerful image classification models.',
            icon: 'robot',
        },
        {
            title: 'Google Launches Vertex AI for End-to-End ML',
            url: 'https://cloud.google.com/vertex-ai',
            description: 'Vertex AI simplifies model training, deployment, and monitoring on Google Cloud.',
            icon: 'cloud',
        },
        {
            title: 'NVIDIA’s NeMo Toolkit Now Open Source',
            url: 'https://developer.nvidia.com/nemo',
            description: 'NVIDIA NeMo provides large language model training and speech recognition tools.',
            icon: 'microchip',
        },
        {
            title: 'Understanding Explainable AI (XAI)',
            url: 'https://towardsdatascience.com/explainable-ai-xai-a-beginners-guide-71e0943c5444',
            description: 'A guide to interpretability techniques for machine learning models.',
            icon: 'eye',
        },
        {
            title: 'How to Fine-Tune LLMs with Low-Rank Adaptation (LoRA)',
            url: 'https://lightning.ai/pages/community/tutorial/fine-tune-llm-with-lora/',
            description: 'Learn how to efficiently fine-tune large models using parameter-efficient methods.',
            icon: 'flask',
        },
        {
            title: 'MLflow 2.0 Brings Enhanced Experiment Tracking',
            url: 'https://mlflow.org/news/2023/12/13/mlflow-2-0-release.html',
            description: 'MLflow now includes native support for model evaluation and improved UI.',
            icon: 'beaker',
        },
        {
            title: 'Deploying ML Models with ONNX Runtime',
            url: 'https://onnxruntime.ai/',
            description: 'ONNX Runtime offers cross-platform high-performance model inference capabilities.',
            icon: 'laptop-code',
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
                <Link to="/AIMLPage" className="nav-link text-white">
                  📈 Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AIMLCourses" className="nav-link text-white">
                  📚 Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AIMLIdeas" className="nav-link text-white">
                  💡 Project Ideas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AIMLTerms" className="nav-link text-white">
                  📄 Terms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AIMLSettings" className="nav-link text-white">
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
            <h1 className="fw-bold m-0">🚀 AI/ML Engineer Roadmap</h1>

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
                        AI/ML Engineer
                        <div className="tech-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="tech-icon" style={{ position: 'absolute', top: '10%', left: '15%', width: '30px' }} alt="Python" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="tech-icon" style={{ position: 'absolute', top: '40%', left: '70%', width: '30px' }} alt="TensorFlow" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className="tech-icon" style={{ position: 'absolute', top: '70%', left: '25%', width: '30px' }} alt="PyTorch" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" className="tech-icon" style={{ position: 'absolute', top: '20%', left: '80%', width: '30px' }} alt="Jupyter" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="tech-icon" style={{ position: 'absolute', top: '30%', left: '40%', width: '30px' }} alt="NumPy" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="tech-icon" style={{ position: 'absolute', top: '60%', left: '55%', width: '30px' }} alt="Pandas" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="tech-icon" style={{ position: 'absolute', top: '50%', left: '10%', width: '30px' }} alt="Git" />
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
                        <i className="fas fa-newspaper text-info"></i> AI/ML Tech News
                    </h3>
                    <p>Stay updated with the latest trends in AI/ML Engineering:</p>
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
                <i className="fas fa-brain text-info"></i> AI/ML Focus Breakdown
            </h3>
            <p>Technologies you should focus on:</p>
            <ul className="list-unstyled">
                {[
                { tech: "Python", percentage: 90 },
                { tech: "TensorFlow / PyTorch", percentage: 85 },
                { tech: "Pandas & NumPy", percentage: 80 },
                { tech: "Scikit-learn", percentage: 75 },
                { tech: "Jupyter Notebooks", percentage: 70 },
                { tech: "Model Deployment (Flask, FastAPI)", percentage: 65 },
                { tech: "Data Visualization (Matplotlib, Seaborn)", percentage: 60 },
                { tech: "Version Control (Git)", percentage: 55 },
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

export default AIMLPage;