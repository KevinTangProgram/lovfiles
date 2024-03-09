import React, { useState, useEffect } from 'react';
//import Navbar from './navigationbar';
import Footer from './footer';
import "./css/homes.css"

const urlString = ""
const urlString2 = "/lov"

export default function Homes() {

    //window.scrollTo(0, 0)
    const [dropboxState, setDropboxState] = useState(false);
    const [dropbox, setDropbox] = useState(() => {
        return <div></div>;
    })
    const [color, setColor] = useState("white");

    function toggleDropboxState()
    {
        setDropboxState(!dropboxState)
    }

    useEffect(() => {
        if (dropboxState)
        {
            setDropbox(<header>
                <nav>
                    <ul1>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">HOME</a></li>
                        <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation">PORTFOLIO</a></li>
                        <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation">YOUR NEW HOMES</a></li>
                        <li><a href={urlString2 + "/#/process"} className="hover-underline-animation">HOW IT WORKS</a></li>
                        <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation">DOWNLOAD FREE PLANS</a></li>
                    </ul1>
                </nav>
            </header>)
            setColor("black")
        }
        else
        {
            setDropbox(<div></div>);
            setColor("white");
        }
    }, [dropboxState])


    return (
    <>
        <button onClick={toggleDropboxState} className="toggle-button">
            <span className="bar" style={{"backgroundColor": color}}></span>
            <span className="bar" style={{"backgroundColor": color}}></span>
            <span className="bar" style={{"backgroundColor": color}}></span>
        </button>
        {dropbox}
        <div style={{"display": "flex"}}>
            <div className="topGrid" style={{"position": "absolute", "width": "100%"}}>
                <div>
                    <a href={urlString2} style={{"width": "80px"}}><img src={urlString + "logo1.png"} alt="" className="fitSize"></img></a>
                    <header className="navigationBar">
                        <nav>
                            <ul>
                                <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation-white">PORTFOLIO</a></li>
                                <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation-white">YOUR NEW HOMES</a></li>
                                <li><a href={urlString2 + "/#/process"} className="hover-underline-animation-white">HOW IT WORKS</a></li>
                                <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation-white">DOWNLOAD FREE PLANS</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
        
        <div style={{"display": "flex", "flexDirection": "column"}}>
            <img src={urlString + "portfolio/Newport-Hills_homefront-f_2000px.jpg"} className="homesImage" alt="" style={{"objectPosition": "50% 30%"}}></img>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "44vh", "marginLeft": "11vw", "fontSize": "68px"}}>Morning Glory</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "52vh", "marginLeft": "11vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/morning_glory"}>Learn More</a>
            </div>
            <img src={urlString + "portfolio/004_Residence-Two-Garage_2500px-1536x1024.jpg"} alt="" className="homesImage"></img>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "134vh", "marginLeft": "66.5vw", "marginRight": "", "fontSize": "68px"}}>Lotus</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "142vh", "marginLeft": "68vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/lotus"}>Learn More</a>
            </div>
            <img src={urlString + "portfolio/Gallery_Header-Photo_2500px-1536x864.jpg"} alt="" className="homesImage"></img>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "247vh", "marginLeft": "11vw", "fontSize": "68px"}}>Sunflower</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "255vh", "marginLeft": "11vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/sunflower"}>Learn More</a>
            </div>
        </div>
            
        <Footer/>
    </>)
}