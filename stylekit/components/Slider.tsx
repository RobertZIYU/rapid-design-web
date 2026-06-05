import { useState, type ChangeEvent } from 'react';
import './Slider.css';

export interface SliderProps {
  value?: number | number[];
  defaultValue?: number | number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: number | number[]) => void;
  className?: string;
}

export const Slider = ({
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = 'horizontal',
  onChange,
  className = '',
}: SliderProps) => {
  const isControlled = controlledValue !== undefined;
  const initialValue = isControlled ? controlledValue : defaultValue;
  const [internalValue, setInternalValue] = useState(initialValue);
  const value = isControlled ? controlledValue : internalValue;

  const isRange = Array.isArray(value);
  const values = isRange ? value : [value];

  const handleChange = (newValue: number | number[]) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newVal = Number(e.target.value);

    if (isRange) {
      const newValues = [...values];
      newValues[index] = newVal;
      // Ensure values stay ordered
      newValues.sort((a, b) => a - b);
      handleChange(newValues);
    } else {
      handleChange(newVal);
    }
  };

  const getPercentage = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  // For single value, range starts at 0%. For multiple values, start at min value
  const rangeStart = isRange ? getPercentage(Math.min(...values)) : 0;
  const rangeEnd = getPercentage(Math.max(...values));

  const sliderClasses = [
    'slider',
    `slider--${orientation}`,
    disabled && 'slider--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const rangeStyle =
    orientation === 'horizontal'
      ? { left: `${rangeStart}%`, width: `${rangeEnd - rangeStart}%` }
      : { bottom: `${rangeStart}%`, height: `${rangeEnd - rangeStart}%` };

  return (
    <div className={sliderClasses}>
      <div className="slider__track">
        <div className="slider__range" style={rangeStyle} />
        {values.map((val, index) => {
          const thumbStyle =
            orientation === 'horizontal'
              ? { left: `${getPercentage(val)}%` }
              : { bottom: `${getPercentage(val)}%` };

          return <div key={index} className="slider__thumb" style={thumbStyle} />;
        })}
      </div>
      {values.map((val, index) => (
        <input
          key={index}
          type="range"
          className="slider__input"
          min={min}
          max={max}
          step={step}
          value={val}
          disabled={disabled}
          onChange={(e) => handleInputChange(e, index)}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={val}
          aria-orientation={orientation}
          style={{ zIndex: values.length - index }}
        />
      ))}
    </div>
  );
};
