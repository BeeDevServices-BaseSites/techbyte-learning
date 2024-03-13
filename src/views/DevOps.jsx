import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"

const DevOps = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("DevOps - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://live.staticflickr.com/65535/53583816052_e3c94e7686_c.jpg" alt="DevOps" />
          </div>
          <div className="box_right_text">
            <h2>
              Upskill With DevOps
            </h2>
            <p>
              <span>A</span>re you looking to enhance your IT career and improve your skills in DevOps?
            </p>
            <p>
              Our part-time DevOps course is designed for busy professionals, with a flexible schedule that fits around your busy life, you can learn the latest DevOps practices and tools at your own pace.
            </p>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>O</span>ur expert instructors will provide you with practical, hands-on training that will help you succeed in your current role and advance in your career. Whether you are a beginner looking to break into the field or an experienced professional seeking to stay ahead of the curve, our DevOps course will equip you with the knowledge and skills you need to excel in today's fast-paced tech industry.
            </p>
            <p>
              Don't let time constraints hold you back from achieving your career goals - enroll in our part-time DevOps course today and take your career to new heights!
            </p>
          </div>
          <div className="box_right_img">
              <img src="https://live.staticflickr.com/65535/53585006494_0167d1870d.jpg" alt="Dev life cycle" />
          </div>
        </div>
        {/* END SECTION 2 */}
        <Button to="/apply" text="APPLY NOW" />
      </div>
    </main>
  );
};

export default DevOps;
