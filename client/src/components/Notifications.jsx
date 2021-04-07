import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div className="flex justify-center">
          <p>
            {call.name} is calling
            <button onClick={answerCall}>Answer</button>
          </p>
        </div>
      )}
      <button></button>
    </>
  );
}

export default Notifications;
