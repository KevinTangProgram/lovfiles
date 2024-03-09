//import { useState } from 'react';
import Navbar from '../navigationbar';
import Footer from '../footer';
import "./../css/profiles.css";

const urlString = ""
const urlString2 = "/lov"

export default function Che() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <a style={{"marginLeft": "30px"}} href={urlString2 + "/#/directory"}>❮ BACK TO DIRECTORY</a>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Tang, Che L.</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/che.jpg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Chief Executive Officer</h2>
                        <h2 className="profileMargin">Division:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Engineering</h2>
                        <h2 className="profileMargin">Specialities:</h2>
                        <div>
                            <h2 className="profileMargin" id="profileLighterFont">Residential Buildings</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Commercial Complexes</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Industrial Facilities</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Institutional Buildings</h2>
                        </div>
                    </div>

                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Email:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">che@tang-se.com</h2>
                        <h2 className="profileMargin">Office:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">7950 Cherry Ave. Suite 114 Fontana, California, 92336</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(909)-856-9967</h2>
                        <h2 className="profileMargin">Office Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(909)-429-0450</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Che is a highly accomplished structural engineer with over twenty years of invaluable experience in the field. His impressive career has been marked by a prolific portfolio of successful projects throughout the greater Southern California area. Throughout his career, Che has consistently demonstrated his expertise in designing and overseeing the construction of buildings that are not only aesthetically pleasing but also built to withstand the unique challenges of the region, such as seismic activity. His dedication to creating safe and resilient structures has earned him a reputation as a distinguished structural engineer. Che's work has made a significant impact on the community, as the buildings he has designed and constructed have contributed to the well-being and safety of countless residents in Southern California. His commitment to excellence in structural engineering has played a vital role in ensuring the structural integrity of essential facilities, such as schools and hospitals, where the safety of occupants is of paramount importance. Che's legacy as a structural engineer in Southern California is marked by his dedication to excellence, a commitment to safety, and a portfolio of outstanding projects that have left a lasting impact on the region. His contributions to the field continue to be celebrated, making him a respected and distinguished figure in structural engineering.</p1>
            </div>
        <Footer/>
    </>)
}