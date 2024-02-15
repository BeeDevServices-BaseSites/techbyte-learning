import { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeTitle } from "../utilities/utilityFunctions";
import dev_instruction from "../assets/images/dev_instruction.jpg"
import react_python from "../assets/images/react_and_python.jpg"
import projects from "../assets/images/projects.png"
import newest_tech from "../assets/images/high_tech_dev.jpg"
import your_career from "../assets/images/your_career.png"
import Honeycomb from "../components/Honeycomb";

const Index = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("")
  },[])

  return (
    <main >
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="large_box">
          <h2>
            BEE PART OF OUR HIVE!
          </h2>
          <h3>
            Introducing TechByte - where learning meets industry-leading technologies and builds a solid foundation in web development!
          </h3>
          <p><span>A</span>ttention, aspiring tech enthusiasts, busy bees of the coding world, and those eager to expand their horizons! At TechByte, we believe in the power of education and hands-on experience to shape the future generation of web developers. Just as bees are vital to the ecosystem, we aim to be essential for your growth in the ever-evolving tech industry.</p>
          <p>With TechByte, you'll gain proficiency in cutting-edge technologies that are shaping the future. Our curriculum is meticulously designed to focus on the latest trends, ensuring you stay ahead of the game. We offer a comprehensive learning experience that encompasses web fundamentals, moving to Python, JavaScript with React.js, and so much more!</p>
        </div>
        <Link to="/courses" className="link">View Courses</Link>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <Honeycomb />
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>Building a Solid Foundation</h2>
            <p><span>J</span>ust as bees carefully construct their hives, we take pride in teaching our students the fundamentals of web development. From HTML and CSS to responsive web design, we believe in laying the groundwork for success. Our skilled instructors will guide you through each step, providing hands-on projects and practical exercises to ensure a strong understanding of the subject matter!</p>
          </div>
          <div className="box_right_img">
            <img src={dev_instruction} alt="Teaching" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src={react_python} alt="python and react" />
          </div>
          <div className="box_right_text">
            <h2>React and Python</h2>
            <p><span>R</span>eady to take your skills to the next level? Our TechByte program extends beyond the basics, introducing Python and JavaScript with React.js. Like bees who meticulously gather nectar from diverse sources, we encourage our students to explore different programming languages. With our expert instructors, you'll master these essential tools, enabling you to create dynamic and interactive web applications!</p>
          </div>
        </div>
        {/* END SECTION 4 */}
        {/* SECTION 5 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>Projects and Internship Opportunities</h2>
            <p><span>A</span>t TechByte, we nurture the growth of our students through real-world experience. Our curriculum places a strong emphasis on practical application, offering a range of exciting projects that allow you to showcase your skills. </p>
            <p>Additionally, we provide exceptional internship opportunities, allowing you to build your portfolio while learning from industry professionals. Stand out from the hive and leave with a buzzing portfolio that catches the attention of top recruiters!</p>
          </div>
          <div className="box_right_img">
            <img src={projects} alt="projects" />
          </div>
        </div>
        {/* END SECTION 5 */}
        {/* SECTION 6 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src={newest_tech} alt="newest tech" />
          </div>
          <div className="box_right_text">
            <h2>Join TechByte and Reach New Heights</h2>
            <p><span>D</span>on't get stuck in the honeycomb of outdated techniques! Embrace the future with TechByte and pave your way to success in web development. Our industry-leading technologies, comprehensive curriculum, and focus on practical experience will set you apart from the swarm. Enroll with TechByte today and let us channel your passion into productive learning, preparing you to thrive in the buzzing world of web development!</p>
          </div>
        </div>
        {/* END SECTION 6 */}
        {/* SECTION 7 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>Expanding Opportunities</h2>
            <p><span>T</span>echByte ensures your growth and opens up endless possibilities in the dynamic industry of web development. Buzz on over to TechByte and let us help you build a rewarding career!</p>
            <Link to="/nexthive" className="link">Next Cohort Dates</Link>
          </div>
          <div className="box_right_img">
            <img src={your_career} alt="your career" />
          </div>
        </div>
        {/* END SECTION 7 */}
      </div>
    </main>
  )
};

export default Index;