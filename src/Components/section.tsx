import { PageProps } from "gatsby";
import React, { ReactNode } from "react";
import "../styles/section.css"

const Section = ({ children }: { children: ReactNode }) => {
    const stylesToTakeUpViewPort = {
        justifySelf: "center",
        width: "90vw",
        height: "90vh"
    }
    return (
        <article id="team" style={stylesToTakeUpViewPort}>
            <div className="section">
                {children}
            </div>
        </article>
    )
}

export default Section