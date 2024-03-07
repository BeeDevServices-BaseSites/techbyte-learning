import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import { Link } from "react-router-dom";
import contact_us from "../assets/images/contact_us.jpg"
import follow_us from "../assets/images/follow_us.jpg"

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("About Us - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_img">
            <img src="https://firebotanicals.com/wp-content/uploads/2020/10/about-us-.png" alt="About Us" />
          </div>
          <div className="box_right_text">
            <h2>
              Who Is TechByte?
            </h2>
            <p>
              TechByte is a woman-owned and military veteran-owned company specializing in teaching web development and game development. We pride ourself on our diverse team, which we affectionately to refer to as "Our Hive". Our Hive consists of individuals with various backgrounds and expertise in the tech industry. Together, we work towards providing innovative solutions, instruction and services to our clients. &nbsp; 
            </p>
            <br />
            <h4><Link to="/ourhive">Meet Our Team</Link></h4>
            <br />
            <p>
              If you are passionate about technology and want to work for a company that values innovation and collaboration, then TechByte may be the right fit for you. We encourage you to explore our Careers page if you are interested in joining Our Hive at TechByte and apply for positions that align with your skills and interests. 
            </p>
            <p>
              We are always looking for talented individuals to join our team and look forward to seeing how your unique talents and contributions can help drive TechByte forward.
            </p>
            <br />
            <h4><Link to="/careers">TechByte Careers</Link></h4>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Get In Touch
            </h2>
            <div className="contacts">
              <h4>
                Phone:
              </h4>
              <h4 className="phone_number">
                (570) 731-8660
              </h4>
            </div>
            <div className="contacts">
              <h4>
                Fax:
              </h4>
              <h4 className="phone_number">
                (570) 202-9171
              </h4>
            </div>
            <div className="contacts">
              <h4>
                Admissions:
              </h4>
              <a href="mailto:admissions@techbyte-learning.com?subject=Admissions%20Inquiry%20">admissions@techbyte-learning.com</a>
            </div>
            <div className="contacts">
              <h4>
                Tutoring:
              </h4>
              <a href="mailto:tutoring@techbyte-learning.com?subject=Tutoring%20Inquiry%20">tutoring@techbyte-learning.com</a>
            </div>
            <div className="contacts">
              <h4>
                Support:
              </h4>
              <a href="mailto:support@beedev-services.com?subject=Support%20Inquiry%20">support@beedev-services.com</a>
            </div>
            <div className="contacts">
              <h4>
                Student Login:
              </h4>
              <a href="https://learn.techbyte-learning.com/">learn.techbyte-learning.com</a>
            </div>
          </div>
          <div className="box_right_img">
            <img src={ contact_us } alt="Contact Us!" />
          </div>
        </div>
        {/* END SECTION 2 */}
        <br />
        {/* SECTION 3 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src={ follow_us } alt="Follow Us!" />
          </div>
          <div className="box_right_text">
            <h2>
              Social Media:
            </h2>
            <div className="contacts">
              <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin logo" />
              <a href="https://www.linkedin.com/company/techbyte-learning/?viewAsMember=true" target="_blank">TechByte Learning LinkedIn</a>
            </div>
            <div className="contacts">
              <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="facebook logo" />
              <a href="https://www.facebook.com/techbytelearning" target="_blank">TechByte Learning Facebook</a>
            </div>
            <div className="contacts">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="discord icon" />
              <a href="https://discord.com/channels/1203563873769365584/1205562887427588116" target="_blank">TechByte Leaning Discord</a>
            </div>
            <div className="contacts">
              <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin logo" />
              <a href="https://www.linkedin.com/company/beedev-services/?viewAsMember=true" target="_blank">BeeDev Services LinkedIn</a>
            </div>
            <div className="contacts">
              <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="facebook logo" />
              <a href="https://www.facebook.com/beedevservices" target="_blank">BeeDev Services Facebook</a>
            </div>
          </div>
        </div>
        {/* END SECTION 3 */}
      </div>
    </main>
  );
};

export default AboutUs;
