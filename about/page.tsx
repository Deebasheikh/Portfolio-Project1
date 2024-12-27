const About = () => {
  return (
    <div className="aboutpage">
      <h2 className="about">About Me</h2>
      <p className="aboutpara">
        Hello! I'm Areeba Inam Rasool, a front-end developer passionate about
        building fast, scalable, and user-friendly web applications. With a
        strong foundation in HTML, CSS, JavaScript, React, and Next.js, I'm
        excited to bring my skills to innovative projects.
      </p>

      <h3 className="skills">Skills</h3>
      <ul className="skill-list">
        <li className="skill-item">
          <h4 className="lang">HTML</h4>
          <p className="aboutpara">
            Structuring and organizing content for the web.
          </p>
        </li>
        <li className="skill-item">
          <h4 className="lang">CSS</h4>
          <p className="aboutpara">
            Styling and designing visually appealing interfaces.
          </p>
        </li>
        <li className="skill-item">
          <h4 className="lang">JavaScript</h4>
          <p className="aboutpara">
            Adding interactivity and dynamic effects to web pages.
          </p>
        </li>
        <li className="skill-item">
          <h4 className="lang">React</h4>
          <p className="aboutpara">
            Building reusable UI components and managing state changes.
          </p>
        </li>
        <li className="skill-item">
          <h4 className="lang">Next.js</h4>
          <p className="aboutpara">
            Creating server-side rendered and statically generated websites.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
