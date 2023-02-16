import React from "react";

import ComponentsCSS from "../Components.module.css";

const Campus = () => {
    return (
        <>
            <section className={ComponentsCSS["campus"]}>
                <h1>Campus</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio deserunt illum. Deserunt
                    placeat cumque corrupti rem ad perferendis! Fugiat minima laboriosam voluptatum repudiandae! Autem
                    laborum enim modi quas earum!
                </p>

                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img src="./images/london.png" alt="London.png"></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>LONDON</h3>
                        </div>
                    </div>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img src="./images/newyork.png" alt="London.png"></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>NEW YORK</h3>
                        </div>
                    </div>
                    <div className={ComponentsCSS["campus-col"]}>
                        <img src="./images/washington.png" alt="London.png"></img>
                        <div className={ComponentsCSS["layer"]}>
                            <h3>WASHINGTON</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Campus;
