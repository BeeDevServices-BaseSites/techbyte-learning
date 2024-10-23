import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import DarkMode from "./Darkmode";
import LightLink_Link from "./LinkLight_Link"
import LinkLight_a from "./LinkLight_a";
import { MdOutlineHexagon } from "react-icons/md";
import TBLogo from "../assets/images/techbyte_logo-nobg.png"

const NavBar = () => {

  useEffect(() => {
    const drawerLinks = document.querySelectorAll('.drawer_link');
    drawerLinks.forEach(link => { 
      link.addEventListener('click', () => { 
        document.getElementById('drawer_toggle').checked = false;
      });
    });

    const drawerLinkDark = document.querySelectorAll('.drawer_link_dark');
    drawerLinkDark.forEach(link => { 
      link.addEventListener('click', () => { 
        setTimeout(() => {
          document.getElementById('drawer_toggle').checked = false;
        }, 500);
      });
    });
  }, []);

  return (
    <>
      <input type="checkbox" id="drawer_toggle" name="drawer_toggle"/>
      <label htmlFor="drawer_toggle" id="drawer_toggle_label"><span className="visually-hidden">Empty Link</span></label>
      <header>
        <Link to="/"><img src={TBLogo} alt="TechByte Logo" /></Link>
      </header>
      <nav id="drawer">
        <ul>
          <li className="drawer_link">
            <LightLink_Link href="/" text="Home Page" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/webdevelopment" text="Web Development" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/gamedevelopment" text="2D Game Development" />
          </li>
          {/* <li className="drawer_link">
            <LightLink_Link href="/devops" text="DevOps" />
          </li> */}
          <li className="drawer_link">
            <LightLink_Link href="/minicourses" text="Mini Courses" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/tutoring" text="Tutoring" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/nexthive" text="Next Cohort" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/services" text="Services" />
          </li>
          <li className="drawer_link">
          <LightLink_Link href="/tuitionassistance" text="Tuition Assistance" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/apply" text="Apply" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/booktutoring" text="Schedule Tutoring" />
          </li>
          <li className="drawer_link">
            <LightLink_Link href="/aboutus" text="About Us" />
          </li>
          <li className="drawer_link">
            <LinkLight_a href="https://techbyte-learning.com/bytewise/" text="ByteWise Dispatch" />
          </li>
          <li className="drawer_link">
            <LinkLight_a href="https://learn.techbyte-learning.com/" text="Student Login" />
          </li>
          <li className="drawer_link_dark">
            <DarkMode />
          </li>
        </ul>
      </nav>
    </>
  )
};

export default NavBar;
