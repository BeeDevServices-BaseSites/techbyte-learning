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
        <Link to="#">Services</Link>
        <ul className="drop menu2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Web Development</Link></li>
          <li><Link to="tutoring">Tutoring</Link></li>
        </ul>
        </li>
        <li><Link to="#">Enrollment</Link>
        <ul className="drop menu">
          <li><Link to="nexthive">Next Cohort</Link></li>
          <li><Link to="/apply">Apply</Link></li>
          <li><Link to="/pricingplans">Pricing</Link></li>
          <li><Link to="/tuitionassistance">Tuition Assistance</Link></li>
        </ul>
        </li>
        <li><Link to="#">About Us</Link>
        <ul className="drop menu">
          <li><Link to="/ourhive">Meet Our Hive</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/discord">Our Discord</Link></li>
        </ul>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;