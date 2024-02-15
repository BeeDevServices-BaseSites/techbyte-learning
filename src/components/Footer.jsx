import vet_owned from "../assets/images/vet_owned.png"
import woman_owned from "../assets/images/woman_owned2.png"
// import woman_owned from "../assets/images/woman_owned.png"

const Footer = () => {
  return (
    <footer>
      <a href="https://savethebees.com/" target="_blank">#SaveTheBees</a>
      <div className="footer_images">
        <img className="footer_image_one" src={vet_owned} alt="vet owned" />
        <img className="footer_image_two" src={woman_owned} alt="vet owned" />
      </div>
    </footer>
  )
};

export default Footer;
