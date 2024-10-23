import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";
import LinkDark from "../components/LinkDark";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { SiUdemy } from "react-icons/si";
const LinkPhone = import.meta.env.VITE_LINK_PHONE;
const DisplayPhone = import.meta.env.VITE_DISPLAY_PHONE;
const LinkFax = import.meta.env.VITE_LINK_FAX;
const DisplayFax = import.meta.env.VITE_DISPLAY_FAX;
const TutoringEmail = import.meta.env.VITE_TUTORING_EMAIL;
const SupportEmail = import.meta.env.VITE_SUPPORT_EMAIL;
const AdmissionsEmail = import.meta.env.VITE_ADMISSIONS_EMAIL;

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
            <br />
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
            <br />
            <Button to="/careers" text="TechByte Careers" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <div className="contacts">
              <h4>
                Phone:
              </h4>
              <h4 className="phone_number">
                <a className="remove_underline dark_link" href={LinkPhone}>{DisplayPhone}</a>
              </h4>
            </div>
            <div className="contacts">
              <h4>
                Fax:
              </h4>
              <h4 className="phone_number">
                <a className="remove_underline dark_link" href={LinkFax}>{DisplayFax}</a>
              </h4>
            </div>
            <div className="contacts">
              <h4>
                Admissions:
              </h4>
              <a className="remove_underline dark_link" href={`mailto:${AdmissionsEmail}?subject=Admissions%20Inquiry%20`} target="_blank">{AdmissionsEmail}</a>
            </div>
            <div className="contacts">
              <h4>
                Tutoring:
              </h4>
              <a className="remove_underline dark_link" href={`mailto:${TutoringEmail}?subject=Tutoring%20Inquiry%20`} target="_blank">{TutoringEmail}</a>
            </div>
            <div className="contacts">
              <h4>
                Website Support:
              </h4>
              <a className="remove_underline dark_link" href={`mailto:${SupportEmail}?subject=Support%20Inquiry%20`} target="_blank">{SupportEmail}</a>
            </div>
            <div className="contacts">
              <h4 className="contact_title">
                Student Login:
              </h4>
              <LinkDark href="https://learn.techbyte-learning.com/" text="learn.techbyte-learning.com" />
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
            {/* FACEBOOK */}
            <div className="contacts">
              <FaFacebookSquare />
              <LinkDark href="https://www.facebook.com/techbytelearning/" text="TechByte Learning Facebook" />
            </div>
            {/* LINKEDIN */}
            <div className="contacts">
              <FaLinkedin />
              <LinkDark href="https://www.linkedin.com/company/tech-byte-learning/" text="TechByte Learning LinkedIn" />
            </div>
            {/* TWITTER */}
            <div className="contacts">
              <FaInstagram />
              <LinkDark href="https://www.instagram.com/techbyte.learning/" text="TechByte Learning Twitter" />
            </div>
            {/* YOUTUBE */}
            <div className="contacts">
              <FaYoutube />
              <LinkDark href="https://www.youtube.com/@TechByte_Learning" text="TechByte Learning Youtube" />
            </div>
            {/* DISCORD */}
            {/* <div className="contacts">
              <FaDiscord />
              <LinkDark href="https://discord.com/channels/1203563873769365584/1205562887427588116" text="TechByte Leaning Discord" />
            </div> */}
            {/* UDEMY */}
            {/* <div className="contacts">
              <SiUdemy />
              <LinkDark href="https://www.udemy.com/user/techbyte-learning/" text="TechByte Learning Udemy" />
            </div> */}
          </div>
        </div>
        {/* END SECTION 3 */}
      </div>
    </main>
  );
};

export default AboutUs;
