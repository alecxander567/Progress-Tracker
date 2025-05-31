import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<Landingpage></Landingpage>}></Route>
          <Route path='/Courses' element={<Courses></Courses>}></Route>
       </Routes>
    </Router>
  )
}

export default App
