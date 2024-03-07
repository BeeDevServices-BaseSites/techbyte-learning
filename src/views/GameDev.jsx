import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"

const GameDev = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Game Development - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://assets-global.website-files.com/6270e8022b05abb840d27d6f/631228480934f73f37428b74_b_Must-Have-Mobile-Game-Development-Tools-.png" alt="Game Dev" />
          </div>
          <div className="box_right_text">
            <h2>
              Level Up With
              <br />
              Game Development
            </h2>
            <p>
              <span>T</span>echbyte Learning is here to help you turn your passion for gaming into a reality.
            </p>
            <p>
              Let us help you level up your skills with our hands-on 2-D game development course.
            </p>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>A</span>re you passionate about gaming and interested in learning how to create your own 2-D games? Look no further than our part-time 2-D game development course! This hands-on program is perfect for beginners and intermediate learners looking to enhance their skills in game design and development. 
            </p>
            <p>
              Our experienced instructors will guide you through the fundamentals of game development, including design principles, prototyping, and core knowledge in game architecture.
            </p>
          </div>
          <div className="box_right_img">
              <img src="https://t3.ftcdn.net/jpg/05/74/05/78/360_F_574057895_pHarnRepLEdwoGuXhq9YZqPihKaBjUoU.jpg" alt="Game Controller" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <Button to="/apply" text="APPLY NOW" />
          </div>
          <div className="box_right_text">
            <p>
              <span>Y</span>ou'll have the opportunity to expand your creativity and technical skills while working on exciting projects that showcase your talents. Whether you're looking to start a career in game development or simply want to pursue a fun hobby, our 2-D game development course is the perfect choice for aspiring game creators. 
            </p>
            <p>
              Don't miss out on this opportunity to turn your gaming dreams into reality - enroll today and unlock your potential in the world of game design!
            </p>
          </div>
        </div>
        {/* END SECTION 3 */}
      </div>
    </main>
  );
};

export default GameDev;
