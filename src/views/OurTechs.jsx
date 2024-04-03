import { useEffect, useState } from "react"
import CSS from "../components/CSS"
import HTML5 from "../components/HTML5"
import JavaScript from "../components/Javascript"
import Git from "../components/Git"
import Sass from "../components/Sass"
import Less from "../components/Less"
import VsCode from "../components/VsCode"
import GitHub from "../components/GitHub"
import Postman from "./Postman"
import Reactjs from "../components/Reactjs"
import Nodejs from "../components/Nodejs"
import MySQL from "../components/MySQL"
import Python from "../components/Python"
import Flask from "../components/Flask"
import PostgreSQL from "../components/PostgreSQL"
import Pandas from "../components/Pandas"
import Pug from "../components/Pug"

const OurTechs = () => {

        useEffect(() => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop -150,
                        behavior: 'smooth'
                    });
                }
            }
        }, []);

    return(
        <div className="wrapper">
            <div id="language_vscode" className="large_box">
                <VsCode />
            </div>
            <div id="language_html" className="large_box">
                <HTML5 />
            </div>
            <div id="language_css" className="large_box">
                <CSS />
            </div>
            <div id="language_javascript" className="large_box">
                <JavaScript />
            </div>
            <div id="language_sass" className="large_box">
                <Sass />
            </div>
            <div id="language_less" className="large_box">
                <Less />
            </div>
            <div id="language_git" className="large_box">
                <Git />
            </div>
            <div id="language_github" className="large_box">
                <GitHub />
            </div>
            <div id="language_reactjs" className="large_box">
                <Reactjs />
            </div>
            <div id="language_nodejs" className="large_box">
                <Nodejs />
            </div>
            <div id="language_postman" className="large_box">
                <Postman />
            </div>
            <div id="language_mysql" className="large_box">
                <MySQL />
            </div>
            <div id="language_python" className="large_box">
                <Python />
            </div>
            <div id="language_flask" className="large_box">
                <Flask />
            </div>
            <div id="language_postgresql" className="large_box">
                <PostgreSQL />
            </div>
            <div id="language_pug" className="large_box">
                <Pug />
            </div>
            <div id="language_pandas" className="large_box">
                <Pandas />
            </div>
            <div id="language_internship" className="large_box">
                
            </div>
            <div id="language_sylvester&tweety" className="large_box">
                
            </div>
        </div>
    )
}

export default OurTechs