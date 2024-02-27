import vet_owned from "../assets/images/vet_owned.png"
import woman_owned from "../assets/images/woman_owned.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer_text">
        <h5>
          Website Built By: 
        </h5>
        <a href="https://beedev-services.com/" target="_blank">
          BEEDEV-SERVICES
        </a>
      </div>
      <div className="footer_images">
        <img className="footer_image_one" src={ vet_owned } alt="vet owned" />
        <img className="footer_image_two" src={ woman_owned } alt="vet owned" />
      </div>
    </footer>
  )
};

export default Footer;
