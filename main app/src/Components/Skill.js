import React from "react";
import Carousel from "react-elastic-carousel";
import "./../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];
const Skill = () => {
    return (
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




        </div>)
};

export default Skill;