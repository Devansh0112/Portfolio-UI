import '../PrimaryNav/PrimaryNav.css';

function PrimaryNav() {
    return (
      <div id='PrimaryNav'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="#PrimaryNav">
                  Work
                </a>
              </li>
              <li class="nav-item li-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item li-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default PrimaryNav;
  