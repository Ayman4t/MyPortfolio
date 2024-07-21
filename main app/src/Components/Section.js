import React from "react";
import {Link  , Outlet}  from "react-router-dom";

const Section = () => {
    return (
        <>
               <div className="sections">
                <nav className="nav2">
                    
                    <Link to="firstsec" >1st section </Link>
                    <div className="sep1"></div>
                    <Link to="secondsec">2nd section</Link>
                    <div className="sep1"></div>
                    <Link to="thirdsec">3rd section</Link>
                </nav>
                </div>
                <Outlet/>
        </>
        
    )
};

export default Section;