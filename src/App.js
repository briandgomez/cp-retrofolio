import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Resume from "./Components/Pages/Resume";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/resume" Component={Resume} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
