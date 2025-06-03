import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';
import FrontEndPage from './FrontEndPage.jsx';
import FrontEndCourses from './FrontEndCourses.jsx';
import Achievements from './Achievements.jsx';
import Settings from './Settings.jsx';
import Terms from './Terms.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/FrontEndPage' element={<FrontEndPage />} />
        <Route path='/FrontEndCourses' element={<FrontEndCourses />} />
        <Route path='/Achievements' element={<Achievements></Achievements>}></Route>
        <Route path='/Terms' element={<Terms></Terms>}></Route>
        <Route path='/Settings' element={<Settings></Settings>}></Route>
      </Routes>
    </Router>
  )
}

export default App