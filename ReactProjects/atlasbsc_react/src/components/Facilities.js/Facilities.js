import React from "react";

import ComponentsCSS from "../Components.module.css";

const Facilities = () => {
    return (
        <>
            <section className={ComponentsCSS["facilities"]}>
                <h1>Our Facilities</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img src="/images/library.png" alt="library.png"></img>
                        <h3>World Class Library</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img src="/images/basketball.png" alt="basketball.png"></img>
                        <h3>World Largest Playground</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                    <div className={ComponentsCSS["facilities-col"]}>
                        <img src="/images/cafeteria.png" alt="cafeteria.png"></img>
                        <h3>Tasty And Healthy Food</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae, earum aperiam ex
                            ipsa eius molestiae dolores perspiciatis, unde at in ipsam cumque quos repudiandae molestias
                            laborum voluptatibus sunt facilis.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Facilities;
