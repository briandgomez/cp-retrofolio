import "./Projects.css";
function Projects() {
  const images = [
    {
      src: require("../../Images/YER.jpg"),
      title: "Y.E.R.",
      text: "Sample text for YER",
      descripiton:
        "Displays movie and tv-show information based on user search",
      github: "https://github.com/briandgomez/YER",
    },
    {
      src: require("../../Images/Team-Generator.png"),
      title: "Team",
      text: "Sample text for Team",
      descripiton:
        "Creates a profile for each team member and displays their important information",
      github: "https://github.com/briandgomez/Team-Profile-Generator",
    },
    {
      src: require("../../Images/Social.png"),
      title: "Social API",
      text: "Sample text for social",
      descripiton: "Demonstrates how a social network application functions",
      github: "https://github.com/briandgomez/Social-API",
    },
    {
      src: require("../../Images/E-Commerce.png"),
      title: "E-Commerce",
      text: "Sample text or ecommerce",
      descripiton:
        "Demonstrates how the back end of a e-commerce website works",
      github: "https://github.com/briandgomez/E-Commerce",
    },
    {
      src: require("../../Images/Employee.png"),
      title: "Employee",
      text: "Sample text employee",
      descripiton: "Keeps track of important employee and company information",
      github: "https://github.com/briandgomez/Employee-Tracker",
    },
  ];

  return (
    <div class="container">
      <div id="projects" class="row">
        {images.map((image) => (
          <figure class="snip0058">
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
              <h2 class="white">
                <span>{image.title}</span>
              </h2>
              <div class="icons">
                <a href={image.github}>
                  <i class="ion-social-github"></i>
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
export default Projects;
