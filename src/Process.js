//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

const urlString = ""

export default function Process() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            
            <div style={{"display": "flex", "width": "90%", "marginLeft": "auto", "marginRight": "auto", "flexDirection": "column"}}>
                <img src={urlString + "timeline2.jpg"} style={{"marginLeft": "auto", "marginRight": "auto", "width": "100%"}} alt=""></img>
                <h1 style={{"fontSize": "36px", "marginBottom": "100px", "marginTop": "50px"}}>The Three Stages</h1>
                <div style={{"display": "grid", "gridTemplateColumns": "50% 50%"}}>
                    <div style={{"display": "flex", "flexDirection": "column"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 1: Laying a Robust Foundation</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            The new home begins by laying a robust foundation for lasting structural integrity. This phase involves meticulous attention to detail where electrical wires are pulled, plumbing pipes are connected, and the concrete foundation is poured. This critical step ensures that your home's essential systems are in place, setting the groundwork for functionality and efficiency. By carefully orchestrating the plumbing and electrical components, we ensure that the foundation of your new home will remain strong for decades to come.
                        </p2>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 2: Constructing the Core Structure</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>The second step focuses on constructing the core structure of your home. First, the roof of the house is assembled on the ground, ensuring each component fits seamlessly and greatly expediting the process of roof construction compared to traditional methods. Next, a series of pulleys will raise the roof and hold it in place just above the height of the panels. Finally, the pre-engineered wall panels will be slid into position, creating the skeletal framework of your future home.</p2>
                    </div>
                    <div style={{"display": "flex", "flexDirection": "column"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 3: Architectural Finishes that Harmonize</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>In the final phase, our focus shifts to the architectural finishes that harmonize your new home with the surrounding community and create a welcoming living environment. Windows are installed that flood your space with natural light, beautifully crafted roof tiles are added that protect your home against the elements, and insulation is fixed into place ensuring that every inch of your home is properly insulated for energy efficiency. Finally, the interior and exterior painting is completed with meticulous attention to detail, ensuring that your new home is built exactly to your specifications. Our three-step process is not only cost-effective but also results in a high-quality, energy-efficient home that's built to last. We pride ourselves on delivering not just houses, but homes where families can create cherished memories for generations to come.</p2>
                    </div>
                </div>
                <h1 style={{"fontSize": "36px", "marginBottom": "100px", "marginTop": "100px"}}>Options for Building Your New Home</h1>
                <div style={{"display": "grid", "gridTemplateColumns": "80% 20%"}}>
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 1: Building Through Us</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            Our fastest option. Everything will be taken care of by us. Just be ready to move into your new home in two months time.
                        </p2>
                    </div>
                    <img src={urlString + "us.png"} style={{"width": "100%", "height": "131px"}} alt=""></img>
                </div>
                <div style={{"display": "grid", "gridTemplateColumns": "20% 80%"}}>
                    <img src={urlString + "contractor.png"} style={{"width": "50%", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 2: Going Through Our Contractors</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            Our most flexible option. After deciding that you want to build a home, you choose the contractor that you would like to help build your home. They will meet with you to discuss their pricing and the best course of action for your new home. All the contractors on our list have worked with us for years and we fully trust in their work.
                        </p2>
                    </div>
                </div>
                <div style={{"display": "grid", "gridTemplateColumns": "80% 20%"}}>
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 3: Do It Yourself</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            The best option for creating an unforgettable family project. We will send you all the materials for the house structure that you need, including detailed plans for how to assemble your new home and an engineer to visually inspect your home once it is completed to have it certified and ready to move in.
                        </p2>
                    </div>
                    <img src={urlString + "diy.png"} style={{"width": "100%"}} alt=""></img>
                </div>
            </div>
        <Footer/>
    </>)
}