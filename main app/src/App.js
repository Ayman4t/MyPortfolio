import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "react-elastic-carousel";// Import Carousel from react-bootstrap
import animate from "./employee-icon-png-17.jpg";
import portf from './Aymen-designstyle-summer-m.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./Components/Item.js";
import Firstsec from './Components/Firstsec.js';
import Section from './Components/Section.js';
import Secondsec from './Components/Secondsec.js';
import Thirdsec from './Components/Thirdsec.js';

const words = ["fullstackdev", "frontenddev", "backenddev"];
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

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

            <div className="secondSec" id="2">
                <div className="skillheader">
                    <h2>Skills</h2>
                    <p>You Can See My Skills Here</p>
                </div>

                <div className="all"> {/* Add Carousel component */}
                    <Carousel breakPoints={breakPoints}>
                        <div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-1">
                                        <div className="fill-1"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-1"></div>
                                    </div>
                                    <div className="inside-circle"> 97% </div>
                                </div>
                            </div>
                            <p>Html</p>
                        </div>

                        < div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-2">
                                        <div className="fill-2"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-2"></div>
                                    </div>
                                    <div className="inside-circle"> 95% </div>
                                </div>
                            </div>
                            <p>Css</p>
                        </div>

                        <div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-3">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="inside-circle"> 98% </div>
                                </div>
                            </div>
                            <p>Java Script</p>

                        </div>
                        <div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-3">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="inside-circle"> 98% </div>
                                </div>
                            </div>
                            <p>React</p>

                        </div>
                        <div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-3">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="inside-circle"> 98% </div>
                                </div>
                            </div>
                        <p>BackEnd</p>
                        </div>
                        <div className="firstC">
                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full-3">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill-3"></div>
                                    </div>
                                    <div className="inside-circle"> 98% </div>
                                </div>
                            </div>
                            <p>Frontend</p>
                        </div>
                    </Carousel>
                </div>




            </div>
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
