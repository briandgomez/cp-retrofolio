import "./Projects.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Projects() {
  const images = [
    {
      src: require("../../Images/YER.jpg"),
      title: "Y.E.R. (Your Entertainment Reviews)",
      descripiton:
        "Displays movie and tv-show information based on user search",
      github: "https://github.com/briandgomez/YER",
    },
    {
      src: require("../../Images/Team-Generator.png"),
      title: "Team Generator",
      descripiton:
        "Creates a profile for each team member and displays their important information",
      github: "https://github.com/briandgomez/Team-Profile-Generator",
    },
    {
      src: require("../../Images/Social.png"),
      title: "Social API",
      descripiton: "Demonstrates how a social network application functions",
      github: "https://github.com/briandgomez/Social-API",
    },
    {
      src: require("../../Images/E-Commerce.png"),
      title: "E-Commerce API",
      descripiton:
        "Demonstrates how the back end of a e-commerce website works",
      github: "https://github.com/briandgomez/E-Commerce",
    },
    {
      src: require("../../Images/Employee.png"),
      title: "Employee Tracker",
      descripiton: "Keeps track of important employee and company information",
      github: "https://github.com/briandgomez/Employee-Tracker",
    },
  ];

  return (
    <div className="container">
      <div id="projects" className="row">
        {images.map((image) => (
          <figure className="snip0058">
            <img
              key={image}
              src={image.src}
              height={"270px"}
              style={{ padding: "15px" }}
            />
            <figcaption>
              <p>
                <span>{image.descripiton}</span>
              </p>
              <h2 className="white">
                <span>{image.title}</span>
              </h2>
              <a className="icons">
                <Link
                  to={image.github}
                  className="github-icon"
                >
                  <AiIcons.AiFillGithub />
                </Link>
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Projects;
