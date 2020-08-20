import React,{useState, useRef} from 'react';
import VideoCard from "./VideoCard";

function Video(props) {
    const[isVideoPlaying,setVideoPlaying] = useState(false);
    const vidRef = useRef(null);
    const  VideoClick = () => {
        
        if(isVideoPlaying){
            //stop
            vidRef.current.pause();
            setVideoPlaying(false)
        }
        else{
            //play
            vidRef.current.play();
            setVideoPlaying(true)
        }
    }

    return (
        <div>
            <VideoCard vidSrc="https://www.w3schools.com/tags/movie.ogg" VideoClick = {VideoClick} vidRef={vidRef}/>
        </div>
    );
}

export default Video;

