import React from "react";

import ComponentsCSS from "../Components.module.css";

const Blog = () => {
    return (
        <section className={ComponentsCSS["blog-content"]}>
            <div className={ComponentsCSS["row"]}>
                <div className={ComponentsCSS["blog-left"]}>
                    <img
                        src="https://thumbs.dreamstime.com/b/badminton-action-shuttlecock-fast-racket-motion-sport-167143422.jpg"
                        alt="certificate.jpg"
                    />
                    <h2>Our Certificates And Online Programs For 2022</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sequi sint quas
                        expedita dicta cum amet eum ut blanditiis reprehenderit corrupti rerum veritatis commodi vel ab
                        officiis aliquid vitae aspernatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae illum blanditiis possimus sequi ipsa ad cupiditate minima alias nesciunt dolores,
                        odio fuga libero modi inventore excepturi maxime. Assumenda, magnam expedita.
                    </p>
                </div>
                <div className={ComponentsCSS["blog-right"]}>
                    <h3>Post Categories</h3>
                    <div>
                        <span>Business Analytics</span>
                        <span>21</span>
                    </div>
                    <div>
                        <span>Data Science</span>
                        <span>28</span>
                    </div>
                    <div>
                        <span>Machine Learning</span>
                        <span>32</span>
                    </div>
                    <div>
                        <span>Computer Science</span>
                        <span>35</span>
                    </div>
                    <div>
                        <span>AutoCAD</span>
                        <span>27</span>
                    </div>
                    <div>
                        <span>Journalism</span>
                        <span>26</span>
                    </div>
                    <div>
                        <span>Economics</span>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
