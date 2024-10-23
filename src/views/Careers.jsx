import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Jobs from "../components/Jobs";
import LinkDark from "../components/LinkDark"
import positions from "../assets/json/careers.json"
const CareersEmail = import.meta.env.VITE_CAREERS_EMAIL;

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
              Thank you for your interest in joining our team. At the moment we are not hiring, but if you feel you'd be a good fit please contact us at <a className="remove_underline dark_link" href={`mailto:${CareersEmail}?subject=Careers%20Inquiry%20`} target="_blank">{CareersEmail}</a>

              </h4>
            </div>
            <div className="box_right_img">
                <img src="https://live.staticflickr.com/65535/53585002039_a69c9be965_n.jpg" alt="Not Hiring" />
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
            <div className="box_right_img">
                <img src="https://live.staticflickr.com/65535/53584662093_b6259f3d99_n.jpg" alt="We Are Hiring" />
            </div>
          </div>
          {/* END SECTION 1 */}
          {/* JOBS LISTINGS */}
          <Jobs positions={ active_jobs } />
        </div>
      } 
    </main>
  );
};

export default Careers;
