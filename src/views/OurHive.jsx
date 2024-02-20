import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Employees from '../assets/json/employees.json';
import '../App.css';

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
          <div className="background">
            <div className="cardContent">
              {
                Employees && Employees.map(employee => {
                  return (
                    <div className="employeeCard" key={employee.id}>
                      <div className="cardFront">
                        <img src={employee.photo} />
                        <p className="cardText">{employee.firstName} {employee.lastName}</p>
                      </div>
                      <div className="cardBack">
                        <div className="cardText">
                          <p>{employee.position}</p>
                          <p>{employee.location}</p>
                          <p>{employee.about}</p>
                        </div>
                      </div>  
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurHive;
