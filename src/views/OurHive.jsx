import React, { useState } from 'react';
import staffBios from "../utilities/staffBios";
import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from 'react-icons/md';

const OurHive = () => {
  // Using an array to track the flip state of each box
  const [flippedStates, setFlippedStates] = useState(
    new Array(staffBios.length).fill(false) // Initialize all as not flipped
  );

  const handleFlip = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  return (
    <div className="wrapper" style={{marginBottom:'20vh'}}>
      <h1 className="hive-title" style={{marginTop: "50px" }}>Meet Our Hive Members</h1>
      <div className="hive-container">
        {staffBios.map((employee, index) => (
          <div className={`${flippedStates[index] ? <MdArrowForward/> : 'here'}`}>
            <div key={employee.id} className={`flip_box ${flippedStates[index] ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
              <div className="front">
                {/* Front content - Displaying each person's info */}
                <div className="grid-item">
                  <img src={employee.linkToImage || 'https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg'} alt={employee.fName} className="hive-bio-image" />
                  <div className='flex-bottom-info'>
                    <div className='front-bottom-info'>
                      <p className='employee-name'>{employee.fName} {employee.lName}</p>
                      <p className='employee-position'>{employee.position}</p>
                    <div className='rightArrow'><MdArrowForward/></div>
                  </div>
                  </div>

                </div>
              </div>
              <div className="back">
                {/* Back content - Could include more detailed info */}
                <div>
                  <p className='back-first-name'>More about {employee.fName}</p>
                  {/* Example: Add more detailed information here */}
                  <div>{`${employee.about || 'about incoming for this staff member'}`}</div>
                  <br />
                  <div>{`${employee.skills || 'html, javascript, react, python, CSS, java, spring, '}`}</div>
                  <br />
                  <div className='leftArrow'><MdArrowBack/></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurHive;


// import React, { useState } from 'react';
// import staffBios from "../utilities/staffBios";

// const OurHive = () => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <>
//       <div className="wrapper">
//         <h1 className="hive-member-title">Meet Our Hive Members</h1>
//         <div className="container">
//           <div className={`flip_box ${isFlipped ? 'flipped' : ''}`}>
//             <div className="front">
//               {/* Front content */}
//               {staffBios && staffBios.map((employee, index)=> {
//                 return(
//                   <div>
//                     <div>
//                       {employee.name}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//             <div className="back">
//               {/* Back content */}
//               <div>

//               </div>
//             </div>
//           </div>

//           <div className="r_wrap" onClick={handleFlip}>
//             <div className={`b_round ${isFlipped ? 'b_round_back_hover' : ''}`}></div>
//             <div className="s_round">
//               <div className={`s_arrow ${isFlipped ? 's_arrow_rotate' : ''}`}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurHive;


// import React, { useState } from 'react';
// import staffBios from "../utilities/staffBios";

// const OurHive = () => {
//   return (
//     <div className="wrapper">
//       <h1 className="hive-member-title">Meet Our Hive Members</h1>
//       {/* <div className="grid-container">
//         {staffBios.map((employee, index) => (
//           <div key={index} className={`grid-item ${flippedIndex === index ? 'is-flipped' : ''}`} onClick={() => handleFlip(index)}>
//             <div className="card">
//               <div className="card-front">
//                 <img src={employee.linkToImage || 'https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg'} alt={employee.name} className="hive-bio-image"/>
//                 <div className="employee-info">
//                   <h2>{employee.name}</h2>
//                   <p>{employee.location}</p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <div className="employee-info-back">
//                   <p>{employee.skills}</p>
//                   <p>{employee.about}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> */}

//     </div>
//   );
// }

// export default OurHive;


// https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg
// import staffBios from "../utilities/staffBios";


// =========================NEW ONE============================
// import { useEffect } from "react";
// import { changeTitle } from "../utilities/utilityFunctions";
// // import Employees from '../assets/json/employees.json';
// import '../App.css';
// import staffBios from "../utilities/staffBios";


// const OurHive = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0),
//       changeTitle("Our Hive - ")
//   }, [])

//   return (
//     <div className="wrapper">
//       <h1 className="hive-member-title">Meet Our Hive Members</h1>
//       <div className="grid-container">
//         {
//           staffBios && staffBios.map((employee, index) => {
//             return (
//               <div>
//                 <div key={index} className="grid-item">
//                   <img src={employee.linkToImage} alt="" className="hive-bio-image"/>
//                 </div>
//                 <div>
//                   {employee.location}
//                 </div>
//               </div>
//             )
//           })}
//       </div>
//     </div>
//   )
// }

// export default OurHive


// =============================CURRENT FILE WORKING WITH=============================

// import { useEffect } from "react";
// import { changeTitle } from "../utilities/utilityFunctions";
// // import Employees from '../assets/json/employees.json';
// import '../App.css';
// import staffBios from "../utilities/staffBios";

// const OurHive = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0),
//       changeTitle("Our Hive - ")
//   }, [])

//   return (
//     <main>
//       <div className="wrapper">
//         <div className="large_box">
//           <h1>Meet our Hive Members</h1>
//           <div className="background">
//             <div className="cardContent">
//               {
//                 staffBios && staffBios.map(employee => {
//                   return (
//                     <div className="employeeCard" key={employee.id}>
//                       <div className="cardFront">
//                         <img src={employee.linkToImage} alt={employee.name} className="employeeCardImage" />
//                         <div className="employeeFrontDetails">
//                           <p className="employeeName">{employee.name}</p>
//                           <p className="employeePosition">{employee.position}</p>
//                         </div>
//                       </div>
//                       <div className="cardBack">
//                         <p className="employeeLocation">{employee.location}</p>
//                         <p className="employeeAbout">{employee.about}</p>
//                         {/* <p className="employeeSkills">{employee.skills.join(', ')}</p> */}
//                         {/* Assuming skills is an array, join with commas for display */}
//                       </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default OurHive;

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
