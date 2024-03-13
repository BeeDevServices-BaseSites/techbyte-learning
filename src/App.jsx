import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AboutUs from "./views/AboutUs.jsx";
import Apply from "./views/Apply";
import Assistance from "./views/Assistance";
import BadLink from "./views/BadLink";
import Careers from "./views/Careers";
import ChatBox from "./components/ChatBox.jsx"
import Cookies from "./components/Cookies";
import Footer from "./components/Footer";
import GoToButton from "./components/GoTop.jsx";
import Index from "./views/Index";
import MiniCourses from "./views/MiniCourses.jsx";
import NavBar from "./components/Navbar";
import NextHive from "./views/NextHive";
import OurHive from "./views/OurHive";
import Services from "./views/Services.jsx";
import Receipt from "./views/Receipt.jsx";
import Tutoring from "./views/Tutoring";
import WebDev from "./views/WebDev.jsx";
import GameDev from "./views/GameDev.jsx";
// import DevOps from "./views/DevOps.jsx";
import BookTutor from "./views/BookTutor.jsx";
import TutoringReceipt from "./views/TutoringReceipt.jsx";

const App = () => {
  const [details, setDetails] = useState(""); 

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/tuitionassistance" element={<Assistance />} />
        <Route path="/booktutoring" element={<BookTutor />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/devops" element={<DevOps />} /> */}
        <Route path="/gamedevelopment" element={<GameDev />} />
        <Route path="/minicourses" element={<MiniCourses />} />
        <Route path="/nexthive" element={<NextHive />} />
        <Route path="/ourhive" element={<OurHive />} />
        <Route path="/receipt" element={<Receipt details={ details } />} />
        <Route path="/services" element={<Services setDetails={ setDetails } />} />
        <Route path="/tutoringreceipt" element={<TutoringReceipt details={ details } />} />
        <Route path="/tutoring" element={<Tutoring />} />
        <Route path="/webdevelopment" element={<WebDev />} />
        <Route path="/:bad/*" element={<BadLink/>} />
      </Routes>
      <ChatBox />
      <Cookies />
      <GoToButton />
      <Footer />
    </>
  );
};

export default App;
