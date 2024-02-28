import React from 'react';

const Card = ({ employee, isFlipped, onFlip }) => {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
            <div className="card-front">
                {/* Front side content */}
                <img src={employee.linkToImage || 'https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg'} className='employee-image'/>
                <h2>{employee.fName} {employee.lName}</h2>
                <p>{employee.position}</p>
            </div>
            <div className="card-back">
                {/* Back side content */}
                <h4>More about {employee.fName}</h4>
                <p>{employee.about}</p>
                <div className="skills">
                    {employee.skills.map(skill => <span key={skill}>{skill}</span>)}
                </div>
            </div>
        </div>
    );
};

export default Card;


// ============================OLD NEW VERSION TO REVERT TO========================================
// import React from 'react';
// import { MdArrowForward, MdArrowBack } from 'react-icons/md';

// const Card = ({ employee, isFlipped, onFlip }) => {
//     return (
//         <div className={`flip_box ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>

//             <div className="front">
//                 {/* Front content */}
//                 <div className="grid_item">
//                     <img src={employee.linkToImage || 'https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg'} alt={`${employee.fName} ${employee.lName}`} className="" />
//                     <div className=''>
//                         <div className='front_bottom_info'>
//                             <p className='employee_name'>{employee.fName} {employee.lName}</p>
//                             <p className='employee_position'>{employee.position}</p>
//                             <div className='right_arrow'><MdArrowForward /></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="back">
//                 {/* Back content */}
//                 <div>
//                     <p className='back_first_name'>More about {employee.fName}</p>
//                     <h5>About</h5>
//                     <div className="employees_about">
//                         {employee.about || 'About information incoming for this staff member.'}
//                     </div>
//                     <br />
//                     <h5>Skills</h5>
//                     <div className="employees_skills">
//                         {employee.skills ? (
//                             employee.skills.join(' | ')
//                         ) : 'Skills incoming for this staff member, please wait...'}
//                     </div>
//                     <div className='left_arrow'><MdArrowBack /></div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Card;
