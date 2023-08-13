import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

const Contact = () => {
  return (
    <form name="contact" method="POST" id="contact-form" data-netlify="true" action="/src/Components/Pages/Succcess.js">
      <input type="hidden" name="form-name" value="contact" />
      <h2 id="contact-me-h2">Contact Me</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          name="name"
          type="text"
          id="name"
          placeholder="Full Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          required
          aria-describedby="emailHelp"
          placeholder="Your Email Address"
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" id="message" required name="Message"></textarea>
      </div>
      <button
        id="submit-button"
        style={{
          margin: "6px",
          borderColor: "#05d9e8",
          color: "white",
        }}
        className="btn"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
