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
import { GameProvider } from "./utils/GlobalState";
import Dialogue from "./components/DialogueBox";
import React, { useState, useEffect } from "react";
import Note from "./gamePages/Note";
import Posters from "./gamePages/Posters";
import Karaoke from "./gamePages/Karoake";
import FinalBoss from "./gamePages/FinalBoss";
import Dance from "./gamePages/Dance";
function App() {
  return (
    <Router>
      <GameProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/highscores" element={<Highscore />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route path="/town" element={<Town />} />
          <Route path="/santas-workshop" element={<SantasWorkshop />} />
          <Route path="/note" element={<Note />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/reindeer-shack" element={<Shack />} />
          <Route path="/bakery" element={<Bakery />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/karaoke" element={<Karaoke />} />
          <Route path="/final-boss" element={<FinalBoss />} />
        </Routes>
      </GameProvider>
    </Router>
  );
}

export default App;
