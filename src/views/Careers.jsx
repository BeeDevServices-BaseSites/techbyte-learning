import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Jobs from "../components/Jobs";
import hiring from "../assets/images/hiring.jpg"


const Careers = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Careers - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              TechByte Careers
            </h2>
            <h4>
              We are actively seeking highly skilled and talented individuals with expertise in various roles to join our team. See our openings below.
            </h4>
          </div>
          <div className="box_right_text">
              <img className="hiring" src={ hiring } alt="We Are Hiring" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* JOBS LISTINGS */}
        <Jobs />
      </div>
    </main>
  );
};

export default Careers;
