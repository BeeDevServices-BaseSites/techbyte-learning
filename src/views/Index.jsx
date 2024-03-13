import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Honeycomb from "../components/Honeycomb";
import Button from "../components/Button";

const Index = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Welcome - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text honeycomb_background">
            <h2>
              Bee Part Of Our Hive
            </h2>
            <p>
              <span>A</span>ttention, aspiring tech enthusiasts, busy bees of the coding world, and those eager to expand their horizons! At TechByte, we believe in the power of education and hands-on experience to shape the future generation of web developers. Just as bees are vital to the ecosystem, we aim to be essential for your growth in the ever-evolving tech industry.
              </p>
            <p>
              With TechByte, not only will you gain proficiency in cutting-edge technologies that are shaping the future. We help shape your portfolio while preparing you for the real world with built in group projects and internship opportunities. 
            </p>
            <p>
              Our curriculum is meticulously designed to focus on the latest trends, ensuring you stay ahead of the game. We offer a comprehensive learning experience with web development, game development, DevOps and more...
            </p>
          </div>
          <div className="box_right_honeycomb">
            <Honeycomb />
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Building a Solid Foundation
            </h2>
            <p>
              <span>W</span>hether you're looking to pursue a career in web development or game development, our courses start by introducing students to the basics of programming languages such as HTML, CSS, and JavaScript. 
            </p>
            <p>
              Through hands-on projects and exercises, students learn how to design and create websites, games, and applications. This hands-on approach allows beginners to see immediate results and gain confidence in their ability to code. 
            </p>
            <p>
              Our skilled instructors will guide you through each step, providing hands-on projects and practical exercises to ensure a strong understanding of the subject matter. 
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53585067135_b6189d1e41_w.jpg" alt="Teaching" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src="https://live.staticflickr.com/65535/53584763389_90d41d1bc3.jpg" alt="newest tech" />
          </div>
          <div className="box_right_text">
            <h2>
              Web Development
            </h2>
            <p>
              <span>R</span>eady to take your skills to the next level? Our TechByte program extends beyond the basics, introducing Python and JavaScript with React.js. Like bees who meticulously gather nectar from diverse sources, we encourage our students to explore different programming languages. With our expert instructors, you'll master these essential tools, enabling you to create dynamic and interactive web applications!
            </p>
            <br />
            <Button to="/webdevelopment" text="Web Development" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src="https://live.staticflickr.com/65535/53584763384_c5ff93b210_c.jpg" alt="Gaming Development" />
          </div>
          <div className="box_right_text">
            <h2>
              Game Development
            </h2>
            <p>
              <span>O</span>ur 2D Game Design program goes beyond the basics to cover everything you need to know to create engaging and exciting web games. With our experienced instructors leading the way, you'll delve into topics such as game architecture, graphics and rendering, sound/music design, input methods, game logic, and more. 
            </p>
            <p>
              Join TechByte Learning today and start your journey to becoming a game design master!
            </p>
            <br />
            <Button to="/gamedevelopment" text="Game Development" />
          </div>
        </div>
        {/* END SECTION 4 */}
        {/* SECTION 5 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Projects and Internship Opportunities
            </h2>
            <p>
              <span>A</span>t TechByte, we nurture the growth of our students through real-world experience. Our curriculum places a strong emphasis on practical application, offering a range of exciting projects that allow you to showcase your skills.
            </p>
            <p>
              Additionally, we provide exceptional internship opportunities, allowing you to build your portfolio while learning from industry professionals. Stand out from the hive and leave with a buzzing portfolio that catches the attention of top recruiters!
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584662238_fec483cc56_w.jpg" alt="projects" />
          </div>
        </div>
        {/* END SECTION 5 */}
        {/* SECTION 6 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Mini Course Sessions
            </h2>
            <p>
              <span>N</span>eed a quick brushup? Our mini courses cover critical topics such as Git, terminal basics, SQL statements/queries, and more. Whether you're a beginner looking to build a strong foundation or an experienced developer wanting to sharpen your skills, our mini courses are designed to help you quickly achieve your programming goals.
            </p>
            <Button to="/minicourses" text="Mini Courses" />
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584846178_ff5fddf5ae.jpg" alt="projects" />
          </div>
        </div>
        {/* END SECTION 6 */}
        {/* SECTION 7 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <img src="https://live.staticflickr.com/65535/53584662203_d8a8159056.jpg" alt="your career" />
          </div>
          <div className="box_right_text">
            <h2>
              Join TechByte and Reach New Heights
            </h2>
            <p>
              <span>D</span>on't get stuck in the honeycomb of outdated techniques! Embrace the future with TechByte Learning and pave your way to success in web development. Our industry-leading technologies, comprehensive curriculum, and focus on practical experience will set you apart from the swarm. Enroll with TechByte today  and let us help you build a rewarding career!
            </p>
          </div>
        </div>
        {/* END SECTION 7 */}
        
      </div>
    </main>
  )
};

export default Index;