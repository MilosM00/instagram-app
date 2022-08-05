import React from "react";
import "./Navbar.css";
import imageLogo from "../images/instagram-logo.png";

const Navbar = ({displayHome, displayExplore, displayProfile, currentUser, logoutEvent, hamburger, hamburgerEvent}) =>{
    return(

        <div className="navbar">
            
            <img src={imageLogo} onClick={displayHome} alt="instagram" className="image-instagram-logo" />

            <div className="input-search">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className="inline-navbar">
                <p onClick={displayHome}><i className="fa fa-home"></i></p>
                <p onClick={displayExplore}><i className="fa fa-compass"></i></p>
                <img 
                    src={currentUser?.profileImage} 
                    alt="profile" 
                    className="image-profile" 
                    onClick={displayProfile} 
                />
                <p onClick={logoutEvent}><i className="fa fa-door-open"></i></p>
            </div>

            <p 
                className="hamburger" 
                onClick={hamburgerEvent}
            >
                {hamburger === true ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </p>

            {hamburger === true &&
                <div className="hamburger-list">
                    <ul>
                        <img 
                            src={currentUser?.profileImage} 
                            alt="profile" 
                            className="image-profile" 
                            onClick={displayProfile} 
                        />
                        <li><p onClick={displayHome}><i className="fa fa-home"></i></p></li>
                        <li><p onClick={displayExplore}><i className="fa fa-compass"></i></p></li>
                        <li><p onClick={logoutEvent}><i className="fa fa-door-open"></i></p></li>
                    </ul>
                </div>
            }

        </div>

    );
};

export default Navbar;