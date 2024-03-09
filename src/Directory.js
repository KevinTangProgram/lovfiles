//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import "./css/directory.css"

const urlString = ""
const urlString2 = "/lov"

const people = [
    {name: "Tang, Che L.", image: "che.jpg", link: "tang", description: "Che is a highly accomplished structural engineer with over two decades of invaluable experience in the field. His impressive career has been marked by a prolific portfolio of successful projects throughout the greater Southern California area..."},
    {name: "Tang, Che K.", image: "che_k.jpg", link: "tang_che_k", description: "Che Tang boasts over two decades of experience as a distinguished software engineer. His career has been marked by a remarkable journey through the ever-evolving landscape of technology. Che's expertise and dedication have made him..."},
    {name: "Tang, Betty P.", image: "betty.jpg", link: "tang_betty", description: "Betty Tang is a highly accomplished real estate investor with an impressive and diverse portfolio spanning over 30 years. Her journey in the real estate industry has been marked by astute investments, strategic acquisitions..."},
    {name: "Barajas, Alfonso", image: "al2.jpg", link: "barajas", description: "Alfonso Barajas, an esteemed project manager with an illustrious career spanning over 30 years, stands as a luminary in the field of design and construction. His wealth of experience encompasses a diverse range of projects..."},
    {name: "Tai, Ivan", image: "ivan1.jpeg", link: "tai", description: "Ivan Tai stands as a beacon of innovation and expertise in his role as the Lead Engineer at Tang Structural Engineers. He recently earned Master's degree in Civil Engineering from California State University, Long Beach in 2022 and poised to attain..."},
    {name: "Tang, Kevin", image: "kevin.jpg", link: "tang_kevin", description: "Kevin Tang's journey at Tang Structural Engineer began after graduating from UCLA with a degree in Chemistry in 2023. While his academic background may seem unrelated to the world of structural engineering, Kevin's innate curiosity..."},
]

export default function Sustainibility() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <button onClick={() => {
                window.history.go(-1)
            }} style={{"border": "none", "background": "transparent", "marginLeft": "40px", "cursor": "pointer"}}>❮ BACK</button>
            <h1 style={{"textAlign": "center", "marginBottom": "-5vh"}}>Directory</h1>
            <div style={{"display": "grid", "gridTemplateColumns": "25% 25% 25% 25%", "width": "1215px", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "5vh"}}>
                {people.map((names) => (
                    <div className="directoryImage">
                        <img src={urlString + "people/" + names.image} alt=""></img>
                        
                        <div className="directoryText">
                            <h2>{names.name}</h2>
                            <p1>{names.description}</p1>
                            <a className="directoryLearnMore" href={urlString2 + "/#/directory/" + names.link}>Learn More</a>
                        </div>
                        <h1 style={{"fontSize": "24px"}}>{names.name}</h1>
                    </div>
                ))}
            </div>
        <Footer/>
    </>)
}