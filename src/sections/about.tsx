import React from "react"
import img from "../assets/Picture4-1024x913.png"
import "../styles/about.css"

const About = ({refInstance}:{refInstance: any}) => {
    return (
        <div ref={refInstance}className="about-container">
            <article className="about-section">
                <h1>
                    About Us
                </h1>
                <p>
                Clean, vegan, non-GM and environmentally friendly, protein functionality to feed the world.
                Sound too good?
                </p>
                <h3>
                Augment your expectations.
                </h3>
                <p>
                Leveraging our team’s expertise in analytical chemistry, fermentation and protein synthesis we’re on a mission to reimagine what food can do.
                </p>
            </article>
            <div className="about-img-cont">
                <img src={img} alt="science" />
            </div>
        </div>
    )
}
export default About