import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';
import FrontEndPage from './FrontEndPage.jsx';
import FrontEndCourses from './FrontEndCourses.jsx';
import Achievements from './Achievements.jsx';
import Settings from './Settings.jsx';
import Terms from './Terms.jsx';

function App() {
   const [isFirstVisit, setIsFirstVisit] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    const savedCourse = localStorage.getItem('selectedCourse');

    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    } else {
      setIsFirstVisit(false);
    }

    if (savedCourse) {
      setSelectedCourse(savedCourse);
    }
  }, []);

  if (isFirstVisit === null) {
    return <div>Loading...</div>; 
  }
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isFirstVisit ? (
              <Landingpage
                onCourseSelect={(course) => {
                  setSelectedCourse(course);
                  localStorage.setItem('selectedCourse', course);
                }}
              />
            ) : selectedCourse ? (
              <Navigate to={`/${selectedCourse}`} replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path='/landing' element={<Landingpage />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/FrontEndPage' element={<FrontEndPage />} />
        <Route path='/FrontEndCourses' element={<FrontEndCourses />} />
        <Route path='/Achievements' element={<Achievements></Achievements>}></Route>
        <Route path='/Settings' element={<Settings></Settings>}></Route>
        <Route path='/Terms' element={<Terms></Terms>}></Route>
      </Routes>
    </Router>
  )
}

export default App