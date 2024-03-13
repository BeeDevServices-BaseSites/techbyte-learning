import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";
import PriceTags from "../components/PriceTags";
import pricing_info from "../assets/json/course_cards.json"

const Services = ({ setDetails }) => {

  // data filters to insert into PriceTags component
  const mini_course_data = pricing_info.filter(price => price.is_active).filter(price => price.is_mini_course);
  const dev_course_data = pricing_info.filter(price => price.is_active).filter(price => price.is_full_course);
  const tutoring_data = pricing_info.filter(price => price.is_active).filter(price => price.is_tutoring);

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("TechByte Services - ")
  },[])

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    window.scrollTo({
        top: element.offsetTop -150,
        behavior: 'smooth'
    });
}

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          {/* SECTION 1 */}
          <div className="service_links">
            <h2>
              TechByte Learning Services
            </h2>
            <div className="service_jump_link">
              <p href="#devcourses" onClick={(e) => handleClick(e, "devcourses")}>|&nbsp;Development&nbsp;|</p>
              <p href="#minisessons" onClick={(e) => handleClick(e, "minisessions")}>|&nbsp;Mini&nbsp;Sessions&nbsp;|</p>
              <p onClick={(e) => handleClick(e, "tutoring")}>|&nbsp;Tutoring&nbsp;|</p>
            </div>
          </div>
        </div>
          {/* END SECTION 1 */}
          {/* SECTION 2 */}
          <div className="large_box">
          {/* TITLE */}
          <h2 id="devcourses">
            TechByte Development Programs
          </h2>
          <br />
          {/* FULL DEV COURSE PRICE TAGS */}
          <PriceTags tag_data={ dev_course_data } setDetails={ setDetails } />
        </div>
          {/* END SECTION 2 */}
          {/* SECTION 3 */}
        <div className="large_box">
          {/* TITLE */}
          <h2 id="minisessions">
            TechByte Mini Sessions
          </h2>
          <br />
          {/* MINI COURSE PRICE TAGS */}
          <PriceTags tag_data={ mini_course_data } setDetails={ setDetails } />
          {/* END SECTION 3 */}
        </div>
          {/* SECTION 4 */}
        <div className="large_box">
          {/* TITLE */}
          <h2 id="tutoring">
            Techbyte Tutoring
          </h2>
          <h4>
            Not sure what you need, or have questions about TechByte Tutoring?
          </h4>
          <h4>
            Contact <a href="mailto:tutoring@techbyte-learning.com?subject=Tutoring%20Inquiry%20">tutoring@techbyte-learning.com</a>
          </h4>
          <br />
          <h5 className="center_text">
            Don't forget to take advantage of our bundle pricing options.
          </h5>
          <br />
          {/* TUTORING PRICE TAGS */}
          <PriceTags tag_data={ tutoring_data } setDetails={ setDetails } />
          {/* END SECTION 4 */}
          <h4>
            Already purchased a tutoring session? 
          </h4>
          <br />
          <Button to="/booktutoring" text="Schedule Tutoring" />
        </div>
      </div>
    </main>
  );
};

export default Services;
