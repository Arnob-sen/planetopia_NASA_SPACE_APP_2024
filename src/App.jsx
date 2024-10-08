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
import NextStepsPage from "./components/NextSteps";
import Second_Quiz from "./components/Second_Quiz";
import Second_Result from "./components/Second_result";
import AnotherWatchVideo from "./components/2nd_chapter_watchVideo";
import AnotherChapter from "./components/2nd_chapter_Of_learnig";
import MapPage from "./components/MapPage";
import CharacterCard from "./components/CharacterCard";
import CardPage from "./components/Cardpage";
import Procced_To_next_quiz from "./components/Procced_to_next_quiz";
export default function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<GameStart />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/cardpage" element={<CardPage />} />

      <Route path="/welcome" element={<WelcomeScene />} />
      <Route path="/player-welcome" element={<PlayerWelcomeScene />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="watch-video" element={<WatchVideoPage/>}/>
      <Route path="next-mission" element={<NextMissionPage/>}/>
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/next-steps" element={<NextStepsPage />} />
      <Route path="second-quiz" element={<Second_Quiz/>}/>
      <Route path="second-result" element={<Second_Result/>}/>
      <Route path="/next-chapter" element={<AnotherChapter/>}/>
      <Route path="/another-watch-video" element={<AnotherWatchVideo/>}/>
      <Route path="procced-to-next-quiz" element={<Procced_To_next_quiz/>}/>
      {/* <Route path="quiz" element={<QuizPage/>}/> */}
      {/* <Route path="answare" element={<AnsPage/>}/> */}
    </Routes>
    </Router>
    
  )
}