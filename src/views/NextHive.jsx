import { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeTitle } from "../utilities/utilityFunctions";
import price_point from "../assets/images/price_point.jpg"

const NextHive = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Next Hive - ")
  },[])

  return (
    <main>
      {/* TITLE SECTION */}
      <div className="wrapper">
        <div className="large_box">
          <h1>Next Cohort Info</h1>
        </div>
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>Buzzing With Skills</h2>
            <p>
              <span>O</span>ur program is designed to equip you with the knowledge and skills needed to thrive in the fast-paced world of web development. Whether you're a beginner looking to break into the industry or an experienced programmer seeking to expand your skillset, our courses have something for everyone. Our upcoming cohort, affectionately known as a "hive," is set to kick off in mid-June 2024, offering a comprehensive curriculum that covers web fundamentals, python, and react.js.
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://img.freepik.com/premium-photo/background-calendar-have-copy-space-design-presentation_35956-3733.jpg" alt="Teaching" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src={price_point} alt="price point" />
          </div>
          <div className="box_right_text">
            <h2>What Sets TechByte Apart?</h2>
            <p>
              <span>O</span>ur dedication to affordability. We understand that investing in education can be a significant financial commitment. That's why we offer our web development program at prices starting at just $7500. We believe that high-quality education should be accessible to all, and we're proud to offer competitive pricing without compromising the curriculum's integrity.
            </p>
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>Financial Aid Programs</h2>
            <p>
              <span>W</span>e understand that finances can be a barrier for some aspiring learners. That's why we have partnered with various lenders to provide flexible financing options. We want to ensure that nothing stands in the way of your dreams of becoming a web developer. At TechByte Learning, we are committed to your success, both academically and financially.
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://miro.medium.com/v2/resize:fit:798/1*5qJ2qOkh9TrxBr3lHgJWeQ.jpeg" alt="" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="split_box flip">
          <Link className="signup_link" to="/apply">
            <img src="https://seorealestateexperts.com/wp-content/uploads/2015/04/Sign-up.png" alt="Sign Up Here!" />
          </Link>
          <div className="box_right_text">
            <h2>Apply Today!</h2>
            <p>
              <span>D</span>on't miss out on this incredible opportunity to join our hive and embark on an exciting journey into the world of web development. Secure your spot today and unlock a world of endless possibilities. Whether you're passionate about creating stunning user interfaces or diving into data-driven backend development, our web development program will be your gateway to a thriving career in the tech industry. Join us at TechByte Learning and let's build a brighter future together!
            </p>
          </div>
        </div>
        {/* END SECTION 4 */}
        </div>
    </main>
  );
};

export default NextHive;