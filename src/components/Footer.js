import React from "react";
import { FacebookShareButton, TelegramShareButton, VKShareButton } from "react-share";
import { FacebookIcon, TelegramIcon, VKIcon } from "react-share";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Warsaw City 2021 year</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:575233293">+48(575)233-293</a>
                        </div>
                        <div className="d-flex">
                            <p>g1703ch@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#home">Home</a>
                                <br />
                                <a href="#about">About me</a>
                                <br />
                                <a href="#services">Services</a>
                            </div>
                            <div className="col">
                                <a href="#experience">Experience</a>
                                <br />
                                <a href="#portfolio">Portfolio</a>
                                <br />
                                <a href="#contacts">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/profile.php?id=100033593566443"}
                                qoute={"Designer"}
                                hashtag="#Photoshop"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <br />
                            <VKShareButton
                                url={"https://vk.com/iddelete23"}
                            >
                                <VKIcon className="mx-3" size={36} />
                            </VKShareButton>
                            <br />
                            <TelegramShareButton
                                url={"https://web.telegram.org/#/im?p=@nice_nice171"}
                            >
                                <TelegramIcon className="mx-3" size={36} />
                            </TelegramShareButton>
                        </div>
                        <div className="copy-rights">
                            <p className="pt-3 text-center">
                                Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Gleb Chebotarenko | All Rights Reserved
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
