import React from "react"

/*
    Display the video as the page loads
    used a prop from App wich is the actual src
    May have to comeback and do something else, link VideoInfo
    I'm sure
*/
function VideoDisplay({ onDisplay}) {

    return (
        <iframe
        width="919"
        height="525"
        src={onDisplay}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}

export default VideoDisplay