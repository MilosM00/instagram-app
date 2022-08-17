import React from "react";
import "./Story.css";

const Story = ({image, username, view}) =>{

    const [story, setStory] = React.useState(view);

    const viewStory = () =>{
        setStory(false);
    }

    return(
        <div>
            <div 
                className="div-story"
                onClick={viewStory}
                style={story === true ? 
                    {background: "linear-gradient(to right, #DE3163, #FF3800)"} : 
                    {background: "linear-gradient(to right, rgb(95,95,95), rgb(190,190,190))"}
                }
            >
                <img 
                    src={image} 
                    alt="profile" 
                    className="profile-image-story"
                />
            </div>
            <p className="username-story">{username}</p>
        </div>
    );
};

export default Story;