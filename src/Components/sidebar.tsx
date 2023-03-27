import React from "react";
import "../styles/sidebar.css"

const NavNode = ({ id, element }: { id: string, element: HTMLElement }) => {

    const navigateToSection = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        console.log(element);

        element.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <div className="node">
            <div onClick={navigateToSection} className="node">
                {id}
            </div>
        </div>
    )

}
const LinkNode = () => {
    return (
        <div className="b">
        </div>
    )

}

const Sidebar = ({ items }: { items: Array<any> }) => {
    return (
        <div className="sidebar">
            {items.map((item, index) => {
                if (index === items.length - 1) {
                    return <NavNode id={item.id} element={item.element} />
                }
                return <><NavNode id={item.id} element={item.element} /><LinkNode /></>
            })}
        </div>
    )

}

export default Sidebar