import "./Projects.css";
function Projects() {
  const images = [
    {
      src: require("../../Images/YER.jpg"),
      title: "Y.E.R.",
      text: "Sample text",
    },
    {
      src: require("../../Images/Team-Generator.png"),
      title: "Team",
      text: "Sample text",
    },
    {
      src: require("../../Images/Social.png"),
      title: "Social API",
      text: "Sample text",
    },
    {
      src: require("../../Images/E-Commerce.png"),
      title: "E-Commerce",
      text: "Sample text",
    },
    {
      src: require("../../Images/Employee.png"),
      title: "Employee",
      text: "Sample text",
    },
  ];

  return (
    <div class="container">
      <div class="row row-cols-3">
        {images.map((image) => (
          <img
            key={image}
            src={image.src}
            height={"235px"}
            style={{ padding: "15px" }}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
