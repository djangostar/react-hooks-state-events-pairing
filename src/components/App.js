import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay onDisplay={video.embedUrl} /> 
    </div>
  );
}

export default App;
