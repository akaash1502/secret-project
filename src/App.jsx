import React from 'react';
import MainBox from './components/MainBox';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <MainBox />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
