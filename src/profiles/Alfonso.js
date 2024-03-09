//import { useState } from 'react';
import Navbar from '../navigationbar';
import Footer from '../footer';
import "./../css/profiles.css";

const urlString = ""
const urlString2 = "/lov"

export default function Alfonso() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <a style={{"marginLeft": "30px"}} href={urlString2 + "/#/directory"}>❮ BACK TO DIRECTORY</a>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Barajas, Alfonso</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/al2.jpg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Project Manager</h2>
                        <h2 className="profileMargin">Division:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Engineering</h2>
                        <h2 className="profileMargin">Specialities:</h2>
                        <div>
                            <h2 className="profileMargin" id="profileLighterFont">AutoCAD</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Bluebeam</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Paperport</h2>
                        </div>
                    </div>

                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Email:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">al@tang-se.com</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(818)-930-8773</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Alfonso Barajas, an esteemed project manager with an illustrious career spanning over 30 years, stands as a luminary in the field of design and construction. His wealth of experience encompasses a diverse range of projects, including the design of numerous residential complexes, commercial spaces, schools, and hospitals. Alfonso's passion for creating environments that seamlessly blend form and function has been the hallmark of his professional journey.

Throughout his extensive career, Alfonso has been at the forefront of transforming architectural visions into tangible structures. His meticulous approach to design is evident in the hundreds of projects he has undertaken, each bearing the distinctive touch of his expertise. As a project manager, Alfonso leverages his vast experience to lead teams, navigate challenges, and ensure the successful realization of every project he oversees.

A significant facet of Alfonso's day-to-day tasks revolves around his proficiency in AutoCAD, where he engages in intricate drafting to bring designs to life. His dedication goes beyond aesthetics; Alfonso is deeply committed to ensuring that every project he manages is not only visually stunning but also structurally sound, poised to endure the test of time.

Alfonso Barajas remains a trailblazer in the construction industry, blending creativity with technical acumen. His legacy is one of architectural excellence, a testament to his enduring commitment to crafting spaces that transcend the ordinary and leave a lasting impact on the built environment.</p1>
            </div>
        <Footer/>
    </>)
}