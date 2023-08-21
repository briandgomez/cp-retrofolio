import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Resume from "./Components/Pages/Resume";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projects";
import Success from "./Components/Pages/Success";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#808080",
              },
              links: {
                color: "#808080",
                distance: 180,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 3,
              },
              number: {
                density: {
                  enable: true,
                  area: 450,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <Routes>
          <Route path="*" Component={About}/>
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
          <Route path="/contact" Component={Contact} />
          <Route path="/success" Component={Success} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
