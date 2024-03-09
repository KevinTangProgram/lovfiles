//import React from 'react';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Workspace from './Workspace';
import Form from './Form';
import Sustainibility from './Sustainibility';
import Directory from './Directory';
import Portfolio from './Portfolio';
import Process from './Process';
import Plans from './Plans';
import Homes from './Homes';
import Avalon from './Avalon';
import Crestview from './Crestview';
import Riverside from './Riverside';
import Che from './profiles/che';
import Chek from './profiles/Chek';
import Betty from './profiles/Betty';
import Alfonso from './profiles/Alfonso';
import Ivan from './profiles/Ivan';
import Kevin from './profiles/Kevin';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div id="navigation">
          <Link to="/"></Link>
          <Link to="/contact"></Link>
          <Link to="/about"></Link>
          <Link to="/workspace"></Link>
          <Link to="/form"></Link>
          <Link to="/sustainibility"></Link>
          <Link to="/directory"></Link>
          <Link to="/portfolio"></Link>
          <Link to="/process"></Link>
          <Link to="/plans"></Link>
          <Link to="/homes"></Link>
          <Link to="/directory/tang"></Link>
          <Link to="/directory/tang_che_k"></Link>
          <Link to="/directory/tang_betty"></Link>
          <Link to="/directory/barajas"></Link>
          <Link to="/directory/tai"></Link>
          <Link to="/directory/tang_kevin"></Link>
          <Link to="/morning_glory"></Link>
          <Link to="/lotus"></Link>
          <Link to="/sunflower"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/workspace" element={<Workspace />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/sustainibility" element={<Sustainibility />}/>
            <Route path="/directory" element={<Directory />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/process" element={<Process />}/>
            <Route path="/plans" element={<Plans />}/>
            <Route path="/homes" element={<Homes />}/>
            <Route path="/directory/tang" element={<Che />}/>
            <Route path="/directory/tang_che_k" element={<Chek />}/> 
            <Route path="/directory/tang_betty" element={<Betty />}/>
            <Route path="/directory/barajas" element={<Alfonso />}/>
            <Route path="/directory/tai" element={<Ivan/>}/>
            <Route path="/directory/tang_kevin" element={<Kevin />}/>
            <Route path="/morning_glory" element={<Avalon />}/>
            <Route path="/lotus" element={<Crestview />}/>
            <Route path="/sunflower" element={<Riverside />}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App;
