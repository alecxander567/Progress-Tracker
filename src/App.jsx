import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./landingpage.jsx";
import Courses from "./Courses.jsx";
import FrontEndPage from "./FrontEndPage.jsx";
import FrontEndCourses from "./FrontEndCourses.jsx";
import BackEndPage from "./BackEndPage.jsx";
import DataAnalystPage from "./DataAnalystPage.jsx";
import FullStackPage from "./FullStackPage.jsx";
import MobilePage from "./MobilePage.jsx";
import GamePage from "./GamePage.jsx";
import CloudPage from "./CloudPage.jsx";
import DevOpsPage from "./DevOpsPage.jsx";
import CyberSecurityPage from "./CyberSecurityPage.jsx";
import AIMLPage from "./AIMLPage.jsx";
import BackEndCourses from "./BackEndCourses.jsx";
import DataAnalystCourses from "./DataAnalystCourses.jsx";
import FullStackCourses from "./FullStackCourses.jsx";
import MobileCourses from "./MobileCourses.jsx";
import GameCourses from "./GameCourses.jsx";
import CloudCourses from "./CloudCourses.jsx";
import DevOpsCourses from "./DevOpsCourses.jsx";
import AIMLCourses from "./AIMLCourses.jsx";
import CyberSecurityCourses from "./CyberSecurityCourses.jsx";
import Achievements from "./Achievements.jsx";
import BackEndIdeas from "./BackEndIdeas.jsx";
import DataProjectIdeas from "./DataProjectIdeas.jsx";
import FullStackIdeas from "./FullStackIdeas.jsx";
import MobileIdeas from "./MobileIdeas.jsx";
import GameIdeas from "./GameIdeas.jsx";
import CloudIdeas from "./CloudIdeas.jsx";
import DevOpsIdeas from "./DevOpsIdeas.jsx";
import CyberSecurityIdeas from "./CyberSecurityIdeas.jsx";
import AIMLIdeas from "./AIMLIdeas.jsx";
import Settings from "./Settings.jsx";
import Terms from "./Terms.jsx";
import BackEndTerms from "./BackEndTerms.jsx";
import DataAnalystTerms from "./DataAnalystTerms.jsx";
import FullStackTerms from "./FullStackTerms.jsx";
import MobileTerms from "./MobileTerms.jsx";
import CloudTerms from "./CloudTerms.jsx";
import DevOpsTerms from "./DevOpsTerms.jsx";
import CyberSecurityTerms from "./CyberSecurityTerms.jsx";
import AIMLTerms from "./AIMLTerms.jsx";
import GameTerms from "./GameTerms.jsx";
import BackEndSettings from "./BackEndSettings.jsx";
import DataAnalystSettings from "./DataAnalystSettings.jsx";
import FullStackSettings from "./FullStackSettings.jsx";
import MobileSettings from "./MobileSettings.jsx";
import GameSettings from "./GameSettings.jsx";
import CloudSettings from "./CloudSettings.jsx";
import DevOpsSettings from "./DevOpsSettings.jsx";
import CyberSecuritySettings from "./CyberSecuritySettings.jsx";
import AIMLSettings from "./AIMLSettings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/FrontEndPage" element={<FrontEndPage />} />
        <Route path="/BackEndPage" element={<BackEndPage />} />
        <Route path="/DataAnalystPage" element={<DataAnalystPage />} />
        <Route path="/FullStackPage" element={<FullStackPage />} />
        <Route path="/MobilePage" element={<MobilePage />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/CloudPage" element={<CloudPage />} />
        <Route path="/DevOpsPage" element={<DevOpsPage />} />
        <Route path="/CyberSecurityPage" element={<CyberSecurityPage />} />
        <Route path="/AIMLPage" element={<AIMLPage />} />
        <Route path="/FrontEndCourses" element={<FrontEndCourses />} />
        <Route path="/BackEndCourses" element={<BackEndCourses />} />
        <Route path="/DataAnalystCourses" element={<DataAnalystCourses />} />
        <Route path="/FullStackCourses" element={<FullStackCourses />} />
        <Route path="/MobileCourses" element={<MobileCourses />} />
        <Route path="/GameCourses" element={<GameCourses />} />
        <Route path="/CloudCourses" element={<CloudCourses />} />
        <Route path="/DevOpsCourses" element={<DevOpsCourses />} />
        <Route path="/AIMLCourses" element={<AIMLCourses />} />
        <Route
          path="/CyberSecurityCourses"
          element={<CyberSecurityCourses />}
        />
        <Route
          path="/Achievements"
          element={<Achievements></Achievements>}
        ></Route>
        <Route
          path="/BackEndIdeas"
          element={<BackEndIdeas></BackEndIdeas>}
        ></Route>
        <Route
          path="/DataProjectIdeas"
          element={<DataProjectIdeas></DataProjectIdeas>}
        ></Route>
        <Route
          path="/FullStackIdeas"
          element={<FullStackIdeas></FullStackIdeas>}
        ></Route>
        <Route
          path="/MobileIdeas"
          element={<MobileIdeas></MobileIdeas>}
        ></Route>
        <Route path="/GameIdeas" element={<GameIdeas></GameIdeas>}></Route>
        <Route path="/CloudIdeas" element={<CloudIdeas></CloudIdeas>}></Route>
        <Route
          path="/DevOpsIdeas"
          element={<DevOpsIdeas></DevOpsIdeas>}
        ></Route>
        <Route
          path="/CyberSecurityIdeas"
          element={<CyberSecurityIdeas></CyberSecurityIdeas>}
        ></Route>
        <Route path="/AIMLIdeas" element={<AIMLIdeas></AIMLIdeas>}></Route>
        <Route path="/Terms" element={<Terms></Terms>}></Route>
        <Route
          path="/BackEndTerms"
          element={<BackEndTerms></BackEndTerms>}
        ></Route>
        <Route
          path="/DataAnalystTerms"
          element={<DataAnalystTerms></DataAnalystTerms>}
        ></Route>
        <Route
          path="/FullStackTerms"
          element={<FullStackTerms></FullStackTerms>}
        ></Route>
        <Route
          path="/MobileTerms"
          element={<MobileTerms></MobileTerms>}
        ></Route>
        <Route path="/GameTerms" element={<GameTerms></GameTerms>}></Route>
        <Route path="/CloudTerms" element={<CloudTerms></CloudTerms>}></Route>
        <Route
          path="/DevopsTerms"
          element={<DevOpsTerms></DevOpsTerms>}
        ></Route>
        <Route
          path="/CyberSecurityTerms"
          element={<CyberSecurityTerms></CyberSecurityTerms>}
        ></Route>
        <Route path="/AIMLTerms" element={<AIMLTerms></AIMLTerms>}></Route>
        <Route path="/Settings" element={<Settings></Settings>}></Route>
        <Route
          path="/BackEndSettings"
          element={<BackEndSettings></BackEndSettings>}
        ></Route>
        <Route
          path="/DataAnalystSettings"
          element={<DataAnalystSettings></DataAnalystSettings>}
        ></Route>
        <Route
          path="/FullStackSettings"
          element={<FullStackSettings></FullStackSettings>}
        ></Route>
        <Route
          path="/MobileSettings"
          element={<MobileSettings></MobileSettings>}
        ></Route>
        <Route
          path="/GameSettings"
          element={<GameSettings></GameSettings>}
        ></Route>
        <Route
          path="/CloudSettings"
          element={<CloudSettings></CloudSettings>}
        ></Route>
        <Route
          path="/DevOpsSettings"
          element={<DevOpsSettings></DevOpsSettings>}
        ></Route>
        <Route
          path="/CyberSecuritySettings"
          element={<CyberSecuritySettings></CyberSecuritySettings>}
        ></Route>
        <Route
          path="/AIMLSettings"
          element={<AIMLSettings></AIMLSettings>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
