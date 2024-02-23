import React, { useState, useEffect, useRef } from "react";
import "./range-sliders.css";

/**
 *
 * @param {min, max, value, step} param
 * @returns
 */

function RangeSlider({ min, max, value, step }) {
  /**
   *  Range Slider Hooks
   */

  const [sliderRange, setSliderRange] = useState(value);
  const [inputValue, setInputValue] = useState(value);
  const sliderRef = useRef(null);

  // Updates the input field and the slider bar when a new value is entered by typing
  function handleSliderInput() {
    const range = max - min;
    const distance = sliderRef.current.value - min;

    const parcentAge = (distance / range) * 100;

    setSliderRange(parcentAge);

    setInputValue(sliderRef.current.value);
  }

  // Sets the initial values for both fields when the component mounts
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
      const parsentAge = (distance / range) * 100;
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
