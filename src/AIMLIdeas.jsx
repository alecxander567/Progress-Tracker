import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function BackEndIdeas() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

   const projects = [
        { title: 'Built a Spam Classifier using Naive Bayes', icon: '📨', stack: 'Python, Scikit-learn, Pandas' },
        { title: 'Developed a Real-time Object Detection App', icon: '🎯', stack: 'YOLOv5, OpenCV, PyTorch' },
        { title: 'Created a Movie Recommendation System', icon: '🎬', stack: 'Python, Cosine Similarity, Streamlit' },
        { title: 'Trained a Sentiment Analysis Model', icon: '😊', stack: 'NLTK, Scikit-learn, Jupyter' },
        { title: 'Built an Image Classifier with CNNs', icon: '🖼️', stack: 'TensorFlow, Keras, Python' },
        { title: 'Implemented a Chatbot with NLP', icon: '🤖', stack: 'Rasa, SpaCy, Flask' },
        { title: 'Designed a Stock Price Predictor', icon: '📈', stack: 'LSTM, Keras, Yahoo Finance API' },
        { title: 'Created a Handwritten Digit Recognizer', icon: '✍️', stack: 'MNIST, TensorFlow, Python' },
        { title: 'Trained a Face Recognition System', icon: '😃', stack: 'OpenCV, Dlib, Python' },
        { title: 'Built a News Categorization Model', icon: '🗞️', stack: 'TF-IDF, Logistic Regression, Python' },
        { title: 'Developed a Machine Learning API', icon: '📡', stack: 'Flask, Pickle, Scikit-learn' },
        { title: 'Built a Data Pipeline for ML Models', icon: '🔄', stack: 'Airflow, Python, Docker' },
        { title: 'Implemented a Model Deployment Pipeline', icon: '🚀', stack: 'FastAPI, Docker, Heroku' },
        { title: 'Visualized Data for Exploratory Analysis', icon: '📊', stack: 'Matplotlib, Seaborn, Pandas' },
        { title: 'Performed Feature Engineering on Tabular Data', icon: '🛠️', stack: 'Pandas, Scikit-learn, Python' },
        { title: 'Designed a Recommendation Engine with ML', icon: '🧠', stack: 'Collaborative Filtering, Python' },
        { title: 'Used Transfer Learning for Small Datasets', icon: '🔁', stack: 'ResNet, TensorFlow, Keras' },
        { title: 'Trained a Language Model with Transformers', icon: '📚', stack: 'Hugging Face, Transformers, PyTorch' },
        { title: 'Created a Time Series Forecasting Model', icon: '📅', stack: 'ARIMA, Prophet, Pandas' },
        { title: 'Built an AI-powered Resume Screener', icon: '📄', stack: 'NLP, Spacy, Flask' },
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

export default BackEndIdeas;