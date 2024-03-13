import staff from "../assets/json/employees.json";
import StaffCard from "../components/StaffCard";

const OurHive = () => {

  const card_data = staff.filter(staff => staff.is_active);

  return (
    <main>
      <div className="wrapper">
        <div className="split_box">
          <div className="box_left_text">
            <h2>Meet Our Hive</h2>
            <p><span>W</span>hether guiding students through the latest programming languages, unlocking the secrets of cutting-edge technologies, or fostering innovative problem-solving skills, the TechByte Learning staff is committed to empowering learners with the tools they need to succeed in todays fast-paced digital landscape. Get ready to learn from the best and embark on a transformative journey with our hive of skilled instructors.</p>
          </div>
          <div className="box_right_img">
            <img src="https://live.staticflickr.com/65535/53584637726_d30bf97498_z.jpg" alt="Instructor" />
          </div>
        </div>
        <StaffCard card_data = { card_data }  show_tech = { false } />
      </div>
    </main>
  );
};

export default OurHive;