import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Apply from "./views/Apply";
import Assistance from "./views/Assistance";
import BadLink from "./views/BadLink";
import Careers from "./views/Careers";
import ChatBox from "./components/ChatBox.jsx"
import Contact from "./views/Contact";
import Cookies from "./components/Cookies";
import Footer from "./components/Footer";
import GoToButton from "./components/GoTop.jsx";
import Index from "./views/Index";
import NavBar from "./components/Navbar";
import NextHive from "./views/NextHive";
import OurHive from "./views/OurHive";
import Pricing from "./views/Pricing";
import Receipt from "./views/Receipt.jsx";
import Tutoring from "./views/Tutoring";
import WebDev from "./views/WebDev.jsx";
import GameDev from "./views/GameDev.jsx";

const App = () => {
  const [details, setDetails] = useState(""); 

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/tuitionassistance" element={<Assistance />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/gamedevelopment" element={<GameDev />} /> */}
        <Route path="/nexthive" element={<NextHive />} />
        <Route path="/ourhive" element={<OurHive />} />
        <Route path="/pricingplans" element={<Pricing setDetails={ setDetails } />} />
        <Route path="/receipt" element={<Receipt details={ details } />} />
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
