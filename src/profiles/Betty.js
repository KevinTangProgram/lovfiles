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
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Tang, Betty P.</h1>
            <div className="profileBox">
                <div className="profileInnerBox">
                    <img src={urlString + "people/betty.jpg"} className="profileImage" alt=""></img>
                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Title:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Chief Financial Officer</h2>
                        <h2 className="profileMargin">Division:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">Sales and Marketing</h2>
                        <h2 className="profileMargin">Specialities:</h2>
                        <div>
                            <h2 className="profileMargin" id="profileLighterFont">Real Estate Investments</h2>
                        </div>
                    </div>

                    <div className="profileInfoBox">
                        <h2 className="profileMargin">Email:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">btang1963@gmail.com</h2>
                        <h2 className="profileMargin">Cell Phone:</h2>
                        <h2 className="profileMargin" id="profileLighterFont">(909)-262-9460</h2>
                    </div>
                </div>
            </div>
            <h1 style={{"textAlign": "center", "fontSize": "40px", "marginBottom": "5vh", "marginTop": "5vh"}}>Short Biography</h1>
            <div style={{"width": "40%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "10vh"}}>
                <p1 style={{"fontSize": "24px", "lineHeight": "150%"}}>Betty Tang is a highly accomplished real estate investor with an impressive and diverse portfolio spanning over 30 years. Her journey in the real estate industry has been marked by astute investments, strategic acquisitions, and a deep understanding of the intricacies of property markets both in the United States and overseas. Throughout her career, Betty has displayed a remarkable ability to identify lucrative real estate opportunities. Her keen eye for market trends, coupled with her extensive network of industry contacts, has allowed her to make sound investment decisions that have consistently yielded positive returns. One of the distinguishing features of Betty's real estate career is her broad geographical reach. She owns properties not only across the United States but also in international markets. This global perspective has afforded her the advantage of diversifying her investment portfolio and mitigating risks associated with regional market fluctuations. Betty's extensive experience has also made her a respected figure within the real estate community. She is often sought after for her insights and expertise, and her willingness to mentor and share her knowledge has helped aspiring investors navigate the complexities of the real estate market. Betty Tang's legacy in the real estate industry is one of exemplary success and foresight. Her ability to identify, acquire, and manage properties with precision has not only secured her financial prosperity but has also solidified her reputation as a prominent figure in the world of real estate investing. With over three decades of experience, Betty continues to thrive in an ever-evolving market, setting an inspiring example for both seasoned professionals and newcomers in the field.</p1>
            </div>
        <Footer/>
    </>)
}