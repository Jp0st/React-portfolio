import profilePic from "/public/assets/images/profile-picture.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="dark-bg p-5 w-100">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h1 className="mb-4">Welcome to My Portfolio</h1>
              <p className="lead">
                Hi my name is John and I've spent the last six months learning both front-end and back-end web development. I have a passion for learning and I'm excited to continue to grow my skills as a developer. I'm currently looking for a full-time position as a web developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 about-section">
        <h1 className="mb-4 text-center">About Me</h1>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={profilePic}
              alt=""
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <div className="col-md-6">
            <p className="lead">
              I have a background in the scientific field and have previously worked as a laboratory technician. I have a passion for learning and I'm excited to continue to grow my skills as a developer. I'm currently looking for a full-time position as a web developer.
            </p>
            <p className="lead">
              I am currently based in New Jersey and I'm open to relocation. I'm also open to remote work. Feel free to contact me through the contact form above using my email.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;