import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import FooterCSS from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <section className={FooterCSS["footer"]}>
                <h4>About Us</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero numquam quibusdam suscipit
                    voluptates laboriosam rerum veniam, <br /> ebitis ullam, provident similique et voluptatum doloribus
                    ut officia. Qui sed non soluta?
                </p>
                <div className={FooterCSS["icons"]}>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <p>
                    WebCoded by JElandorr
                    <i className={FooterCSS["fa fa-copyright"]}></i>
                </p>
            </section>
        </>
    );
};

export default Footer;
