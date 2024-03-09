import './css/footer.css';
import React, { useState } from 'react';

const urlString2 = "/lov"

export default function Footer()
{
    const [buttonStates, setButtonStates] = useState([false, false, false]);

    // function setButton(number)
    // {
    //     let more = ["none", "none", "none"];
    //     if (moreButton[number] === "none"){more[number] = "";}
    //     else{more[number] = "none";}
    //     setButtonStates(more);
    // }

    return (
        <>
            <div className="footerGrid">
                <div>
                    <a href={urlString2 + "/#/about"}><h3 className="hover-underline-animation-white standardText">About Us</h3></a><br></br>
                    <a href={urlString2 + "/#/plans"}><h3 className="hover-underline-animation-white standardText">Learn More</h3></a><br></br>
                    <a href={urlString2 + "/#/process"}><h3 className="hover-underline-animation-white standardText">Let's Get Started</h3></a><br></br>
                    <a href={urlString2 + "/#/directory"}><h3 className="hover-underline-animation-white standardText">Our Strategic Partners</h3></a>
                </div>
                <div>
                    <a href={urlString2 + "/#/homes"}><h3 className="hover-underline-animation-white standardText">Popular Projects and Plans</h3></a><br></br>
                    <a href={urlString2 + "/#/morning_glory"}><h4 className="hover-underline-animation-white standardText">1 bedroom, 1 bath</h4></a><br></br>
                    <a href={urlString2 + "/#/lotus"}><h4 className="hover-underline-animation-white standardText">3 bedrooms, 2 baths</h4></a><br></br>
                    <a href={urlString2 + "/#/sunflower"}><h4 className="hover-underline-animation-white standardText">4 bedrooms, 4 baths</h4></a><br></br>
                </div>
                <div>
                    <a href={urlString2 + "/#/contact"}><h3 className="hover-underline-animation-white standardText">FAQ</h3></a><br></br>
                    <a href={urlString2 + "/#/contact"}><h3 className="hover-underline-animation-white standardText">Subscribe</h3></a><br></br>
                    <a href={urlString2 + "/#/form"}><h3 className="hover-underline-animation-white standardText">Contact Us</h3></a><br></br>
                </div>
                <div>
                    <h3 className="standardText">Address: 7950 Cherry Ave. Suite 114 Fontana, California 91739</h3>
                    <h3 className="standardText">Phone: (909)-856-9967</h3>
                    <h3 className="standardText">Email: che@tang-se.com</h3>
                </div>
            </div>

            <div className="footerGridSmall">
                <button className="smallButtonExt" onClick={() => {
                    setButtonStates([!buttonStates[0], false, false])
                }}>
                    <div className="smallButtonInt">
                        <a href={urlString2 + "/#/about"} className="buttonText"><h3 className="hover-underline-animation-white standardText">About Us</h3></a>
                        <h3 className="standardText">+</h3>
                    </div>
                </button>
                <button className="smallButtonExt" onClick={() => {
                    setButtonStates([false, !buttonStates[1], false])
                }}>
                    <div className="smallButtonInt">
                        <a href={urlString2 + "/#/about"} className="buttonText"><h3 className="hover-underline-animation-white standardText">Popular Projects and Plans</h3></a>
                        <h3 className="standardText">+</h3>
                    </div>
                </button>
                <button className="smallButtonExt" onClick={() => {
                    setButtonStates([false, false, !buttonStates[2]])
                }}>
                    <div className="smallButtonInt">
                        <a href={urlString2 + "/#/about"} className="buttonText"><h3 className="hover-underline-animation-white standardText">FAQ</h3></a>
                        <h3 className="standardText">+</h3>
                    </div>
                </button>
                <div>
                    <h3 className="standardText">Address: 7950 Cherry Ave. Suite 114 Fontana, California 91739</h3>
                    <h3 className="standardText">Phone: (909)-856-9967</h3>
                    <h3 className="standardText">Email: che@tang-se.com</h3>
                </div>
            </div>
        </>
    )
}