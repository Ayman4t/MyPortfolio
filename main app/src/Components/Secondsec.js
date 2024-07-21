import React from "react";
import img from './How-to-communicate-effectively.png'

const Secondsec = () => {
    return (
        <div className="second">
            <img src={img} className="secimg" />
            <div className="secinp">
                <h2>Get in Touch</h2>
                <div className="secname">

                    <input type="text" placeholder="First Name" className="firstinput" />

                    <input type="text" placeholder="Last Name" className="firstinput" />
                </div>
                <div >
                    <div className="secinfo">

                        <input type="text" placeholder="Email Address" className="secondinput" />

                        <input type="text" placeholder="Phone No." className="secondinput" />
                    </div>
                </div>
                <textarea placeholder="Message" />
                <button>Send</button>
            </div>
        </div>
    )
};

export default Secondsec;