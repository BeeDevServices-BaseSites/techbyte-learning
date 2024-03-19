import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";


const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("About Us - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>Our Mission At <br className="mobile_only" />TechByte Learning</h2>
          <p>
            <span>A</span>t TechByte Learning, our vision is to revolutionize programming education by empowering learners with not just technical skills, but also fostering a collaborative and innovative mindset. 
          </p>
          <p>
            We envision a future where every programmer emerges from our programs equipped not only with coding expertise but also with the ability to work seamlessly in teams, navigate complex projects with Git, deploy solutions effectively, and understand and enhance existing code. 
          </p>
          <p>
            Through our transformative learning experiences, we aim to bridge the gap between coding bootcamps and real-world job requirements, making programming a holistic and enriching journey for individuals of all ages.
          </p>
        </div>
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Who Is TechByte?
            </h2>
            <p>
              TechByte is a woman and military veteran-owned company focused on web and game development, with a diverse team known as "Our Hive". We provide innovative solutions and services to clients.
            </p>
            <Button to="/ourhive" text="Meet Our Team" />
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584957329_87b1482ed7.jpg" alt="About Us" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box flip">
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53583575842_66798c42d1_c.jpg" alt="Our Hive" />
          </div>
          <div className="box_left_text">
            <p>
              If you are passionate about technology and want to work for a company that values innovation and collaboration, then TechByte may be the right fit for you. We encourage you to explore our Careers page if you are interested in joining Our Hive at TechByte and apply for positions that align with your skills and interests. 
            </p>
            <Button to="/careers" text="TechByte Careers" />
          </div>
        </div>
        {/* END SECTION 2 */}
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
              <h4 className="contact_title">
                Student Login:
              </h4>
              <a href="https://learn.techbyte-learning.com/">learn.techbyte-learning.com</a>
            </div>
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584886945_21be81e0d5.jpg" alt="Contact Us!" />
          </div>
        </div>
        {/* END SECTION 2 */}
        <br />
        {/* SECTION 3 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src="https://live.staticflickr.com/65535/53584439271_f26fbe904d_z.jpg" alt="Follow Us!" />
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
