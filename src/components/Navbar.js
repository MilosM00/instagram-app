import React from "react";
import "./Navbar.css";
import imageLogo from "../images/instagram-logo.png";

const Navbar = () =>{
    return(

        <div className="navbar">
            
            <img src={imageLogo} alt="instagram" className="image-instagram-logo" />

            <div className="input-search">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className="inline-navbar">
                <p><i className="fa fa-home"></i></p>
                <p><i className="fa fa-compass"></i></p>
            </div>

        </div>

    );
};

export default Navbar;