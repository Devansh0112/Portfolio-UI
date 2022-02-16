import "../Banner/Banner.css";
import PrimaryNav from "../PrimaryNav/PrimaryNav";
import SecondaryNav from "../SecondaryNav/SecondaryNav";
import git from "../../assets/git.svg";
import linkedIn from "../../assets/linkedIn.svg";
import photo from "../../assets/myPicture.jpg";

function Banner() {
  const linkedInLink = "https://www.linkedin.com/in/devansh-s-45b22b158/";
  const githubLink = "https://github.com/Devansh0112";
  return (
    <div className="Banner">
      <div className="SecNav">
        <SecondaryNav />
      </div>
      <div className="container h-100">
        <div className="row h-100 flex-content">
          <div className="col-lg-6 ">
            <h3>Hello!</h3>
            <p>
              I am a software developer and a digital product design enthusiast.
              Let's connect!
              <br />
              <a href={linkedInLink} target={"_blank"}>
                <img
                  src={linkedIn}
                  alt="LinkedIn link"
                  height="30"
                  width="30"
                />
              </a>
              <a href={githubLink} className="icon-space" target={"_blank"}>
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
      <div className="PrimaryNav">
        <PrimaryNav />
      </div>
    </div>
  );
}

export default Banner;
