import React from 'react';
import './App.scss';
import WeatherInfo from './components/WeatherInfo';
import SearchBar from './components/SearchBar';
import VideoBackground from './components/VideoBackground';
import MadeWithLove from './components/MadeWithLove';
import { CityContextProvider } from './contexts/CityContext';
import Cursor from './components/Cursor';

function App() {

  const handleOnMouseMove = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  }

  const handleOnMouseDown = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.border = "2px solid #30cfff";
    cursor.style.width = "2rem";
    cursor.style.height = "2rem";
  }

  const handleOnMouseUp = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.border = "";
    cursor.style.width = "";
    cursor.style.height = "";
  };

  const handleOnMouseLeave = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
  }

  const handleOnMouseEnter = () => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "";
  }

  return (    
    <CityContextProvider>
      <div
        onMouseMove={handleOnMouseMove}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onMouseLeave={handleOnMouseLeave}
        onMouseEnter={handleOnMouseEnter}
      >
        <Cursor />
        <VideoBackground videoPath="./water.mp4" />
        
        <nav className="navbar sticky-top header-bar">
          <div className="text-logo">WetGoat</div>
          <SearchBar />
        </nav>
        <WeatherInfo />
        <div className="footer">
          <MadeWithLove color="#222222" className="footer__text" />
        </div>
      </div>
    </CityContextProvider>
  );
}

export default App;
