import IMG from '../assets/Software.png';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">
          Software Devloper with experience creating web applications and
          passion for continuous learning. I got my Bachelor's degree in
          Electrical Engineering from LD College of Engineering, Ahmedabad and I
          got my Master's degree in Comnputer Science from California State
          Univerisity, Northridge. My hobbies and passions include learning new
          things, hiking, photography. videography, driving on road-trips.
        </p>
        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
