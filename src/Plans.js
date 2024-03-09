//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/plans.css'

const urlString = ""   //for some reason, behaves the opposite as others

export default function Plans() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <div className="planFlex">
                <div className="planGrid">
                    <img src={urlString + "412/4124.PNG"} className="planImage" alt=""></img>
                    <div>
                        <h1 className="planh1">Morning Glory</h1>
                        <p1 className="planp1">A cosy 1 bedroom, 1 bath home that’s perfect for any individual or couple</p1>
                        <div className="downloadOutlineAbout">
                            <a className="downloadBoxAbout hover-highlight-animation-download" href="https://kevintangprogram.github.io/lov/files/412.pdf" target="_blank" rel="noreferrer">Download Plan</a>
                        </div>
                    </div>
                </div>
                <div className="planGrid">
                    <img src={urlString + "738/7381.PNG"} className="planImage" alt=""></img>
                    <div>
                        <h1 className="planh1">Lotus</h1>
                        <p1 className="planp1">A spacious 3 bedroom, 2 bath home that’s ideal for the young family</p1>
                        <div className="downloadOutlineAbout">
                            <a className="downloadBoxAbout hover-highlight-animation-download" href="https://kevintangprogram.github.io/lov/files/755.pdf" target="_blank" rel="noreferrer">Download Plan</a>
                        </div>
                    </div>
                </div>
                <div className="planGrid">
                    <img src={urlString + "1196/11965.png"} className="planImage" alt=""></img>
                    <div>
                        <h1 className="planh1">Sunflower</h1>
                        <p1 className="planp1">A large 4 bedroom, 4 bath home that’s suitable for multiple generations to live together</p1>
                        <div className="downloadOutlineAbout">
                            <a className="downloadBoxAbout hover-highlight-animation-download" href="https://kevintangprogram.github.io/lov/files/1033.pdf" target="_blank" rel="noreferrer">Download Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </>)
}