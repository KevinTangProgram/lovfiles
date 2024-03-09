import React, { useState, useEffect } from 'react';
import './css/navbar.css'
//import axios from 'axios';

const urlString = "";
const urlString2 = "/lov";

export default function Navigationbar()
{
    //axios.get("https://tiny-blue-sparrow-robe.cyclic.app/mainlogo")
    const [dropboxState, setDropboxState] = useState(false);
    const [dropbox, setDropbox] = useState(() => {
        return <div></div>;
    })

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
        }
        else
        {
            setDropbox(<div></div>);
        }
    }, [dropboxState])

    return (
        <>
            <button onClick={toggleDropboxState} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            {dropbox}
            <div className="topGrid">
                <div>
                    <a href={urlString2} style={{"width": "80px"}}><img src={urlString + "logo.png"} alt="" className="fitSize"></img></a>
                    <header className="navigationBar">
                        <nav>
                            <ul>
                                {/*<li><a href={urlString2 + "/"} className="hover-underline-animation">HOME</a></li>*/}
                                <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation">PORTFOLIO</a></li>
                                <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation">YOUR NEW HOMES</a></li>
                                <li><a href={urlString2 + "/#/process"} className="hover-underline-animation">HOW IT WORKS</a></li>
                                <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation">DOWNLOAD FREE PLANS</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </>
    )
}