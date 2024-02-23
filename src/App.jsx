import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RangeSlider from "./components/RangeSliders";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Custom Slider</h1>
      
      <div>
        <RangeSlider min={-50} max={-5}  value={-5} step={1} />
        <RangeSlider min={0} max={200}  value={100} step={5} />
        <RangeSlider min={10} max={20}  value={15}  step={1}/>
      </div>
    </>
  );
}

export default App;
