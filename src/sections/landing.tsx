import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/landing.css"

const Landing = ({id, refInstance}: {id:string, refInstance: any}) => {
    return (
            <div ref={refInstance} id={id} className="container">
                <div>
                    <h2>Fermenting Function That</h2>
                    <h1>FEEDS THE WORLD</h1>
                </div>
                <div className="img-container">
                    <StaticImage src="../assets/eggmented-egg-e1655296996503-855x1024.webp" alt="egg" width={450}/>
                </div>
            </div>
    )
}

export default Landing