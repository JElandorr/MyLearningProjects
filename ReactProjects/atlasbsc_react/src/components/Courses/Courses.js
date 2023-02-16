import React from "react";

import ComponentsCSS from "../Components.module.css";

const Courses = () => {
    return (
        <>
            <section className={ComponentsCSS["courses"]}>
                <h1>Courses That We Offer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio deserunt illum. Deserunt
                    placeat cumque corrupti rem ad perferendis! Fugiat minima laboriosam voluptatum repudiandae! Autem
                    laborum enim modi quas earum!
                </p>
                <div className={ComponentsCSS["row"]}>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Intermediate</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Degree</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                    <div className={ComponentsCSS["course-col"]}>
                        <h3>Post Graduation</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam cumque a, deleniti, amet
                            maxime quibusdam veritatis natus quia assumenda sequi maiores aperiam labore doloribus
                            asperiores. In quo cupiditate aspernatur maiores.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
