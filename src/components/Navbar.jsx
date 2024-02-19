import { Link } from "react-router-dom";

import bee_logo from "../assets/images/tech_byte_learning_logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="page_title">
        <img style={{paddingLeft:"20px"}} src="https://cdn.discordapp.com/attachments/1204477744830746655/1208990870171287633/computerBee.png?ex=65e54b7d&is=65d2d67d&hm=e9ce9fda34d8ced8d29a87e9d493dd3295c98e41479f06e32b09490cf5e8fc96&" alt="TechByte Learning Bee" />
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
        <ul className="drop menu2">
          <li><Link to="/ourhive">Meet Our Hive</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;