import "../Banner/Banner.css";
import PrimaryNav from "../PrimaryNav/PrimaryNav";
import git from "../../assets/git.svg";
import linkedIn from "../../assets/linkedIn.svg";
import photo from "../../assets/myPicture.jpeg";

function Banner() {
  return (
    <div className="Banner">
      <div className="container h-100">
        <div className="row h-100 flex-content">
          <div className="col-lg-6 ">
            <h3>Hello!</h3>
            <p>
              I am a software developer and a digital product design enthusiast.
              Let's connect!
              <br />
              <a href="#">
                <img src={linkedIn} alt="Github link" height="30" width="30" />
              </a>
              <a href="#" className="icon-space">
                <img src={git} alt="Github link" height="30" width="30" />
              </a>
            </p>
          </div>
          <div className="col-lg-6 photo">
            <img
              src={photo}
              alt="My Image"
              width="300"
              height="300"
              className="rounded"
            />
          </div>
        </div>
      </div>
      <div className="SecNav">
        <PrimaryNav />
      </div>
    </div>
  );
}

export default Banner;
