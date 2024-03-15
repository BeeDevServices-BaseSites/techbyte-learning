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
            <img src="https://live.staticflickr.com/65535/53585011419_9b56ae6b3e_c.jpg" alt="Game Dev" />
          </div>
          <div className="box_right_text">
            <h2>
              Level Up With
              <br />
              Game Development
            </h2>
            <p>
              <span>A</span>re you interested in learning the ins and outs of game design but don't have the time to commit to a full-time program?
            </p>
            <p>
              TechByte Learning's part-time online course will help you level up your skills with our hands-on 2D game development course.
            </p>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>W</span>e take a practical approach to simplifying math concepts into formulas that can be easily applied in game development. Instead of focusing on the complex math behind the formulas, our instructors emphasize understanding and utilizing existing formulas to create dynamic and engaging games. We highlight the relevance of physics and trigonometry in game development, showcasing how these principles can be used to enhance gameplay and create realistic virtual worlds. 
            </p>
            <p>
              Our goal is to equip you with the knowledge and skills needed to create successful games without the need to create new formulas.ur experienced instructors will guide you through the basics of game development, including design principles, prototyping, and core knowledge in game architecture.
            </p>
          </div>
          <div className="box_right_img">
              <img src="https://live.staticflickr.com/65535/53584687736_147177fc60.jpg" alt="Game Controller" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_img">
            <img src="https://live.staticflickr.com/65535/53587739927_a6abc3d958.jpg" alt="gaming code" />
          </div>
          <div className="box_right_text">
            <p>
              <span>O</span>ur experienced instructors will guide you through the basics of game development, including design principles, prototyping, and core knowledge in game architecture. From the philosophy behind successful game design to wireframing, choosing the right platform, and various monetization choices, our course covers all the essential topics to help you create engaging and immersive 2D web games. 
            </p>
            <p>
              Whether you're looking to start a career in game development or simply want to pursue a fun hobby, our 2D game development course is the perfect choice for aspiring game creators.
            </p>
          </div>
          {/* END SECTION 3 */}
          <div className="split_box">
            <div className="box_left_text">
                <p>
                  <span>L</span>et TechByte Learning give you the opportunity to expand your creativity and technical skills while working on exciting projects that showcase your talents, turning your gaming dreams into reality.
                </p>
            </div>
            <div className="box_right_text">
              <Button to="/nexthive" text="Next Cohort" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameDev;
