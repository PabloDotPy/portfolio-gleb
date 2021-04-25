import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Services = () => {
    return (
        <div id="services" className="services">
           <a name="services"></a>
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faApple} size="2x" />
                            </div>
                            <h3>Photoshop</h3>
                            <p>I am engaged in processing raster and vector images</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faTiktok} size="2x" />
                            </div>
                            <h3>Animation</h3>
                            <p>I work with different types of animation</p>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                            </div>
                            <h3>Video Montage</h3>
                            <p>Editing video, trying to bring my point of view into directing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
