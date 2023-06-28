import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/main.css"
import Navbar from "../Components/navbar"
import Layout from "../Components/layout"
import Landing from "../sections/landing"
import Sidebar from "../Components/sidebar"
import Team from "../sections/team"
import About from "../sections/about"
import Marquee from "../sections/partners"
import NewsletterForm from "../sections/form"
import Footer from "../Components/footer"

import img1 from '../partner_logos/israel-innovation-authority-logo.webp';
import img2 from '../partner_logos/ourcrowd.webp';
import img3 from '../partner_logos/tempo.png';
import img4 from '../partner_logos/migal.png';
import img5 from '../partner_logos/Tnuva.svg.png';
import img6 from '../partner_logos/fresh-start.svg';
import img7 from '../partner_logos/finistereLogo.png';

import fb from "../images/facebook.svg"
import ig from "../images/instagram.svg"
import ld from "../images/linkedin.svg"

const IndexPage: React.FC<PageProps> = () => {
    const items = [
        {
            src: img1,
            url: 'https://innovationisrael.org.il/en/'
        },
        {
            src: img2,
            url: 'https://www.ourcrowd.com/'
        },
        {
            src: img3,
            url: 'https://en.tempo.co.il/'
        },
        {
            src: img4,
            url: 'https://www.migal.org.il/en'
        },
        {
            src: img5,
            url: 'https://www.tnuva.com/'
        },
        {
            src: img6,
            url: 'https://fresh-start.co.il/'
        },
        {
            src: img7,
            url: 'https://finistere.com/'
        }
    ];
    const landingElement = React.useRef(null)
    const teamElement = React.useRef(null)
    const aboutElement = React.useRef(null)
    const partnersElement = React.useRef(null)
    const [sidebarItems, setSidebarItems] = React.useState([{ id: "landing", element: landingElement.current }, { id: "team", element: teamElement.current }])
    React.useEffect(() => {
        setSidebarItems([{ id: "About", element: aboutElement.current }, { id: "Team", element: teamElement.current }, {id: "Partners", element: partnersElement.current}])
    }, [])
    return (
        // style={{backgroundColor: "#FCCE30"}
        <Layout>
            <Sidebar items={sidebarItems} />
            <div className="main" >
                <Navbar element={landingElement.current} />
                <Landing id="landing" refInstance={landingElement} />
                <About refInstance={aboutElement} />
                <Team refInstance={teamElement} />
                <Marquee items={items} refInstance={partnersElement}/>
                {/* <NewsletterForm /> */}
            </div>
            <Footer items={[fb, ig, ld]}/>
        </Layout>
    )
}
export default IndexPage
export const Head: HeadFC = () => <title>eggmented.com</title>
