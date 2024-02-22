import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const OurHive = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Our Hive - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h1>Meet our Hive Members</h1>
          <div className="row wrap">
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurHive;

// import { useEffect } from "react";
// import { changeTitle } from "../utilities/utilityFunctions";
// import staffBios from "../utilities/staffBios";

// const OurHive = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     changeTitle("Our Hive - ");
//   }, []);

//   return (
//     <main>
//       <div className="wrapper">
//         <div className="our_hive_about_us">
//           <h1>Meet our Hive Members</h1>
//           <div className="row wrap">
//             {staffBios.map((member, index) => (
//               <div className="column" key={index}>
//                 <div className="card">
//                   <div className="">
//                     <img src={member.linkToImage} alt={member.name} />
//                     <h3 className="">{member.name}</h3>
//                     <h3>{member.position || "Position TBD"}</h3>
//                   </div>
//                   {/* BACK OF CARD */}
//                   <div className="">
//                     <h4>{"About: " + member.about}</h4>
//                     <h4>{"Location: " + member.location}</h4>
//                     <h4>{"Open to Mentoring/Tutoring: " + member.openToMentoringTutoring}</h4>
//                     <h4>{"Skills: " + member.skills}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default OurHive;
