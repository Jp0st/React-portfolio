import profilePic from "";
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
                Short Description // Intro
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
             Short Descriptive Paragraph!
            </p>
            <p className="lead">
              Slightly more description!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;