import { Simple } from "./Simple"
import WelcomeScene from "./components/WelcomeScene"
import GameStart from "./components/GameStart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerWelcomeScene from "./components/PlayerWelcomeScene";


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<GameStart />} />
      <Route path="/welcome" element={<WelcomeScene />} />
      <Route path="/player-welcome" element={<PlayerWelcomeScene />} />
    </Routes>
    </Router>
  )
}