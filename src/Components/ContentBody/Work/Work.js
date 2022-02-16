import "../Work/Work.css";
import CategoryComponent from "./CategoryComponent/CategoryComponent";

function Work() {
    const uxHeading = "UX Projects";
    const codeHeading = "Programming Projects";
  return (
    <div id="work" className="flex-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <CategoryComponent heading={codeHeading} />
          </div>
          <div className="col-lg-5">
            <CategoryComponent heading={uxHeading}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
