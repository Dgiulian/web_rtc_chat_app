import React from 'react';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="">
      <Navbar />
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
