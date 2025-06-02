import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';
import FrontEndPage from './FrontEndPage.jsx';
import FrontEndCourses from './FrontEndCourses.jsx';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Landingpage></Landingpage>}></Route>
          <Route path='/Courses' element={<Courses></Courses>}></Route>
          <Route path='/FrontEndPage' element={<FrontEndPage></FrontEndPage>}></Route>
          <Route path='/FrontEndCourses' element={<FrontEndCourses></FrontEndCourses>}></Route>
       </Routes>
    </Router>
  )
}

export default App
