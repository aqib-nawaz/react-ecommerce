import React from "react";
import "./About.css";
import AboutUs from "../images/about.jpg";

function About() {
    return (
        <React.Fragment>
            <div className="about-banner"> </div>
            <div className="container-fluid about-container">
                <div className="container">
                    <div className="content row">
                        <div className="about-text col-md-6">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                                risus nullam eget felis eget nunc lobortis mattis.
                            </p>
                            <p>
                                Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                                Tristique senectus et netus et malesuada fames ac turpis. Congue
                                quisque egestas diam in arcu cursus. Eros donec ac odio tempor
                                orci dapibus ultrices in iaculis. Duis ut diam quam nulla
                                porttitor massa id neque. Venenati
                            </p>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                        <img
                            src={AboutUs}
                            alt="about-us"
                            className="img-fluid img-rounded col-md-6"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;
