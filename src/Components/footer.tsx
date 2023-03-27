import React from "react"
import '../styles/footer.css'

const Footer = ({items}: {items: Array<any>}) => {
    return (
        <div className="footer">
            {/* <div style={{width: '2rem', height: '2rem'}}> */}
                {items.map(item => <img style={{maxWidth: '100%', maxHeight: '100%', marginLeft:'0.5rem', marginRight: '0.5rem'}} src={item}/>)}
            {/* </div> */}
        </div>
    )
}

export default Footer