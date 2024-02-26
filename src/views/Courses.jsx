import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button.jsx"
import html5 from "../assets/images/html5.png"
import css from "../assets/images/css.png"
import javascript from "../assets/images/javascript.png"
import bootstrap from "../assets/images/bootstrap.png"
import sass from "../assets/images/sass.png"
import node from "../assets/images/nodejs.png"
import express from "../assets/images/express.png"
import react from "../assets/images/reactjs.png"
import mysql from "../assets/images/mysql.png"
import python from "../assets/images/python.png"
import django from "../assets/images/django.png"
import flask from "../assets/images/flask.png"
import postgres from "../assets/images/postgres.png"
import step_01 from "../assets/images/step_01.png"
import step_02 from "../assets/images/step_02.png"
import step_03 from "../assets/images/step_03.png"
import step_04 from "../assets/images/step_04.png"
import step_05 from "../assets/images/step_05.png"
import step_06 from "../assets/images/step_06.png"
import internship from "../assets/images/internship.jpg"

const Courses = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Courses - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="large_box">
          <h2>
            UNLOCK YOUR FULL POTENTIAL IN WEB DEVELOPMENT!
          </h2>
          <p>
            <span>A</span>re you ready to dive into the thrilling world of web development and become a master in full stack programming? Look no further!
          </p>
          <p>
            Techbyte Learning is excited to offer you an exclusive opportunity to enroll in our comprehensive course program in web development.
          </p>
          <br />
          <h2>
            Cutting-edge classes that appeal to different interests and skill levels.
          </h2>
          <Button to="/apply" text="APPLY NOW" />
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
            <img id="html5" src={html5} alt="html5" />
            <img id="css" src={css} alt="CSS" />
            <img id="javascript" src={javascript} alt="JavaScript" />
            <img id="bootstrap" src={bootstrap} alt="Bootstrap" />
            <img id="sass" src={sass} alt="Sass" />
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
            <img id="mysql" src={mysql} alt="MySQL" />
            <img id="expressjs" src={express} alt="Express JS" />
            <img id="reactjs" src={react} alt="React JS" />
            <img id="nodejs" src={node} alt="Node JS" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="split_box flip">
          <div className="course_icons">
            <img id="python" src={python} alt="Python" />
            <img id="django" src={django} alt="Django" />
            <img id="flask" src={flask} alt="Flask" />
            <img id="postgres" src={postgres} alt="PostgreSQL" />
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
          <div className="project_icon_container">
            <div className="project_icons">
              <img id="projects" src={step_01} alt="path forward" />
              <img id="projects" src={step_02} alt="path forward" />
              <img id="projects" src={step_03} alt="path forward" />
            </div>
            <div className="project_icons">
              <img id="projects" src={step_04} alt="path forward" />
              <img id="projects" src={step_05} alt="path forward" />
              <img id="projects" src={step_06} alt="path forward" />
            </div>
          </div>
          <div className="box_right_text">
            <p>
              <span>B</span>ut the learning doesn't stop there. TechByte Learning believes in providing our students with real-world experience to further enhance their skills and boost their career prospects. Throughout their journey with us, students will work on engaging and challenging capstone projects. These projects are built along the way, allowing students to apply the knowledge they have gained while getting hands-on experience in solving real-world problems. 
            </p>
          </div>
        </div>
        {/* END SECTION 5 */}
        {/* SECTION 6 */}
        <div className="split_box flip">
          <div className="box_left_text">
            <p>
              <span>A</span>dditionally, we offer a two-month internship program, where students have the opportunity to work alongside professionals in the industry. This internship program not only offers valuable insights into the world of web and software development but also allows students to fill out their portfolios with impressive real-world projects. Join TechByte Learning and gain the practical experience and confidence you need to excel in your career.
            </p>
          </div>
          <div className="box_right_img">
            <img id="intern" src={internship} alt="intern" />
          </div>
        </div>
        {/* END SECTION 6 */}
        {/* SECTION 7 */}
        <div className="large_box">
          <h2>
            Enroll With TechByte Learning Now!!
          </h2>
          <p>
            <span>T</span>o unlock a world of endless possibilities in the web development industry. Whether you're a beginner with no prior coding experience or an experienced programmer looking to expand your skill set, our course program will empower you to succeed.
          </p>
          <p>
            Don't miss out on this incredible opportunity to become a master in full stack programming with Python and React. Take the first step towards a rewarding career and join the Techbyte Learning family today!
          </p>
          <p>
            For more information contact us at <a id="career_link"href="mailto:info@beedev-services.com?subject=Requesting%Course%20Info%20">info@beedev-services.com</a>&nbsp;
            or call us at 867-5309 to learn more and secure your spot. Limited seats available, so act now!
          </p>
          <Button to="/apply" text="APPLY NOW" />
        </div>
        {/* END SECTION 7 */}
      </div>
    </main>
  );
};

export default Courses;
