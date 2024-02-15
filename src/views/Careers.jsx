import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Careers - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            CAREERS PAGE
          </h2>
          <h3>
            We are actively seeking highly skilled and talented developers with expertise in various technologies.
          </h3>
          <h3>
            Send inquiries to <a id="career_link"href="mailto:careers@beedev-services.com?subject=Career%20Inquiry%20">careers@beedev-services.com</a> 
          </h3>
        </div>
        {/* Positions Container */}
        <div className="split_box">
          {/* Position 1 */}
          <div className="box_left_text add_background">
            <h2>Web Developer</h2>
            <h2>Junior</h2>
            <br />
            <h4>
              Position Type: Full Time
            </h4>
            <h4>
              Location: Remote
            </h4>
            <br />
            <h4>
              Requirements:
            </h4>
            <ul>
              <li>
                Proficiency in React, Express, Python Django, and other relevant technologies
              </li>
              <li>
                Strong understanding of object-oriented programming (OOP) concepts
              </li>
              <li>
                Experience working with relational databases like MySQL or PostgreSQL
              </li>
              <li>
                Familiarity with revision control systems such as git
              </li>
              <li>
                Excellent verbal and written communication skills to effectively collaborate with designers, developers, and stakeholders.
              </li>
              <li>
                Ability to work in a fast-paced, agile development environment.
              </li>
            </ul>
            <br />
            <h4>
              Responsibilities:
            </h4>
            <ul>
              <li>
                Designing and developing efficient, scalable, and user-friendly web applications
              </li>
              <li>
                Utilizing your expertise in React, Express, Python Django, and other technologies to handle front-end frameworks, backend servers, and database management
              </li>
            </ul>
            <br />
            <h4>
              In This Roll You'll Be Able To:
            </h4>
            <ul>
              <li>
                Opportunity to showcase your skills and contribute to exciting projects
              </li>
              <li>
                Collaborative and innovative work environment
              </li>
              <li>
                You will be supported by mentors and teammates as you work on tasks and projects.
              </li>
              <li>
                Collaborative and innovative work environment
              </li>
            </ul>
          </div>
          {/* End Position 1 */}
          {/* Position 2 */}
          <div className="box_right_text add_background">
            <h2>
              UI/UX Developer
            </h2>
            <br />
            <h4>
              Position Type: Full Time
            </h4>
            <h4>
              Location: Remote
            </h4>
            <br />
            <h4>
              Requirements:
            </h4>
            <ul>
              <li>
                Strong proficiency in HTML5, CSS3, JavaScript, and various front-end frameworks.
              </li>
              <li>
                Experience with UI/UX design tools such as Figma, Sketch, or Adobe XD.
              </li>
              <li>
                Familiarity with responsive design principles and design systems. With ability to prototype and iterate designs quickly based on user feedback.                
              </li>
              <li>
                Excellent verbal and written communication skills to effectively collaborate with designers, developers, and stakeholders.
              </li>
              <li>
              Ability to work in a fast-paced, agile development environment.
              </li>
            </ul>
            <br />
            <h4>
              Responsibilities:
            </h4>
            <ul>
              <li>
                Collaborate with product managers and designers to understand user requirements and create user-centered designs.
              </li>
              <li>
                Develop wireframes, interactive prototypes, and production-ready UI assets using design tools such as Figma, Sketch, or Adobe XD.
              </li>
              <li>
                Build responsive and intuitive user interfaces using HTML, CSS, and JavaScript frameworks such as React, Angular, or Vue.js.                </li>
              <li>
                Ensure cross-browser, cross-platform, and cross-device compatibility, and optimize performance of UI/UX elements.Ensure cross-browser, cross-platform, and cross-device compatibility, and optimize performance of UI/UX elements.
              </li>
              <li>
                Collaborate with the development team to create and maintain a design system to ensure consistency across all digital products.                </li>
              <li>
                Collaborate with the development team to create and maintain a design system to ensure consistency across all digital products.                </li>
            </ul>
          </div>
          {/* End Position 2 */}
          {/* Position 3 */}
          <div className="box_left_text add_background">
            <h2>Student Recruiter and Onboarding Specialist</h2>
            <br />
            <h4>
              Position Type: Full Time
            </h4>
            <h4>
              Location: Remote
            </h4>
            <br />
            <h4>Responsibilities:</h4>
            <h4>
              1. Student Recruitment:
            </h4>
            <ul>
              <li>
                Develop and execute recruitment strategies to attract and enroll prospective students.
              </li>
              <li>
                Utilize various channels, including social media, online platforms, and community outreach, to reach out to and engage with prospective students.
              </li>
              <li>
                Conduct informational sessions and presentations to showcase the organization's offerings and benefits to potential students.
              </li>
            </ul>
            <br />
            <h4>
              2. Student Onboarding:
            </h4>
            <ul>
              <li>
                Develop and implement an onboarding process to ensure new students have a smooth transition into the organization.                </li>
              <li>
                Coordinate and conduct orientation sessions to familiarize new students with organizational policies, resources, and expectations.
              </li>
              <li>
                Serve as a primary point of contact for new students, answering their questions and addressing concerns during the onboarding process.
              </li>
              <li>
                Collaborate with various departments to ensure all necessary paperwork, systems access, and resources are provided to incoming students.
              </li>
              <li>
                Continuously evaluate and improve the onboarding process based on feedback and benchmarks.
              </li>
            </ul>
            <br />
            <h4>
              Requirements:
            </h4>
            <ul>
              <li>
                Bachelor's degree in Human Resources, Education, or a related field (preferred).
              </li>
              <li>
                Proven experience in recruitment, onboarding, or student services in an educational environment.
              </li>
              <li>
                Strong interpersonal and communication skills, both written and verbal. Including the ability to engage and connect with a diverse range of students and build meaningful relationships.
              </li>
              <li>
                Excellent organizational skills with the ability to multitask and prioritize responsibilities.
              </li>
              <li>
                Proficient in using recruitment software, social media platforms, and other technology tools for recruitment purposes.
              </li>
              <li>
                Knowledge of educational policies, trends, and regulations.
              </li>
            </ul>
          </div>
          {/* End Position 3 */}
          {/* Position 4 */}
          <div className="box_right_text add_background">
            <h2>
              HR Coordinator
            </h2>
            <br />
            <h4>
              Position Type: Full Time
            </h4>
            <h4>
              Location: Remote
            </h4>
            <br />
            <h4>
              Responsibilities:
            </h4>
            <ul>
              <li>
              Assist in recruitment processes, including job postings, reviewing resumes, scheduling interviews, conducting background checks, and preparing offer letters.                </li>
              <li>
              Coordinate the onboarding process for new hires, including conducting orientation sessions, collecting required documents, and assisting with the completion of new hire paperwork.                </li>
              <li>
              Maintain accurate and up-to-date employee records, including personnel files, benefits enrollment, time-off requests, and other relevant documentation.
              </li>
              <li>
              Assist with payroll administration activities, including timekeeping, leave management, and coordinating with the payroll department to ensure accurate and timely payroll processing                </li>
              <li>
              Coordinate employee benefits programs, including enrollment, changes, and serving as the point of contact for benefit-related queries.
              </li>
              <li>
              Assist in maintaining compliance with employment laws and regulations, including monitoring changes in legislation and participating in related training.
              </li>
              <li>
              Handle employee inquiries related to HR policies, procedures, and benefits, providing accurate information and timely resolution.
              </li>
              <li>
              aintain professional and collaborative relationships with employees, liaising with various departments to ensure effective communication and employee satisfaction.                </li>
            </ul>
            <br />
            <h4>
                Requirements:
            </h4>
            <ul>
              <li>
                Bachelor's degree in Human Resources, Business Administration, or a related field.                </li>
              <li>
                Proven work experience as an HR Coordinator or similar HR role.
              </li>
              <li>
                Knowledge of labor laws and regulations.
              </li>
              <li>
                Strong interpersonal skills, with the ability to communicate effectively and maintain confidentiality.
              </li>
              <li>
                Detail-oriented approach with excellent organizational skills. Including the ability to multitask, prioritize workload, and work under minimal supervision.
              </li>
              <li>
                Highly adaptable and flexible in a fast-paced, dynamic work environment.
              </li>
            </ul>
          </div>
          {/* End Position 4 */}
        </div>
        {/* End Positions Container */}
      </div>
    </main>
  );
};

export default Careers;
