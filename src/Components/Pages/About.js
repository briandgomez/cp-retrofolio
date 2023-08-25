import { useGlitch } from "react-powerglitch";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./About.css";

function About() {
  const glitch = useGlitch();
  return (
    <div>
      <div id="about-title">
        {" "}
        <span id="glitch-text" ref={glitch.ref}>
          Welcome
        </span>{" "}
      </div>
      <div id="social-media">
        <Link
          to="https://www.linkedin.com/in/brian-gomez-8a5a85211/"
          className="linkedin-link"
        >
          <AiIcons.AiFillLinkedin />
        </Link>
        <Link to="https://github.com/briandgomez" className="github-link">
          <AiIcons.AiFillGithub />
        </Link>
      </div>
      <div id="about-summary">
        <TypeAnimation
          wrapper="span"
          style={{
            fontSize: "2em",
            whiteSpace: "pre-line",
            height: "195px",
            display: "inline-block",
          }}
          speed={50}
          sequence={[
            `My name is Brian Gomez. I am a Application Developer who enjoys working on challenging projects. I have experience in front and back end development. In my free time I enjoy staying active, watching films/tv-shows/anime, or exploring the world`,
            1000,
          ]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
export default About;
