import React from 'react';
import './style.scss';

const VideoBackground = ({videoPath}) => {

    return (
        <div className="fullscreen-bg">
            <video loop muted autoPlay playsInline className="fullscreen-bg__video">
                <source src={videoPath} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoBackground;