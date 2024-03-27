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
                Website Support:
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
            {/* FACEBOOK */}
            <div className="contacts">
              <svg width="40" height="40" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" fill="#0f2f47"></path>
              </svg>
              <a href="https://www.facebook.com/techbytelearning" target="_blank">TechByte Learning Facebook</a>
            </div>
            {/* LINKEDIN */}
            <div className="contacts">
              <svg width="40" height="40" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" fill="#0f2f47"></path>
              </svg>
              <a href="https://www.linkedin.com/company/techbyte-learning/" target="_blank">TechByte Learning LinkedIn</a>
            </div>
            {/* TWITTER */}
            <div className="contacts">
              <svg width="40" height="40" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z" fill="#0f2f47"></path>
              </svg>
              <a href="https://www.twitter.com/techByteHive" target="_blank">TechByte Learning Twitter</a>
            </div>
            {/* YOUTUBE */}
            <div className="contacts">
              <svg width="40" height="40" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z" fill="#0f2f47"></path>
              </svg>
              <a href="https://www.youtube.com/@BeeDev_TechByte" target="_blank">TechByte Learning Youtube</a>
            </div>
            {/* DISCORD */}
            <div className="contacts">
              <i className="fa-brands fa-discord fa-2xl"></i>
              <a href="https://discord.com/channels/1203563873769365584/1205562887427588116" target="_blank">TechByte Leaning Discord</a>
            </div>
            {/* UDEMY */}
            <div className="contacts">
              <svg fill="#0f2f47" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.58 13.38a.66.66 0 0 0-.28-.14c-.6.61-1.35 1.25-2 1.68-.31.2-.7.3-.95.3-.59 0-.84-.55-.91-1.44a54.8 54.8 0 0 1-.17-4.83c0-2.26-.52-3.8-1.88-3.92l-.18-.01c-.83 0-1.24.43-1.77 1.52-.46.94-1.17 2.3-2.48 4.9a34.72 34.72 0 0 1-3.5 5.58c-.31.38-.55.64-.78.8a.8.8 0 0 1-.44.14c-.43 0-.75-.36-.85-1.21a5.46 5.46 0 0 1-.04-.69c0-1.75.66-4.6 1.8-8.78.83-3.05.48-5.13-1.34-5.13h-.03c-.41 0-.75.16-1.08.42-.33.25-.65.81-.96 1.56-.34.84-2.42 5.03-5.74 7.2-.04.81.42 1.63 1.37 1.73.85.08 1.46-.28 2.24-.81l-.16.73a31.56 31.56 0 0 0-.5 2.6c-.46 4.2 1.47 6.27 3.74 6.27.38 0 .76-.05 1.13-.15 2.5-.63 4.9-3.51 7.75-10.13a18.8 18.8 0 0 0-.01 2.02c.19 3.8 1.68 4.93 3.8 4.93 1.6 0 3.09-.83 3.85-1.87a3.7 3.7 0 0 0 .79-2.19c-.02-.49-.17-.88-.42-1.08z"></path>
              </svg>
              <a href="###" target="_blank">TechByte Learning Udemy</a>
            </div>
          </div>
        </div>
        {/* END SECTION 3 */}
      </div>
    </main>
  );
};

export default AboutUs;
