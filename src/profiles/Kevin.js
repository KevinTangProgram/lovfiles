//import { useState } from 'react';
import Navbar from '../navigationbar';
import Footer from '../footer';
import "./../css/profiles.css";

const urlString = ""
const urlString2 = "/lov"

export default function Kevin() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <a style={{"marginLeft": "30px"}} href={urlString2 + "/#/directory"}>❮ BACK TO DIRECTORY</a>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Tang, Kevin</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/kevin.jpg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Special Intern</h2>
                        <h2 className="profileMargin">Division:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Engineering</h2>
                        <h2 className="profileMargin">Specialities:</h2>
                        <div>
                            <h2 className="profileMargin" id="profileLighterFont">AutoCAD</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Revit</h2>
                            <h2 className="profileMargin" id="profileLighterFont">HTML, CSS</h2>
                            <h2 className="profileMargin" id="profileLighterFont">Python, Javascript, C++</h2>
                        </div>
                    </div>

                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Email:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">kevin@tang-se.com</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(909)-681-7818</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Kevin Tang's journey at Tang Structural Engineer began after graduating from UCLA with a degree in Chemistry in 2023. While his academic background may seem unrelated to the world of structural engineering, Kevin's innate curiosity and determination have propelled him into the role of an invaluable intern within the company.

Despite being new to the field, Kevin's willingness to dive headfirst into any task has made him an indispensable member of the team. He fearlessly takes on the responsibilities that others may shy away from, demonstrating a keen ability to adapt and thrive in new environments. Whether it's modeling new projects in Revit, crunching numbers for Title 24 calculations, or meticulously tabulating project costs, Kevin approaches each task with diligence and precision.

One of Kevin's standout qualities is his knack for problem-solving. When faced with complex challenges, he doesn't hesitate to roll up his sleeves and find creative solutions. His analytical mindset, combined with his attention to detail, ensures that every project he touches is executed flawlessly.

In addition to his technical contributions, Kevin plays a crucial role in maintaining effective communication within the company. He willingly takes on the responsibility of drafting emails, ensuring that important messages are conveyed clearly and professionally. His excellent written communication skills and ability to convey complex information in a concise manner are highly valued by his colleagues.

As Kevin continues to immerse himself in the world of structural engineering, his passion for learning and growth shines through. He eagerly seeks out opportunities to expand his knowledge and skill set, attending workshops, and seeking mentorship from seasoned professionals within the company.

With his unwavering dedication, positive attitude, and commitment to excellence, Kevin Tang is poised to make a significant impact in the field of structural engineering. His journey as an intern at Tang Structural Engineer is just the beginning of what promises to be a remarkable career filled with achievement and success.</p1>
            </div>
        <Footer/>
    </>)
}

//https://www.jgma.com/