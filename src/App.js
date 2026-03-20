import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Educations from "./components/pages/educations/Educations";
import Experiances from "./components/pages/experiances/Experiances";
import Home from "./components/pages/Home";
import Portfolios from "./components/pages/portfolios/Portfolios";
import Skills from "./components/pages/skills/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiances" element={<Experiances />} />
        <Route path="/educations" element={<Educations />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
    </Router>
  );
}

export default App;
