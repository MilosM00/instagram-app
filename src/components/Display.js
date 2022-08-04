import React from "react";
import "./Display.css";
import users from "../data/users";

const Display = ({home, explore, profile, login}) =>{
    return(

        <>

            {home === true &&
                <div className="home">  

                    HOME

                </div>
            }

            {explore === true &&
                <div className="explore">

                    EXPLORE

                </div>
            }

            {profile === true &&
                <div className="profile">

                    PROFILE

                </div>
            }

            {login === true &&
                <div className="login">


                    <div className="inline-login">

                        <p className="title-login">Login to Instagram!</p>

                        <input type="text" placeholder="username" className="input-username" />
                        <input type="password" placeholder="password" className="input-password" />

                        <button className="button-login">Login</button>

                    </div>   
                </div>
            }

        </>

    );
};

export default Display;