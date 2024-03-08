import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"
import mini_course from "../assets/images/mini_course.jpg"

const MiniCourses = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Mini Courses - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://img.freepik.com/premium-photo/learn-concept-word-learn-button-computer-keyboard_186380-808.jpg" alt="Learn" />
          </div>
          <div className="box_right_text">
            <h2>
              Mini Learning Sessions
            </h2>
            <p>
              <span>L</span>ooking to expand your coding skills? Join our online programming school for mini sessions on essential topics! Build your skills with our two one-hour classes. TechByte Learning is aiming to provide you with a cost-effective way to enhance your programming knowledge.
            </p>
            <p>
              Our mini sessions focus on practical skills that you can immediately apply to your projects. From writing SQL statements to designing websites in Figma, our expert instructors will guide you through each topic with hands-on activities. These micro courses are perfect for beginners looking to build a strong foundation in programming or for experienced developers wanting to sharpen their skills.
            </p>
            <p>
              Whether you're a student, freelancer, or working professional, our mini class sessions offer a flexible schedule to fit your busy lifestyle. Sign up today and take your coding abilities to the next level with our engaging and interactive lessons.
            </p>

            
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <h3>TechByte Learning's <br />Mini Session Topics</h3>
            <ul>
              <li>
                Figma
              </li>
              <li>
                Website blueprinting
              </li>
              <li>
                Git
              </li>
              <li>
                Less
              </li>
              <li>
                Terminal
              </li>
              <li>
                SQL querys
              </li>
              <li>
                And More ...
              </li>
            </ul>
            <br />
            <Button to="/pricingplans" text="Check Availability" />
          </div>
          <div className="box_right_img">
            <img src={ mini_course } alt="Mini Courses" />
          </div>
        </div>
        {/* END SECTION 2 */}
      </div>
    </main>
  );
};

export default MiniCourses;
