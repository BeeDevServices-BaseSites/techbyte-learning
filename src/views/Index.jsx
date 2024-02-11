import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import dev_instruction from "../assets/images/dev_instruction.jpg"
import react_python from "../assets/images/react_and_python.jpg"

const Index = () => {
  useEffect(() => changeTitle(""), []);
  return (
    <main >
      <div className="wrapper">
        <div className="large_box">
          <h2>
            BEE PART OF OUR HIVE!
          </h2>
          <h3>
            Introducing BeeDev - where learning meets industry-leading technologies and builds a solid foundation in web development! 🐝🌐
          </h3>
          <p><span>A</span>ttention, aspiring tech enthusiasts, busy bees of the coding world, and those eager to expand their horizons! At BeeDev, we believe in the power of education and hands-on experience to shape the future generation of web developers. Just as bees are vital to the ecosystem, we aim to be essential for your growth in the ever-evolving tech industry.</p>
          <p><span>W</span>ith BeeDev, you'll gain proficiency in cutting-edge technologies that are shaping the future. Our curriculum is meticulously designed to focus on the latest trends, ensuring you stay ahead of the game. We offer a comprehensive learning experience that encompasses web fundamentals, moving to Python, JavaScript with React.js, and so much more!</p>




          <p>🎓 Projects and Internship Opportunities 🎓 At BeeDev, we nurture the growth of our students through real-world experience. Our curriculum places a strong emphasis on practical application, offering a range of exciting projects that allow you to showcase your skills. Additionally, we provide exceptional internship opportunities, allowing you to build your portfolio while learning from industry professionals. Stand out from the hive and leave with a buzzing portfolio that catches the attention of top recruiters!</p>
          <p>🌐 Join BeeDev and Reach New Heights in Web Development! 🌐 Don't get stuck in the honeycomb of outdated techniques! Embrace the future with BeeDev and pave your way to success in web development. Our industry-leading technologies, comprehensive curriculum, and focus on practical experience will set you apart from the swarm. Enroll with BeeDev today and let us channel your passion into productive learning, preparing you to thrive in the buzzing world of web development!</p>
          <p>Remember, bees are not just hard workers; they are also crucial for the survival and development of the ecosystem. Likewise, BeeDev ensures your growth and opens up endless possibilities in the dynamic industry of web development. Buzz on over to BeeDev and let us help you build a rewarding career! 🐝🚀</p>
        </div>

      <div className="split_box">
        <div className="box_left_text">
          <h2>Building a Solid Foundation</h2>
          <p><span>J</span>ust as bees carefully construct their hives, we take pride in teaching our students the fundamentals of web development. From HTML and CSS to responsive web design, we believe in laying the groundwork for success. Our skilled instructors will guide you through each step, providing hands-on projects and practical exercises to ensure a strong understanding of the subject matter!</p>
        </div>
        <div className="box_right_img">
          <img src={dev_instruction} alt="Teaching" />
        </div>
      </div>

      <div className="split_box">
        <div className="box_left_img">
          <img src={react_python} alt="Teaching" />
        </div>
        <div className="box_right_text">
          <h2>React and Python</h2>
          <p><span>R</span>eady to take your skills to the next level? Our BeeDev program extends beyond the basics, introducing Python and JavaScript with React.js. Like bees who meticulously gather nectar from diverse sources, we encourage our students to explore different programming languages. With our expert instructors, you'll master these essential tools, enabling you to create dynamic and interactive web applications!</p>
        </div>
      </div>


      <div className="split_box">
        <div className="box_left_text">
          <h2>Projects and Internship Opportunities</h2>
          <p><span>A</span>t BeeDev, we nurture the growth of our students through real-world experience. Our curriculum places a strong emphasis on practical application, offering a range of exciting projects that allow you to showcase your skills. </p>
          <p><span>A</span>dditionally, we provide exceptional internship opportunities, allowing you to build your portfolio while learning from industry professionals. Stand out from the hive and leave with a buzzing portfolio that catches the attention of top recruiters!</p>
        </div>
        <div className="box_right_img">
          <img src={dev_instruction} alt="Teaching" />
        </div>
      </div>





      </div>
    </main>
  )
};

export default Index;
