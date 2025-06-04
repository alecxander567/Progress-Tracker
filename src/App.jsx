import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './landingpage.jsx';
import Courses from './Courses.jsx';
import FrontEndPage from './FrontEndPage.jsx';
import FrontEndCourses from './FrontEndCourses.jsx';
import BackEndPage from './BackEndPage.jsx';
import DataAnalystPage from './DataAnalystPage.jsx';
import FullStackPage from './FullStackPage.jsx';
import MobilePage from './MobilePage.jsx';
import BackEndCourses from './BackEndCourses.jsx';
import DataAnalystCourses from './DataAnalystCourses.jsx';
import FullStackCourses from './FullStackCourses.jsx';
import MobileCourses from './MobileCourses.jsx';
import Achievements from './Achievements.jsx';
import BackEndIdeas from './BackEndIdeas.jsx';
import DataProjectIdeas from './DataProjectIdeas.jsx';
import FullStackIdeas from './FullStackIdeas.jsx';
import MobileIdeas from './MobileIdeas.jsx';
import Settings from './Settings.jsx';
import Terms from './Terms.jsx';
import BackEndTerms from './BackEndTerms.jsx';
import DataAnalystTerms from './DataAnalystTerms.jsx';
import FullStackTerms from './FullStackTerms.jsx';
import MobileTerms from './MobileTerms.jsx';
import BackEndSettings from './BackEndSettings.jsx';
import DataAnalystSettings from './DataAnalystSettings.jsx';
import FullStackSettings from './FullStackSettings.jsx';
import MobileSettings from './MobileSettings.jsx';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/FrontEndPage' element={<FrontEndPage />} />
        <Route path='/BackEndPage' element={<BackEndPage />} />
        <Route path='/DataAnalystPage' element={<DataAnalystPage />} />
        <Route path='/FullStackPage' element={<FullStackPage />} />
        <Route path='/MobilePage' element={<MobilePage />} />
        <Route path='/FrontEndCourses' element={<FrontEndCourses />} />
        <Route path='/BackEndCourses' element={<BackEndCourses />} />
        <Route path='/DataAnalystCourses' element={<DataAnalystCourses />} />
        <Route path='/FullStackCourses' element={<FullStackCourses />} />
        <Route path='/MobileCourses' element={<MobileCourses />} />
        <Route path='/Achievements' element={<Achievements></Achievements>}></Route>
        <Route path='/BackEndIdeas' element={<BackEndIdeas></BackEndIdeas>}></Route>
        <Route path='/DataProjectIdeas' element={<DataProjectIdeas></DataProjectIdeas>}></Route>
        <Route path='/FullStackIdeas' element={<FullStackIdeas></FullStackIdeas>}></Route>
        <Route path='/MobileIdeas' element={<MobileIdeas></MobileIdeas>}></Route>
        <Route path='/Terms' element={<Terms></Terms>}></Route>
        <Route path='/BackEndTerms' element={<BackEndTerms></BackEndTerms>}></Route>
        <Route path='/DataAnalystTerms' element={<DataAnalystTerms></DataAnalystTerms>}></Route>
        <Route path='/FullStackTerms' element={<FullStackTerms></FullStackTerms>}></Route>
        <Route path='/MobileTerms' element={<MobileTerms></MobileTerms>}></Route>
        <Route path='/Settings' element={<Settings></Settings>}></Route>
        <Route path='/BackEndSettings' element={<BackEndSettings></BackEndSettings>}></Route>
        <Route path='/DataAnalystSettings' element={<DataAnalystSettings></DataAnalystSettings>}></Route>
        <Route path='/FullStackSettings' element={<FullStackSettings></FullStackSettings>}></Route>
        <Route path='/MobileSettings' element={<MobileSettings></MobileSettings>}></Route>
      </Routes>
    </Router>
  )
}

export default App