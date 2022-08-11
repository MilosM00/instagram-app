import React from "react";
import "./Display.css";
import users from "../data/users";

const Display = ({home, explore, profile, login, usernameEvent, passwordEvent, loginEvent, currentUser, password, username, logoutEvent}) =>{

    const [follow, setFollow] = React.useState(true);
    const [follow2, setFollow2] = React.useState(true);
    const [follow3, setFollow3] = React.useState(true);
    const [follow4, setFollow4] = React.useState(true);
    const [follow5, setFollow5] = React.useState(true);

    const followEvent = () =>{
        setFollow(!follow);
    };
    const followEvent2 = () =>{
        setFollow2(!follow2);
    };
    const followEvent3 = () =>{
        setFollow3(!follow3);
    };
    const followEvent4 = () =>{
        setFollow4(!follow4);
    };
    const followEvent5 = () =>{
        setFollow5(!follow5);
    };

    const followAllEvent = () =>{
        setFollow(!follow);
        setFollow2(!follow);
        setFollow3(!follow);
        setFollow4(!follow);
        setFollow5(!follow);
    }

    return(

        <>

            {home === true &&
                <div className="home">  

                    <div className="story-posts-container">
                        <div className="story">
                            {
                                users.map((value, id) =>{
                                    return(
                                        <div key={id}>
                                            <div 
                                                className="div-story"
                                                style={value.story === true ? 
                                                    {background: "linear-gradient(to right, #DE3163, #FF3800)"} : 
                                                    {background: "linear-gradient(to right, rgb(95,95,95), rgb(190,190,190))"}
                                                }
                                            >
                                                <img 
                                                    src={value.profileImage} 
                                                    alt="profile" 
                                                    className="profile-image-story"
                                                />
                                            </div>
                                            <p className="username-story">{value.username}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* posts */}

                    </div>

                    <div className="suggestions">
                        <div>
                            <img src={currentUser?.profileImage} alt="profile" />
                            <p>
                                {currentUser?.username} <br />
                                {currentUser?.firstName} {currentUser?.lastName}
                            </p>
                            <button className="button-switch" onClick={logoutEvent} >Switch</button>
                        </div>

                        <p className="title-suggestions">Suggestions For You</p>

                        <button className="button-follow" onClick={followAllEvent}>Follow All</button>

                        <div>
                            <img src={users[10].profileImage} alt="profile" />
                            <p>{users[10].username}</p>
                            <button className="button-follow" onClick={followEvent}>{follow === true ? "Follow" : "Unfollow"}</button>
                        </div>

                        <div>
                            <img src={users[7].profileImage} alt="profile" />
                            <p>{users[7].username}</p>
                            <button className="button-follow" onClick={followEvent2}>{follow2 === true ? "Follow" : "Unfollow"}</button>
                        </div>

                        <div>
                            <img src={users[8].profileImage} alt="profile" />
                            <p>{users[8].username}</p>
                            <button className="button-follow" onClick={followEvent3}>{follow3 === true ? "Follow" : "Unfollow"}</button>
                        </div>

                        <div>
                            <img src={users[15].profileImage} alt="profile" />
                            <p>{users[15].username}</p>
                            <button className="button-follow" onClick={followEvent4}>{follow4 === true ? "Follow" : "Unfollow"}</button>
                        </div>

                        <div>
                            <img src={users[11].profileImage} alt="profile" />
                            <p>{users[11].username}</p>
                            <button className="button-follow" onClick={followEvent5}>{follow5 === true ? "Follow" : "Unfollow"}</button>
                        </div>
                            
                    </div>

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