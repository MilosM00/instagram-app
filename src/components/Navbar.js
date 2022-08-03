import React from "react";
import "./Navbar.css";
import imageLogo from "../images/instagram-logo.png";
import users from "../data/users";

const Navbar = ({displayHome, displayExplore, displayProfile}) =>{
    return(

        <div className="navbar">
            
            <img src={imageLogo} alt="instagram" className="image-instagram-logo" />

            <div className="input-search">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className="inline-navbar">
                <p onClick={displayHome}><i className="fa fa-home"></i></p>
                <p onClick={displayExplore}><i className="fa fa-compass"></i></p>
                <img src={users[0].profileImage} alt="profile" className="image-profile" onClick={displayProfile} />
            </div>

        </div>

    );
};

export default Navbar;