import Video from "./Video"
import { useEffect, useRef } from "react"
function App(){
  const videoRef = useRef()
  useEffect(()=>{
    console.log(videoRef);
  })
  
  const handlePlay=() =>{
    videoRef.current.play()
  }
  const handlePause=() =>{
    videoRef.current.pause()
  }
  return (
     <div style={{ padding:'30px'}}>
        <h2>Nhạc hay </h2>
        <Video ref = {videoRef}/>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
     </div>
  )
}

export default App