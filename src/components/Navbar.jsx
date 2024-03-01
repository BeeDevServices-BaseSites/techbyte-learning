import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

const NavBar = () => {

useEffect(() => {
    const drawerLinks = document.querySelectorAll('.drawer_link');
    drawerLinks.forEach(link => { 
      link.addEventListener('click', () => { 
        document.getElementById('drawer_toggle').checked = false;
      });
    });
  }, []);

  return (
    <>
      <input type="checkbox" id="drawer_toggle" name="drawer_toggle"/>
      <label htmlFor="drawer_toggle" id="drawer_toggle_label"></label>
      <header>
        <img src="https://images.craftsnherbs.com/logos/newNewLogo.png" alt="TechByte Learning Bee" />
        <Link to="/">TechByte Learning</Link>
      </header>
      <nav id="drawer">
        <ul>
          <li>
            <Link to="/" className="drawer_link">Home Page</Link>
          </li>
          <li>
            <Link to="/courses" className="drawer_link">Web Development</Link>
          </li>
          <li>
            <Link to="/tutoring" className="drawer_link">Tutoring</Link>
          </li>
          <li>
            <Link to="/nexthive" className="drawer_link">Next Cohort</Link>
          </li>
          <li>
            <Link to="/pricingplans" className="drawer_link">Pricing</Link>
          </li>
          <li>
            <Link to="/tuitionassistance" className="drawer_link">Tuition Assistance</Link>
          </li>
          <li>
            <Link to="/apply" className="drawer_link">Apply</Link>
          </li>
          <li>
            <Link to="/ourhive" className="drawer_link">Our Hive</Link>
          </li>
          <li>
            <Link to="/contact" className="drawer_link">Contact Us</Link>
          </li>
          <li>
            <Link to="/careers" className="drawer_link">Careers</Link>
          </li>
          <li>
            <a href="https://learn.techbyte-learning.com/" target="_blank" className="drawer_link">Student Login</a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default NavBar;
