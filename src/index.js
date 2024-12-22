
import React from  "react";
import ReactDOM from "react-dom/client"
import logo from '../src/assets/logo.jpg';
import  LogoComponent from "./logo";
import SearchbarComponent from "./SearchBar";
import './App.css';
import IconComponent from "./icon";




function App() {
    return (
   <div className="header">
    
    <LogoComponent />
    <SearchbarComponent />
    <IconComponent/>
    </div>
);
        //<div className="logo">
       //<img src={logo}></img>
        //</div>
        

}

const htmlRoot=document.getElementById("root");
const rootReact=ReactDOM.createRoot(htmlRoot);
rootReact.render(<App/>);