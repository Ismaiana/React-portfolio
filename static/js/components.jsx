function Homepage(props) {
    return (
      <div className="row">
        <div className="col">
          <div className="card" id="card-home">
          <div className="card-body">
            <h1 className="my-name text-center">Ismaiana Lima</h1>
             <h3 className="swe text-center">Software Engineer</h3>
              <p>
              Hello,<br />
              <br />
              I'm Isma a software engineer originally from Brazil living in US.
              I'm passionate about building interactive, user-friendly software that solves real-world problems.<br />
              <br />
              I have skills in a variety of programming languages, including JavaScript, Python, SQL, HTML/CSS, Bootstrap and more. I'm also experienced in a range of 
              front-end frameworks, such as React and Jinja, as well as back-end frameworks like Flask.<br />
              <br />
              In my portfolio, you'll find examples of my work, including web applications I take pride in my attention to detail and my ability to create software that is both functional
              and aesthetically pleasing.<br />
              <br />
              Thanks for taking the time to visit my portfolio, and I hope you enjoy exploring my projects!
            </p> 
            </div>
          </div>
        </div>
</div>
    );
  }


function Projects(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
          <img
            className="project-card-img-top"
            src="https://static1.squarespace.com/static/58594172893fc07d5b88dd15/t/5a94276e8165f549b5f403f3/1519658876756/unhealthy-snacks.jpg"
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
              className="btn btn-primary"
            >
              Check it out
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", margin: "0 10px" }}>
          <img
            className="project-card-img-top"
            src="..."
            alt="Card image cap"
            style={{ height: "180px", width: "100%", display: "block" }}
          />
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text">
              My Portfolio website built with React.
            </p>
            <a href="#" className="btn btn-primary">
              Check it out
            </a>
          </div>
        </div>
      </div>
);
}

function Resume(props) {
    return (
      <div id="resume" style={{ height: "100vh" }}>
      
      </div>
    );
  }


function Navbar(props) {
    const { brand } = props;
    return (
        <nav>
    <ReactRouterDOM.Link to="/" className="havbar-brand d-flex justify-content-center">
        
        <span>{brand}</span>
      </ReactRouterDOM.Link>

      <section className="d-flex justify-content-center">
      <ReactRouterDOM.NavLink
        to="/"
        activeClassName="navlink-active"
        className="nav-link nav-item"
        >
        About me
        </ReactRouterDOM.NavLink>
        <ReactRouterDOM.NavLink
        to="/projects"
        activeClassName="navlink-active"
        className="nav-link nav-item"
        >
        Projects
        </ReactRouterDOM.NavLink>

        <ReactRouterDOM.NavLink
        to="/resume"
        activeClassName="navlink-active"
        className="nav-link nav-item"
        >
        Resume
        </ReactRouterDOM.NavLink>
        </section>
      </nav>
    );
}