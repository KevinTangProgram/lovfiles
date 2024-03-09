//import { useState } from 'react';
import Navbar from '../navigationbar';
import Footer from '../footer';
import "./../css/profiles.css";

const urlString = ""
const urlString2 = "/lov"

export default function Ivan() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <a style={{"marginLeft": "30px"}} href={urlString2 + "/#/directory"}>❮ BACK TO DIRECTORY</a>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Tai, Ivan</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/ivan1.jpeg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Design Engineer</h2>
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
                        <h2 className="profileMargin" id="profileLighterFont">ivan@tang-se.com</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(909)-228-9088</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Ivan Tai stands as a beacon of innovation and expertise in his role as the Lead Engineer at Tang Structural Engineers. He recently earned Master's degree in Civil Engineering from California State University, Long Beach in 2022 and poised to attain his Professional Engineer license later this year; his journey is a testament to his unwavering commitment to personal and professional growth.

At Tang Structural Engineers, Ivan has been a linchpin in the firm's success, playing an integral role in the design and implementation of numerous high-profile projects. From residential complexes to commercial developments, schools, and hospitals, Ivan's imprint can be seen in the structural integrity and functionality of each structure.

On a day-to-day basis, Ivan's tasks encompass a wide array of responsibilities, all aimed at ensuring the successful execution of projects. Utilizing his proficiency in AutoCAD, he meticulously crafts designs that not only meet but exceed the stringent standards set forth by the California Building Code. Furthermore, Ivan's proficiency encompasses conducting thorough calculations to ensure the structural integrity and compliance of every design, demonstrating his unwavering commitment to achieving perfection.

Beyond his technical acumen, Ivan's leadership and collaborative spirit have earned him the respect and admiration of his peers. He serves as a mentor to junior engineers, imparting his knowledge and instilling a culture of excellence within the organization.

As Ivan Tai continues to chart his path in the field of structural engineering, his unwavering dedication to quality, innovation, and continuous learning serves as an inspiration to colleagues and industry professionals alike. With each project he undertakes, Ivan leaves an indelible mark on the built environment, shaping the skyline and ensuring a safer, more resilient future for generations to come.</p1>
            </div>
        <Footer/>
    </>)
}

//https://www.jgma.com/