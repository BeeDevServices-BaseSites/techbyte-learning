import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Jobs from "../components/Jobs";
import hiring from "../assets/images/hiring.jpg"
import positions from "../assets/json/careers.json"

const Careers = () => {

  const active_jobs = positions.filter(position => position.is_active);

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Careers - ")
  },[])

  return (
    <main>
      {active_jobs.length == 0 ? 
        <div className="wrapper">
          <div className="split_box">
            <div className="box_left_text">
              <h2>
                TechByte Careers
              </h2>
              <h4>
              Thank you for your interest in joining our team. At the moment we are not hiring, but if you feel you'd be a good fit please contact us at <a id="career_link" href="mailto:careers@techbyte-learning.com?subject=Career%20Inquiry%20">careers@techbyte-learning.com</a>
              </h4>
            </div>
            <div className="box_right_text">
                <img className="hiring" src="https://cf42c4dc.rocketcdn.me/wp-content/uploads/2023/07/Hanging_Sign_Job_Openings-1024x1024.png" alt="Not Hiring" />
            </div>
          </div>
        </div>
      :
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
          <Jobs positions={ positions } />
        </div>
      } 
    </main>
  );
};

export default Careers;
