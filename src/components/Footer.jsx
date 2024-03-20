import vet_owned from "../assets/images/vet_owned.png"
import woman_owned from "../assets/images/woman_owned.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer_links">

        <div className="footer_text">

            <p>
              Website Built By: 
            </p>
            <p>
              <a href="https://beedev-services.com/" target="_blank">
                BEEDEV-SERVICES
              </a>
            </p>

        </div>

        <div className="footer_text">
          <p>
            <a href="https://techbyte-learning.com/bytewise/" target="_blank">
              ByteWise Dispatch
            </a>
          </p>
          <p>
            <a href="https://learn.techbyte-learning.com/" target="_blank">
              Student Login
            </a>
          </p>
        </div>

      </div>


      <div className="footer_images">
        <img className="footer_image_one" src={ vet_owned } alt="vet owned" />
        <img className="footer_image_two" src={ woman_owned } alt="vet owned" />
      </div>

    </footer>
  )
};

export default Footer;
