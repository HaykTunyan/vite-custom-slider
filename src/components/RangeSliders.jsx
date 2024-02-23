import React, { useState, useEffect, useRef } from "react";
import "./range-sliders.css";

function RangeSlider({ min, max, value, step }) {
  const [sliderRange, setSliderRange] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const sliderRef = useRef(null);

  function handleSliderInput() {
    const range = max - min;
    const distance = sliderRef.current.value - min;

    const parcentAge = (distance / range) * 100;

    setSliderRange(parcentAge);

    setInputValue(sliderRef.current.value);
  }

  function handleNumberInput(element) {

    const newValue = parseInt(element.target.value);

    if (newValue < min) {
      setInputValue(min);
      setSliderRange(0);
    } else if (newValue > max) {
      setInputValue(max);
      setSliderRange(100);
    } else {
      setInputValue(newValue);
      const range = max - min;
      const distance = newValue - min;
      const parsentAge = (distance/range)*100;
      setSliderRange(parsentAge);
    }
  }

  useEffect(() => {
    handleSliderInput();
  }, [sliderRef]);

  return (
    <div className="range-slider">
      <div className="slider-value">
        <small> {min} </small>
        <input
          type="number"
          value={inputValue}
          onInput={handleNumberInput}
          min={min}
          max={max}
          step={step}
          ref={sliderRef}
          className="number-input"
        />
        <small>{max}</small>
      </div>
      <div className="slider-container">
        <input
          type="range"
          onInput={handleSliderInput}
          value={inputValue}
          min={min}
          max={max}
          ref={sliderRef}
          step={step}
          className="slider"
        />
        <div
          className="slider-tumbe"
          style={{ left: `calc(${sliderRange} % - 0.5em)` }}
        ></div>
        <div className="progress" style={{ width: `${sliderRange}%` }}></div>
      </div>
    </div>
  );
}

export default RangeSlider;
