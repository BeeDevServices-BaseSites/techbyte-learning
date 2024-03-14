import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"
import html5 from "../assets/images/html5.png"
import css from "../assets/images/css.png"
import javascript from "../assets/images/javascript.png"
import bootstrap from "../assets/images/bootstrap.png"
import node from "../assets/images/nodejs.png"
import react from "../assets/images/react_black.png"
import mysql from "../assets/images/mysql.png"
import python from "../assets/images/python.png"
import django from "../assets/images/django.png"
import flask from "../assets/images/flask.png"
import postgres from "../assets/images/postgres.png"
import project_steps from "../assets/images/project_steps.png"

const WebDev = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Web Development - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://live.staticflickr.com/65535/53584887040_a8593da063_z.jpg" alt="Full Stack Development" />
          </div>
          <div className="box_right_text">
            <h2>
              Unlock Your Full Potential
              <br />
              In Web Development
            </h2>
            <p>
              <span>T</span>echbyte Learning is excited to offer you a comprehensive course program in web development with cutting-edge classes that appeal to different interests and skill levels.
            </p>
            <p>
              We know you're busy, so we've built a part-time course schedule, allowing you to achieve your goals while still having time for other commitments.
            </p>
            <Button to="/nexthive" text="Next Cohort" />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>F</span>irst we start with in-depth courses that cover the fundamentals of HTML5, CSS, and JavaScript. For those looking to delve into the world of web development we ensure a thorough understanding of these programming languages and equip you with the tools to create stunning websites and web applications.
            </p>
          </div>
          <div className="course_icons">
              <img id="html5" src={ html5 } alt="html5" />
              <img id="css" src={ css } alt="CSS" />
              <img id="javascript" src={ javascript } alt="JavaScript" />
              <img id="bootstrap" src={ bootstrap } alt="Bootstrap" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>N</span>ext, we offer top-tier classes in full-stack development using React.js with Express and Node. Students will learn how to build robust and scalable web applications, utilizing industry-leading technologies. 
            </p>
          </div>
          <div className="course_icons">
              <img id="reactjs" src={ react } alt="React JS" />
              <img id="mysql" src={ mysql } alt="MySQL" />
              <img id="nodejs" src={ node } alt="Node JS" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="split_box flip">
          <div className="course_icons">
              <img id="python" src={ python } alt="Python" />
              <img id="django" src={ django } alt="Django" />
              <img id="postgres" src={ postgres } alt="PostgreSQL" />
              <img id="flask" src={ flask } alt="Flask" />
          </div>
          <div className="box_right_text">
            <p>
              <span>L</span>astly, our curriculum includes comprehensive courses on full-stack Python development with Django and SQLalchemy. Students will master these powerful frameworks and gain hands-on experience in building dynamic web applications. Join our classes to unlock your potential and embark on a successful career in the ever-evolving world of web and software development.
            </p>
          </div>
        </div>
        {/* END SECTION 4 */}
        {/* SECTION 5 */}
        <div className="split_box flip">
          <div className="box_left_img">
              <img id="projects" src={ project_steps } alt="projects steps" />
            </div>
          <div className="box_right_text">
            <p>
              <span>B</span>ut the learning doesn't stop there. TechByte Learning believes in providing our students with real-world experience to further enhance their skills and boost their career prospects. Throughout their journey with us, students will work together as teams on engaging and challenging capstone projects. These projects are built along the way, allowing students to apply the knowledge they have gained while getting hands-on experience in solving real-world problems. 
            </p>
          </div>
        </div>
        {/* END SECTION 5 */}
        {/* SECTION 6 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>A</span>dditionally, we offer a two-month internship program, where students have the opportunity to work alongside professionals in the industry. This internship program not only offers valuable insights into the world of web and software development but also allows students to fill out their portfolios with impressive real-world projects. Join TechByte Learning and gain the practical experience and confidence you need to excel in your career.
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584887055_68b0c67717.jpg" alt="Internships" />
          </div>
        </div>
        {/* END SECTION 6 */}
        {/* SECTION 7 */}
        <div className="large_box">
          <h2>
            Enroll With TechByte Learning Today
          </h2>
          <p>
            <span>T</span>o unlock a world of endless possibilities in the web development industry. Whether you're a beginner with no prior coding experience or an experienced programmer looking to expand your skill set, our course program will empower you to succeed.
          </p>
          <p>
            Don't miss out on this incredible opportunity to become a master in full stack programming with Python and React. Take the first step towards a rewarding career and join the Techbyte Learning family today!
          </p>
          <p>
            For more information contact us at <a id="career_link" href="mailto:admissions@beedev-services.com?subject=Admissions%20Inquiry%20">admissions@beedev-services.com</a> or call us at (570) 731-8660 to learn more and secure your spot. Limited seats available, so act now!
          </p>
          <Button to="/nexthive" text="Next Cohort" />
        </div>
        {/* END SECTION 7 */}
      </div>
    </main>
  );
};

export default WebDev;
