import { StaticImage } from "gatsby-plugin-image"
import "../styles/team.css"
import React, { useState } from "react"

import img1 from "../assets/Dr.-Hadar-Mor.png"
import img2 from "../assets/Dr.-Itamar-Yadid.png";
import img4 from "../assets/Hadasa-Israeli.png";
import img5 from "../assets/Helit-Rozen.png";
import img6 from "../assets/Itai-Bloch.png";
import img7 from "../assets/Jonathan-Rathauser-768x960.png";

interface TeamMember {
    name: string,
    title: string,
    img: string

}


const Card = ({ teamMember, children}: { teamMember: TeamMember }) => {
    const [opacity, setOpacity] = useState('0%')
     
    return (
        <div className="card">
            <div  style={{opacity: opacity}} onMouseEnter={(e)=>{            
            setOpacity('90%')}} onMouseLeave={()=>{
                setOpacity('0%')
            }} className="overlay">
                <h3>{teamMember.name}</h3>
                <h4>{teamMember.title}</h4>
            </div>
            {teamMember.static}
        </div>
    )
}


const teamMembers = [
        { static: <StaticImage alt="teamMember" src="../assets/Dr.-Hadar-Mor.png" width={250}/>,title: 'Scientific Co-Founder', name: 'Itai Bloch, MSc' },
        { static: <StaticImage alt="teamMember" src="../assets/Dr.-Itamar-Yadid.png"  width={250}/>, title: 'Research Scientist', name: 'Hadassah Israeli, MSc' },
        { static: <StaticImage alt="teamMember" src="../assets/Hadasa-Israeli.png" width={250} />, title: 'R&D Scientist', name: 'Dr. Hadar Mor, PhD' },
        { static: <StaticImage alt="teamMember" src="../assets/Helit-Rozen.png"  width={250}/>, title: 'Chief Egg Officer & Co-Founder', name: 'Jonathan Rathauser, MBA' },
        { static: <StaticImage alt="teamMember" src="../assets/Itai-Bloch.png"  width={250}/>, title: 'Chief Technology Officer', name: 'Dr. Helit Rozen, PhD' },
        { static: <StaticImage alt="teamMember" src="../assets/Jonathan-Rathauser-768x960,png"  width={250}/>, title: 'Scientific Co-Founder', name: 'Dr. Itamar Yadid, PhD' }
]

const Team = ({ refInstance }: { refInstance: any }) => {

    return (

        <div ref={refInstance} className="team-container">
            <h2>Our Team</h2>
            <div className="team">
                {teamMembers.map(((teamMember) => <Card teamMember={teamMember} />))}
            </div>
        </div>

    )
}

export default Team