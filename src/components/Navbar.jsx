import { Link } from "react-router-dom";

import bee_logo from "../assets/images/tech_byte_learning_logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="page_title">
        <img src={ bee_logo } alt="TechByte Learning Bee" />
        <h1>TechByte Learning</h1>
      </div>
      <ul className="navbar_menu">
        <li>
        <a href="#">Services</a>
        <ul className="drop menu">
          <li><a href="#">Home Page</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Tutoring</a></li>
          <li><a href="#">Something Here!!</a></li>
        </ul>
        </li>
        <li><a href="#">News</a>
        <ul className="drop menu">
          <li><a href="#">Next Cohort</a></li>
          <li><a href="#">Hot Off The Press</a></li>
          <li><a href="#">Something Here!!</a></li>
          <li><a href="#">Something Here Too!</a></li>
        </ul>
        </li>
        <li><a href="#">About Us</a>
        <ul className="drop menu">
          <li><a href="#">Meet Our Hive</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Our Discord</a></li>
        </ul>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;

