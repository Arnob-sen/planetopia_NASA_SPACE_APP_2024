import WelcomeScene from "./components/WelcomeScene"
import GameStart from "./components/GameStart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerWelcomeScene from "./components/PlayerWelcomeScene";
import ReportPage from "./components/ReportPage";
import WatchVideoPage from "./components/WatchVideo";
import NextMissionPage from "./components/NextMissionPage";

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
    </Routes>
    </Router>
  )
}