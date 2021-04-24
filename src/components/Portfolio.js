import React from 'react'
// IMAGES IMPORTS
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // First
    const openPopupboxFirst = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={img1} alt="First Project"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
                <b>Source:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=0LcPN79Qmss&ab_channel=MCKREKER")}>https://www.youtube.com/watch?v=0LcPN79Qmss&ab_channel=MCKREKER</a>
            </>
        )

        PopupboxManager.open({ content })
    }

    const popupboxConfigFirst = {
        titleBar: {
            enable: true,
            text: "First adobe photoshop project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Second
    const openPopupboxSecond = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={img2} alt="Second Project"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
                <b>Source:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=KCz1FOeCOq8&ab_channel=%D0%9C%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0")}>https://www.youtube.com/watch?v=KCz1FOeCOq8&ab_channel=%D0%9C%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0</a>
            </>
        )

        PopupboxManager.open({ content })
    }

    const popupboxConfigSecond = {
        titleBar: {
            enable: true,
            text: "Second adobe photoshop project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Third
    const openPopupboxThird = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={img3} alt="Third Project"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
                <b>Source:</b> <a className="hyper-link" onClick={() => window.open("https://www.instagram.com/p/CMQIuaJgPng/")}>https://www.instagram.com/p/CMQIuaJgPng/</a>
            </>
        )

        PopupboxManager.open({ content })
    }

    const popupboxConfigThird = {
        titleBar: {
            enable: true,
            text: "Third animation photoshop project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Fourth
    const openPopupboxFourth = () => {
        const content = (
            <>
                <img className="portfolio-img-popupbox" src={img6} alt="Fourth Project"></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
                <b>Source:</b> <a className="hyper-link" onClick={() => window.open("https://www.youtube.com/watch?v=0LcPN79Qmss&ab_channel=MCKREKER")}>https://www.youtube.com/watch?v=0LcPN79Qmss&ab_channel=MCKREKER</a>
            </>
        )

        PopupboxManager.open({ content })
    }

    const popupboxConfigFourth = {
        titleBar: {
            enable: true,
            text: "Fourth realizm hand-made project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-img-box" onClick={openPopupboxFirst}>
                        <img className="portfolio-img" src={img1} alt="First project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-img-box" onClick={openPopupboxSecond}>
                        <img className="portfolio-img" src={img2} alt="Second project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-img-box" onClick={openPopupboxThird}>
                        <img className="portfolio-img" src={img3} alt="Third project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-img-box" onClick={openPopupboxFourth}>
                        <img className="portfolio-img" src={img6} alt="Fourth project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFirst} />
            <PopupboxContainer {...popupboxConfigSecond} />
            <PopupboxContainer {...popupboxConfigThird} />
            <PopupboxContainer {...popupboxConfigFourth} />
        </div>
    )
}

export default Portfolio
