import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import animate from "./images/employee-icon-png-17.jpg";
import portf from './images/Aymen-designstyle-summer-m.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Firstsec from './Components/Firstsec.js';
import Section from './Components/Section.js';
import Secondsec from './Components/Secondsec.js';
import Thirdsec from './Components/Thirdsec.js';
import Skill from "./Components/Skill.js";


const words = ["fullstackdev", "frontenddev", "backenddev"];


const App = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentLetterIndex < words[currentWordIndex].length) {
                setDisplayedText(prevText => prevText + words[currentWordIndex][currentLetterIndex]);
                setCurrentLetterIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    deleteText();
                }, 1000); // Delay before deleting the word
            }
        }, 100); // Interval for each letter

        return () => clearInterval(interval);
    }, [currentLetterIndex, currentWordIndex]);

    const deleteText = () => {
        const interval = setInterval(() => {
            setDisplayedText(prevText => {
                if (prevText.length > 0) {
                    return prevText.slice(0, -1);
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        startTyping();
                    }, 500); // Delay before starting to type the next word
                    return prevText;
                }
            });
        }, 50); // Interval for deleting each letter
    };

    const startTyping = () => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentLetterIndex(0);
        setDisplayedText("");
    };

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <div className="firstSec">
                <div className="header">
                    <a href="http://localhost:3000/"><img src={portf} alt="photo" className="logo" /></a>
                    <ul className="nav navbar-nav navi">
                        <li className="active"><a href=".header">Home</a></li>
                        <li><a href="#2">Skills</a></li>
                        <li><a href="#3">Projects</a></li>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a className="connect" href="#">Let's Connect</a></li>
                    </ul>
                </div>

                <div className="imageanimate">
                    <div className="welcomediv">
                        <button className="welcomeBut">Welcome All In My Portfolio</button>
                        <p className="welcomeword">Hi! I'm Ayman Salem Saleh,</p>
                        <p className="word">{displayedText}

                        </p>
                        <p className="welcomeabout">Hello Everyone, I have 5 years of experience in Web Development</p>
                        <p className="welcomeconnect">Let's Connect <a href="#"><i className="far fa-arrow-alt-circle-right"></i></a></p>
                    </div>
                    <img src={animate} className="movingphoto" alt="photo" />
                </div>
            </div>

            <Skill/>
            <div className="thirdSec" id="3">
                <div className="Projectheader">
                    <h2>My Project</h2>
                    <p>My name is Ayman, I live in Qaluib, this is my first project in React development</p>
                </div>

                <Router>
                    <Routes>
                        <Route path="" element={<Section />}>
                            <Route path="firstsec" element={<Firstsec />} />
                            <Route path="secondsec" element={<Secondsec />} />
                            <Route path="thirdsec" element={<Thirdsec />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
            <div className="fourthSec">
                <div className="shadow">
                    <p className="fourthp">See My Projects At Once<br /> & leave Here Your E-mail<br /> Address, Sir</p>
                    <div>
                        <input placeholder="Email Address" /><button>Submit</button>
                    </div>
                </div>
                <div className="last">
                    <div className="footer">
                        <a href="http://localhost:3000/"><img src={portf} alt="photo" className="footimg" /></a>
                        <ul className="nav navbar-nav navf">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <p>--Copyrights 2024-- All Rights Reserved here By Ayman Salem Saleh</p>
                </div>
            </div>
        </div>
    );
};

export default App;
