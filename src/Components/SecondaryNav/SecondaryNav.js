import "../SecondaryNav/SecondaryNav.css";
import logo from "../../assets/ds-logo.svg";
import cloud from "../../assets/cloud.svg";
import CV from "../../assets/Resume.pdf"

function SecondaryNav() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href=".">
            <img src={logo} alt="logo" height={"50"} width={"150"} />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href={CV} download>
                  Download CV
                  <img src={cloud} className="cloud-img" height={'15'} width={'15'} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SecondaryNav;
