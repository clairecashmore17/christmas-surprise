import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Highscore from "./pages/Highscore";
import Characters from "./pages/Characters";
import Town from "./gamePages/Town";
import SantasWorkshop from "./gamePages/SantasWorkshop";
import Shack from "./gamePages/ReindeerShack";
import Bakery from "./gamePages/Bakery";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/highscores" element={<Highscore />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route path="/town" element={<Town />} />
        <Route path="/santas-workshop" element={<SantasWorkshop />} />
        <Route path="/reindeer-shack" element={<Shack />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>
    </Router>
  );
}

export default App;
