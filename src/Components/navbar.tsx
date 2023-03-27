import React, { AnchorHTMLAttributes, HTMLAttributeAnchorTarget, MouseEventHandler, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/nav.css"

const Navbar = ({ element }: { element: any}) => {
    const [height, setHeight] = useState(55)
    return (
        <div className="nav" >
            <div title="Return To Top" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault()
                console.log(element);

                element.scrollIntoView({
                    behavior: "smooth"
                })
            }} className="logo" onMouseEnter={(e)=> {
                e.currentTarget.style.left = '7.5px';
            }}  onMouseLeave={(e)=> {
                e.currentTarget.style.left = '0px'
            }}>
                <StaticImage src="../images/EEGmented_logo-sofi-convert.png" alt="logo" placeholder="blurred" height={55} />
            </div>
            {/* <div className="items">
                {items.map(item => <NavItem content={item.content}/>)}
            </div> */}
            <div className="button">
                <div>
                    Newsletter Signup
                </div>
            </div>
        </div>
    )
}

// const NavItem = ({ content }: { content: string}) => {
//     const [className, setClassName] = useState("nav-item")
//     return (
//         <a href="#about" onClick={navigateToAnchor} className={className}>
//             {content}
//         </a>
//     )
// }

export default Navbar