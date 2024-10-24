import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button.jsx";
import tutors from "../assets/json/employees.json";
import StaffCard from "../components/StaffCard.jsx";

const Tutoring = () => {

  // Data Filter for StaffCard component
  const card_data = tutors.filter(tutor => tutor.is_tutor).filter(staff => staff.is_active);

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tutoring - ")
  },[])
  
  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Expert Tutoring To Improve Your Skills
            </h2>
            <p>
              <span>A</span>re you struggling with C#, Java, Python, or JavaScript programming? Our TechByte Learning instructors are here to help! With years of experience in the field, our instructors are available for one-on-one tutoring sessions to help you master these full stack platforms.
              Whether you are a beginner or an experienced coder looking to level up your skills, our instructors have the expertise to guide you every step of the way. 
            </p>
            <p>
              Don't let coding challenges hold you back any longer. Contact TechByte Learning today to schedule your personalized tutoring session and unlock your full coding potential.
            </p>
            <h4>Already have tutor sessions?</h4>
            <br />
            <Button to="/booktutoring" text="Schedule A Tutor" />
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584662168_4eccc83e67.jpg" alt="Rise Above" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <h2>Meet Our Tutors</h2>
        {/* INSTRUCTOR CARDS */}
        <StaffCard card_data = { card_data } show_tech = { true } />
        {/* END SECTION 3 */}
        <br />
        <Button to="/services" text="Tutoring Packages" />
      </div>
    </main>
  );
};

export default Tutoring;