import "./Success.css";
const Succcess = () => {
  return (
    <div class="content">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      ;
      <div class="title">
        Your form has been submitted!
        <br />
        I'll get back to you as soon as I can
      </div>
      <div
        className="fa fa-check-circle-o symbol"
        style={{ fontSize: "105px" }}
      ></div>
      <div class="text"></div>
    </div>
  );
};

export default Succcess;
