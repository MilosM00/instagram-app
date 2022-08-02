import React from "react";
import "./Display.css";

const Display = ({home, explore, profile}) =>{
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

        </>

    );
};

export default Display;