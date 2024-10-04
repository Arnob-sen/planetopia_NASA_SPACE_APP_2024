import WelcomeScene from "./components/WelcomeScene"
import GameStart from "./components/GameStart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerWelcomeScene from "./components/PlayerWelcomeScene";
import ReportPage from "./components/ReportPage";
import WatchVideoPage from "./components/WatchVideo";
import NextMissionPage from "./components/NextMissionPage";
// import QuizPage from "./components/QuizPage";
// import AnsPage from "./components/AnsPage";
// import { QuizProvider } from "./context/QuizContext";
import ResultPage from "./components/ResultPage";
import QuizPage from "./components/QuizPage";
export default function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<GameStart />} />
      <Route path="/welcome" element={<WelcomeScene />} />
      <Route path="/player-welcome" element={<PlayerWelcomeScene />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="watch-video" element={<WatchVideoPage/>}/>
      <Route path="next-mission" element={<NextMissionPage/>}/>
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      {/* <Route path="quiz" element={<QuizPage/>}/> */}
      {/* <Route path="answare" element={<AnsPage/>}/> */}
    </Routes>
    </Router>
    
  )
}