import React from "react";

import ComponentsCSS from "../Components.module.css";

const CallToAction = ({ subpageHandler }) => {
    return (
        <>
            <section className={ComponentsCSS["cta"]}>
                <h1>
                    Enroll for Our various online courses
                    <br />
                    Anywhere from the World
                </h1>
                <div className={ComponentsCSS["hero-btn"]} onClick={() => subpageHandler("CONTACT")}>
                    CONTACT US
                </div>
            </section>
        </>
    );
};

export default CallToAction;
