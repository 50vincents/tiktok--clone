import React from 'react'
import '../styles/VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker';

function VideoFooter({ channel, description, song }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter-text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter-ticker'>
          <MusicNoteIcon className='videoFooter-icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter-record'
        src='https://static.thenounproject.com/png/934821-200.png'
        alt=''
      />
    </div>
  )
}

export default VideoFooter
