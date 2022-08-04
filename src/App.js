import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";

const App = () =>{

    const [home, setHome] = React.useState(true);
    const [explore, setExplore] = React.useState(false);
    const [profile, setProfile] = React.useState(false);

    const [login, setLogin] = React.useState(true);

    const displayHomeLogo = () =>{
        setHome(true);
        setExplore(false);
        setProfile(false);
        document.body.scrollIntoView();
    };

    const displayHome = () =>{
        setHome(true);
        setExplore(false);
        setProfile(false);
    };
    
    const displayExplore = () =>{
        setHome(false);
        setExplore(true);
        setProfile(false);
    };

    const displayProfile = () =>{
        setHome(false);
        setExplore(false);
        setProfile(true);
    };

    return(

        <div>

            <Navbar 
                displayHome={displayHome}
                displayExplore={displayExplore}
                displayProfile={displayProfile}
                displayHomeLogo={displayHomeLogo}
            />

            <Display 
                home={home}
                explore={explore}
                profile={profile}
                login={login}
            />

        </div>

    );
};

export default App;