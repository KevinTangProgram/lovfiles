//import { useState } from 'react';
import Navbar from '../navigationbar';
import Footer from '../footer';
import "./../css/profiles.css";

const urlString = ""
const urlString2 = "/lov"

export default function Chek() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <a style={{"marginLeft": "30px"}} href={urlString2 + "/#/directory"}>❮ BACK TO DIRECTORY</a>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Tang, Che K.</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/che_k.jpg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Chief Operating Officer</h2>
                        <h2 className="profileMargin">Division:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Sales and Marketing</h2>
                        <h2 className="profileMargin">Specialities:</h2>
                        <div>
                            <h2 className="profileMargin" id="profileLighterFont">Network & Communications</h2>
                        </div>
                    </div>

                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Email:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">pwedscsco@gmail.com</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(408)-431-6470</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Che Tang boasts over two decades of experience as a distinguished software engineer. His career has been marked by a remarkable journey through the ever-evolving landscape of technology. Che's expertise and dedication have made him an integral part of the teams he's worked with, leaving an indelible mark on the companies fortunate enough to have him. One significant chapter in Che's career was his tenure at Cisco Systems, a global leader in networking technology. During his time at Cisco, Che played a pivotal role in driving innovation and excellence in software engineering. His contributions ranged from developing cutting-edge solutions to solving complex technical challenges, all of which contributed to the success of the company's products and services. As a software engineer, Che demonstrated an uncanny ability to navigate the intricacies of coding, software architecture, and system design. His proficiency in various programming languages and frameworks allowed him to adapt to the ever-changing demands of the tech industry with ease. Che Tang's journey as a software engineer is a testament to the enduring spirit of innovation that drives the tech industry forward. His contributions at Cisco and throughout his career serve as an inspiration to aspiring engineers and a reminder of the impact that dedication and expertise can have in shaping the future of technology. Che's legacy continues to shine as he remains a recognized and respected figure in the software engineering community.</p1>
            </div>
        <Footer/>
    </>)
}