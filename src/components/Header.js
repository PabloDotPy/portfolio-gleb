import React from "react";
import Typed from "react-typed";

export const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <a name="home"></a>
            <div className="main-info">
                <h1>Design and photoshop</h1>
                <Typed
                    className="typed-text"
                    strings={["Design", "2D animation", "3D animation", "Photoshop", " Video Montage"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;