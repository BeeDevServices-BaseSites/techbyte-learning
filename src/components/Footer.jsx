import { Link } from "react-router-dom";
import vet_owned from "../assets/images/vet_owned.png"
import woman_owned from "../assets/images/woman_owned.png"
import LinkLight_a from "./LinkLight_a";
import LinkLight_Link from "./LinkLight_Link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      {/* LEFT SIDE OF FOOTER */}
      {/* Links In Footer */}
      <div className="footer_links">
        <div className="footer_link_column bee_dev">
          <p>
            Website Built By:
          </p>
          <LinkLight_a href="https://beedev-services.com/" text="BEEDEV-SERVICES" />
        </div>
        <div className="footer_link_column">
            <LinkLight_a href="https://techbyte-learning.com/bytewise/" text="ByteWise Dispatch" />
            <LinkLight_a href="https://learn.techbyte-learning.com/" text="Student Login" />
        </div>
        <div className="footer_link_column">
            <LinkLight_Link href="/aboutus" text="About Us" />
            <LinkLight_Link href="/careers" text="Careers" />
        </div>
      </div>
      {/* RIGHT SIDE OF FOOTER */}
      <div className="footer_badges">
        {/* Footer Owner Badges */}
        <div className="footer_images">
          <img className="footer_image_one" src={ vet_owned } alt="vet owned" />
          <img className="footer_image_two" src={ woman_owned } alt="vet owned" />
        </div>
        {/* Footer Socials */}
        <div className="footer_socials">
          {/* Facebook */}
          <a href="https://www.facebook.com/techbytelearning/" target="_blank">
            <FaFacebookSquare />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/tech-byte-learning/" target="_blank">
            <FaLinkedin />
          </a>
          {/* Twitter */}
          <a href="https://www.instagram.com/techbyte.learning/" target="_blank">
            <FaInstagram />
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/@TechByte_Learning" target="_blank">
            <FaYoutube />
          </a>
          {/* Discord */}
          {/* <a href="https://discord.com/channels/1203563873769365584/1205562887427588116" target="_blank">
            <FaDiscord />
          </a> */}
          {/* Udemy */}
          {/* <a href="https://www.udemy.com/user/techbyte-learning/" target="_blank"><SiUdemy /></a> */}
        </div>
      </div>
    </footer>
  )
};

export default Footer;
