function Homepage(props) {
  return (
    <div className="row">
    <div className="col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", marginBottom: "340px"}}>
      <div className="card" id="card-home">
        <div className="row">
          <div className="col-md-4">
            <img src="static/img/profile-pic.jpeg" alt="isma" className="img-fluid" id="profile-pic"/>
          </div>
            <div className="col-md-8">
              <div className="card-body" id="card-home-body">
                <h1 className="my-name" ><p id="im">I'm</p> Ismaiana Lima</h1>
                <h3 className="swe">Software Engineer</h3>
                <div className="row">
                <div className="col-md-7">
                  <div id="text-about">
                    <p>
                     
                    I just love coding and learning new things! <br />
                      
                    </p> 
                    <a href="https://docs.google.com/document/d/1nSGhDDV7XQZ-tTQVuJVetB8MGkQF0qjWMaA4FpYD_5Y/edit?usp=sharing">
                    <button>View My Resume</button>
                  </a>
                  </div>
                  </div>
                  </div>
                
                <div className="row">
                <div className="col-md-8">
                  <h3 id="title-skills">My Career so far</h3>
                  <div id="text-skills">
                  <p>
                      Let me walk you through my tech journey :) <br /><br />
                      I'm currently improving my skills and working on projects daily. 
                      My interest in tech began in 2021 when I taught myself to code through videos. 
                      I took some online courses, and in 2023 I graduated from a full-time, 500-hour coding bootcamp. I have a background and a degree in HR with 3+ years of experience, 
                      providing strong data analytics skills. During this time, I've worked with KPIs, metrics, and related tasks. 
                      I love using technology to benefit people, which led me to pursue a career in software engineering.
                      <br />
                      I hope you enjoy my portfolio and projects! 
                  </p> 

                  <ReactRouterDOM.Link to="/projects">
                        <button>View My Projects</button>
                      </ReactRouterDOM.Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="row">
                  <h3 id="title-tech">Technologies and Skills</h3>
                </div>
                </div>
                  <div id="text-tech">
                  <p>  
                  <span>Python</span>
                  <span>Javascript</span>
                  <span>PHP</span>
                  <span>SQL</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>React.js</span>
                  <span>Flask</span>
                  <span>Jinja</span>
                  <span>Laravel</span> 
                  <span>Ajax</span>
                  <span>JSON</span> 
                  <span>SQLAlchemy</span> 
                  <span>APIs</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Data Modeling</span>
                  <span>Ubuntu</span>
                  <span>Command Line</span>
                  <span>AWS</span> 
                  <span>VS Code</span>
                  <span>Algorithms</span>
                  <span>Analytical Skills</span>
                  <span>Data analysis</span>
                  <span>HRIS</span>
                  <span>KPIs</span>
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects(props) {
  return (
    <div id="projects-div" style={{justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="card" id="projects" style={{ width: "18rem", margin: "0 10px", marginBottom: "20px"}}>
          <img
            className="project-card-img-top"
            src="static/img/happy-snacky.JPG"
            alt="Happy Snacky"
            style={{ height: "180px", width: "100%", display: "block" }}
          />
          <div className="card-body">
            <h5 className="card-title">Happy Snacky</h5>
            <p className="card-text">
            Happy Snacky is a web application that helps users discover new products based on their allergies and dietary restrictions. 
            </p>
            <a
              href="https://github.com/Ismaiana/Happy-Snacky-Project"
              className="btn btn-primary" id="check-out" style={{marginTop:"45px"}}
            >
              Check it out
            </a>
          </div>
        </div>
     
        <div className="card" id="projects" style={{ width: "18rem", margin: "0 10px", marginBottom: "20px" }}>
          <img
            className="project-card-img-top"
            src="static/img/react-website.JPG"
            alt="Card image cap"
            style={{ height: "180px", width: "100%", display: "block" }}
          />
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text" style={{marginBottom: "63px"}}>
              My Portfolio website built with React.
            </p>
            <a href="https://github.com/Ismaiana/React-portfolio" className="btn btn-primary" id="check-out" style={{marginTop:"45px"}}>
              Check it out
            </a>
          </div>  
        </div>
     
        <div className="card" id="projects" style={{ width: "18rem", margin: "0 10px", marginBottom: "20px"}}>
          <img
            className="project-card-img-top"
            src="static/img/gabi-nutri.JPG"
            alt="Card image cap"
            style={{ height: "180px", width: "100%", display: "block" }}
          />
          <div className="card-body">
          <h5 className="card-title">Gabi Nutrition</h5>
            <p className="card-text" style={{marginBottom: "63px"}}>
            Gabi Nutrition's website allows users to review her services, view clients' results and pricing.
            </p>
            <a href="https://github.com/Ismaiana/Gabi-nutrition" className="btn btn-primary" id="check-out">
              Check it out
            </a>
          </div>
        </div>
        </div>
        <br />
        <br />
      </div>

  
  );
}

function Contact(props) {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "mailto:ismaiana_@hotmail.com";
  };

  return (
    <div>
      <a href="/" onClick={handleClick}>
        Contact Me
      </a>
    </div>
  );
}

function Navbar(props) {

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "mailto:ismaiana_@hotmail.com";
  };

  return (
    <nav>

      <ReactRouterDOM.Link to="/" className="navbar-brand d-flex justify-content-center">
     
    

      <section className="d-flex justify-content-center">
        <ReactRouterDOM.NavLink
          to="/"
          activeClassName="navlink-active"
          className="nav-link nav-item"
        >
          About
        </ReactRouterDOM.NavLink>
        <ReactRouterDOM.NavLink
          to="/projects"
          activeClassName="navlink-active"
          className="nav-link nav-item"
        >
          Projects
        </ReactRouterDOM.NavLink>
        <a href="/" onClick={handleClick} className="nav-link nav-item">
          Contact Me
        </a>
      </section>
      </ReactRouterDOM.Link>
    </nav>
  );
}