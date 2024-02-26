import React, { useState } from 'react';
import staffBios from "../utilities/staffBios";
import Card from '../components/Card';

const OurHive = () => {
  const [flippedStates, setFlippedStates] = useState(new Array(staffBios.length).fill(false));

  const handleFlip = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  return (
    <div className="wrapper" style={{ marginBottom: '20vh' }}>
      <h1 className="hive-title" style={{ marginTop: "50px" }}>Meet Our Hive Members</h1>
      <div className="hive-container">
        {staffBios.map((employee, index) => (
          <Card
            key={employee.id}
            employee={employee}
            isFlipped={flippedStates[index]}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurHive;

// =============================OLD DYNAMIC FILE=============================
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
