import React from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const Card = ({ employee, isFlipped, onFlip }) => {
    return (
        <div className={`flip_box ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>

            <div className="front">
                {/* Front content */}
                <div className="grid-item">
                    <img src={employee.linkToImage || 'https://img1.pnghut.com/1/15/9/DLRVX7WYLt/silhouette-art-user-profile-neck-cheek.jpg'} alt={`${employee.fName} ${employee.lName}`} className="hive-bio-image" />
                    <div className='flex-bottom-info'>
                        <div className='front-bottom-info'>
                            <p className='employee-name'>{employee.fName} {employee.lName}</p>
                            <p className='employee-position'>{employee.position}</p>
                            <div className='rightArrow'><MdArrowForward /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back">
                {/* Back content */}
                <div>
                    <p className='back-first-name'>More about {employee.fName}</p>
                    <h5>About</h5>
                    <div className="employees-about">
                        {employee.about || 'About information incoming for this staff member.'}
                    </div>
                    <br />
                    <h5>Skills</h5>
                    <div className="employees-skills">
                        {employee.skills ? (
                            employee.skills.join(' | ')
                        ) : 'Skills incoming for this staff member, please wait...'}
                    </div>
                    <div className='leftArrow'><MdArrowBack /></div>
                </div>
            </div>

        </div>
    );
};

export default Card;
