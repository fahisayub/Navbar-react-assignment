import React from "react";
import '../style/navbar.css';
import Midlink from './midlinks'
import Connectbtn from "./button";
import Logo from "./logo";

let links=[{id:'Service', link:'https://create-react-app.dev/'},
{id:'Projects',link:'https://create-react-app.dev/'},
{id:'About',link:'https://create-react-app.dev/'}];
 
let Navbar=()=>{
    return <div className="navbar">
        <Logo/>
        <div className="links">
        {links.map((link)=>(
            <Midlink {...link} />
        ))}
        </div>
        
        
        <Connectbtn/>
        
    </div>
}

export default Navbar;