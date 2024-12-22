
import React from  "react";
import ReactDOM from "react-dom/client"
import logo from '../src/assets/logo.jpg';
import './logo.css';

 function LogoComponent() {
    return (
        <div className="logo">
        <img src={logo}></img>
        </div>
    );
}

export default LogoComponent;

//const htmlRoot=document.getElementById("root");
//const rootReact=ReactDOM.createRoot(htmlRoot);
//rootReact.render(<LogoComponent/>);
