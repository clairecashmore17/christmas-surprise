import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Highscore from "./pages/Highscore";
import Characters from "./pages/Characters";
import Town from "./gamePages/Town";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/highscores" element={<Highscore />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route path="/town" element={<Town />} />
      </Routes>
    </Router>
  );
}

export default App;
