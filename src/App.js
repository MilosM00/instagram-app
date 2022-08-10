import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import users from "./data/users";

const App = () =>{

    const [home, setHome] = React.useState(true);
    const [explore, setExplore] = React.useState(false);
    const [profile, setProfile] = React.useState(false);

    const [login, setLogin] = React.useState(true);

    const displayHome = () =>{
        setHome(true);
        setExplore(false);
        setProfile(false);
        document.body.scrollIntoView();
    };
    
    const displayExplore = () =>{
        setHome(false);
        setExplore(true);
        setProfile(false);
        document.body.scrollIntoView();
    };

    const displayProfile = () =>{
        setHome(false);
        setExplore(false);
        setProfile(true);
        document.body.scrollIntoView();
    };

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const usernameEvent = (e) =>{
        setUsername(e.target.value);
    }

    const passwordEvent = (e) =>{
        setPassword(e.target.value);
    }

    let currentUser = users.find((value) => value.username === username)

    const loginEvent = () =>{
        if(currentUser?.password === password)
        {
            setLogin(false);
        }
    };

    const logoutEvent = () =>{
        document.body.scrollIntoView();
        setHome(true);
        setLogin(true);
        setHamburger(false);
        setExplore(false);
        setProfile(false);
        setUsername("");
        setPassword("");
    };

    const [hamburger, setHamburger] = React.useState(false);

    const hamburgerEvent = () =>{
        setHamburger(!hamburger);
    };

    return(

        <div>

            <Navbar 
                displayHome={displayHome}
                displayExplore={displayExplore}
                displayProfile={displayProfile}
                currentUser={currentUser}
                logoutEvent={logoutEvent}
                hamburger={hamburger}
                hamburgerEvent={hamburgerEvent}
            />

            <Display 
                home={home}
                explore={explore}
                profile={profile}
                login={login}
                setLogin={setLogin}
                usernameEvent={usernameEvent}
                passwordEvent={passwordEvent}
                loginEvent={loginEvent}
                password={password}
                username={username}
                currentUser={currentUser}
                logoutEvent={logoutEvent}
            />

        </div>

    );
};

export default App;