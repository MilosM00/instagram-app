import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";

const App = () =>{

    const [home, setHome] = React.useState(false);
    const [explore, setExplore] = React.useState(false);
    const [profile, setProfile] = React.useState(false);

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
            />

            <Display 
                home={home}
                explore={explore}
                profile={profile}
            />

        </div>

    );
};

export default App;