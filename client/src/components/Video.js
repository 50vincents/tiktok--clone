import React, { useRef, useState } from 'react'
import '../styles/Video.css';
import VideoSidebar from './VideoSidebar';
import VideoFooter from './VideoFooter';
import ReactPlayer from 'react-player'

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // if video is playing stop
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className='video'>
      <ReactPlayer
        className='video-player'
        url={url}
      />
      <VideoFooter 
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar 
        likes={likes}
        shares={shares}
        messages={messages}
      />
    </div>
  )
}

export default Video
