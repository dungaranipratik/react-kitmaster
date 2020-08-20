import React from 'react';
import style from "./video.scss";


function Video(props) {
    
    return (
        <div className="container">
            <div className="vidWrap">
                <video ref={props.vidRef}  controls onClick={props.VideoClick} className="videoPlayer" src={props.vidSrc} alt="video" />
            </div>
        </div>
    );
}

export default Video;
