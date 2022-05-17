import React from "react";
import '../style/midlink.css'


let Midlink=({id,link})=>{
    return <div className="mid">
        <a href={link}>{id}</a>
       
    </div>;
}

export default Midlink;