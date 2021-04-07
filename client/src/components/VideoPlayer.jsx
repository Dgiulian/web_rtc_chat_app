import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

function VideoPlayer() {
  const {
    name,
    callAccepted,
    myVideoRef,
    userVideoRef,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  return (
    <div className="grid">
      {stream && (
        <div>
          <h5>{name || 'Name'}</h5>

          <video
            className="bg-white border"
            playsInline
            muted
            ref={myVideoRef}
            autoPlay
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <h5>{call.name || 'User'}</h5>
          <video
            className="bg-white border"
            playsInline
            muted
            ref={userVideoRef}
            autoPlay
          />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
