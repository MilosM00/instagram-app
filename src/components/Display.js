import React from "react";
import "./Display.css";

const Display = ({home, explore, profile, login, usernameEvent, passwordEvent, loginEvent, currentUser, password, username}) =>{
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
                    <div className="inline-profile">

                        <img 
                            src={currentUser?.profileImage} 
                            alt="profile" 
                            className="profile-image" 
                        />

                        <div className="info-profile">

                            <p>{currentUser?.username}</p>

                            <div className="inline-info">

                                <p>
                                    <b>{currentUser?.posts}</b> posts
                                </p>

                                <p>
                                    <b>{currentUser?.followers}</b> followers
                                </p>

                                <p>
                                    <b>{currentUser?.following}</b> following
                                </p>

                            </div>

                            <p>{currentUser?.firstName} {currentUser?.lastName}</p>

                            <p className="description">{currentUser?.description}</p>

                        </div>

                    </div>
                </div>
            }

            {login === true &&
                <div className="login">


                    <div className="inline-login">

                        <p className="title-login">Login to Instagram!</p>

                        <input 
                            type="text" 
                            placeholder="username" 
                            className="input-username" 
                            value={username} 
                            onChange={usernameEvent} 
                        />

                        <input 
                            type="password" 
                            placeholder="password" 
                            className="input-password" 
                            value={password} 
                            onChange={passwordEvent} 
                        />

                        <button className="button-login" onClick={loginEvent}>Login</button>

                    </div>   
                </div>
            }

        </>

    );
};

export default Display;