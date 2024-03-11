import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button.jsx";
import rise_above from "../assets/images/rise_above.jpg";
import tutors from "../assets/json/employees.json";
import StaffCard from "../components/StaffCard.jsx";

const Tutoring = () => {

  const active_tutors = tutors.filter(tutor => tutor.is_tutor);

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
          </div>
          <div className="box_right_img">
            <img src={ rise_above } alt="Rise Above" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <h2>Meet Our Tutors</h2>
        {/* INSTRUCTOR CARDS */}
        <StaffCard active_tutors = { active_tutors } is_staff = { false } />
        {/* END SECTION 3 */}
        <Button to="/pricingplans" text="PRICING PLANS" />
      </div>
    </main>
  );
};

export default Tutoring;
