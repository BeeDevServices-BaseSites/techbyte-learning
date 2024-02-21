import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import flying_bee from "../assets/images/flyingbee.gif";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Contact Us - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* CONTACT CONTAINER */}
        <div className="contact_container">
          <img className="bumble_bee_image" src={flying_bee} alt="bumble bee" />  
          {/* SECTION 1 */}
          <h2>Get In Touch:</h2>
          <div className="contacts">
            <h4>Phone:</h4>
            <h4 className="phone_number">some phone number</h4>
          </div>
          <div className="contacts">
            <h4>Admissions Email:</h4>
            <a  href="mailto:admissions@beedev-services.com?subject=Admissions%20Inquiry%20">admin@beedev-services.com</a>
          </div>
          <div className="contacts">
            <h4>Support Email:</h4>
            <a href="mailto:support@beedev-services.com?subject=Support%20Inquiry%20">support@beedev-services.com</a>
          </div>
          <div className="contacts">
            <h4>Student Login:</h4>
            <a href="https://learn.techbyte-learning.com/">learn.techbyte-learning.com</a>
          </div>
          {/* END SECTION 1 */}
          {/* SECTION 1 */}
          <h2>Follow Us Online:</h2>
          <div className="contacts">
            <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin logo" />
            <a href="https://www.linkedin.com/company/techbyte-learning/?viewAsMember=true" target="_blank">TechByte Learning LinkedIn</a>
          </div>
          <div className="contacts">
            <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin logo" />
            <a href="https://www.linkedin.com/company/beedev-services/?viewAsMember=true" target="_blank">BeeDev Services LinkedIn</a>
          </div>
          <div className="contacts">
            <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="facebook logo" />
            <a href="https://www.facebook.com/techbytelearning" target="_blank">TechByte Learning Facebook</a>
          </div>
          <div className="contacts">
            <img src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="facebook logo" />
            <a href="https://www.facebook.com/beedevservices" target="_blank">BeeDev Services Facebook</a>
          </div>
          <div className="contacts">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="discord icon" />
            <a href="###" target="_blank">TechByte Leaning Discord</a>
          </div>
        </div>
        {/* END SECTION 2 */}
      </div>
      {/* END CONTACT CONTAINER */}
    </main>
  );
};

export default Contact;
