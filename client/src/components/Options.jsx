import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaClipboard, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import { SocketContext } from '../SocketContext';

function Options({ children }) {
  const {
    me,
    callAccepted,
    callEnded,
    name,
    setName,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className="container">
      <div className="border">
        <form
          action=""
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <label htmlFor="name">Account Info</label>
            <input
              type="text"
              id="name"
              className="border "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <button>
                <FaClipboard />
                Copy your Id
              </button>
            </CopyToClipboard>
          </div>
          <div>
            <label htmlFor="idToCall">Account Info</label>
            <input
              type="text"
              id="idToCall"
              value={idToCall}
              className="border "
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {callAccepted && !callEnded ? (
              <button onClick={leaveCall}>
                <FaPhoneSlash />
                Hang up
              </button>
            ) : (
              <button onClick={() => callUser(idToCall)}>
                <FaPhone />
                Call
              </button>
            )}
          </div>
        </form>
        {children}
      </div>
    </div>
  );
}

export default Options;
