import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';
import FrontEndPage from './FrontEndPage.jsx';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Landingpage></Landingpage>}></Route>
          <Route path='/Courses' element={<Courses></Courses>}></Route>
          <Route path='/FrontEndCourse' element={<FrontEndPage></FrontEndPage>}></Route>
       </Routes>
    </Router>
  )
}

export default App
