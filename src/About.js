//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/about.css'

const urlString = ""
const urlString2 = "/lov"

export default function Contact() {

    window.scrollTo(0, 0)

    return (
    <>
        <Navbar/>
        <div style={{"display": "grid", "marginBottom": "3vh"}}>
            <h1 style={{"textAlign": "center"}}>About Us</h1>
            <p2 style={{"textAlign": "center", "width": "80%", "marginLeft": "auto", "marginRight": "auto", "fontSize": "18px"}}>We are a dedicated team of engineers who want to help you get your house built right. We believe that with the right practices, new homes can be built to be stronger, faster, and more cost-effectively. Our many design packages ensure our customers that they will get what they want, exact to their specifications.</p2>
        </div>
        <div style={{"display": "flex"}}>
            <img src={urlString + "IMG_8865.jpg"} style={{"width": "100%", "height": "100vh", "objectFit": "cover"}} alt=""></img>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "42vh", "marginLeft": "11vw", "fontSize": "68px"}}>Meet the Team</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "50vh", "marginLeft": "11vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/directory"}>Learn More</a>
            </div>
        </div>
        <div style={{"display": "flex"}}>
            <img src={urlString + "IMG_5465.jpg"} style={{"width": "100%", "height": "100vh", "objectFit": "cover"}} alt=""></img>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "40vh", "marginLeft": "67vw", "fontSize": "68px"}}>Sustainibility</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "50vh", "marginLeft": "69vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/sustainibility"}>Learn More</a>
            </div>
        </div>
        <Footer/>
        {/*
        <div style={{"display": "grid", "width": "1235px", "marginLeft": "auto", "marginRight": "auto"}}>
            <h3 style={{"marginBottom": "1vh", "fontSize": "24px"}}>MEET THE TEAM</h3>
            <hr style={{"width": "100%", "marginBottom": "6vh", "opacity": "30%"}}></hr>
            <div style={{"display": "grid", "gridTemplateColumns": "33% 33% 33%", "width": "100%"}}>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}}></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Che L. Tang</p1>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}}></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Che K. Tang</p1>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}}></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Betty P. Tang</p1>
                </div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "33% 33% 33%", "width": "100%"}}>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{leng()}</div>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{phey()}</div>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{pek()}</div>
            </div>
        </div>
        */}
    </>)
}