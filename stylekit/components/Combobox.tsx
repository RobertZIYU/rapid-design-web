import { useState, useRef, useEffect, useId, type KeyboardEvent } from 'react';
import { CaretDownIcon, CircleHelpIcon, WarningIcon } from '../icons';
import './InputField.css';
import './Combobox.css';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  /** The field label */
  label?: string;
  /** Help text shown below the input */
  helpText?: string;
  /** Error message shown when status is error */
  errorMessage?: string;
  /** Visual status of the field */
  status?: 'default' | 'error' | 'warning';
  /** Shows required asterisk on label */
  required?: boolean;
  /** Shows a help icon next to the label */
  showHelpIcon?: boolean;
  /** Available options */
  options: ComboboxOption[];
  /** Currently selected value */
  value: string;
  /** Callback when selection changes */
  onChange: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom class name */
  className?: string;
}

export const Combobox = ({
  label,
  helpText,
  errorMessage,
  status = 'default',
  required = false,
  showHelpIcon = false,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  className = '',
}: ComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const fieldId = useId();
  const helpTextId = `${fieldId}-help`;
  const errorId = `${fieldId}-error`;

  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = selectedOption?.label || '';

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.closest('.combobox')?.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setHighlightedIndex(-1);
    }
  };

  const handleInputChange = (newQuery: string) => {
    setSearchQuery(newQuery);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchQuery('');
    setHighlightedIndex(-1);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleOptionClick(filteredOptions[highlightedIndex].value);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(-1);
        break;
    }
  };

  const wrapperClasses = [
    'field',
    status !== 'default' ? `field--${status}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const comboboxClasses = [
    'combobox',
    isOpen ? 'combobox--open' : '',
    disabled ? 'combobox--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'input',
    'combobox__input',
    status !== 'default' ? `input--${status}` : '',
    disabled ? 'input--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="field__label-required">*</span>}
          {showHelpIcon && (
            <span className="field__label-help">
              <CircleHelpIcon width={12} height={12} />
            </span>
          )}
        </label>
      )}

      <div className={comboboxClasses} ref={inputRef}>
        <input
          id={fieldId}
          type="text"
          className={inputClasses}
          value={searchQuery || displayValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${fieldId}-listbox`}
          aria-describedby={
            status === 'error' && errorMessage
              ? errorId
              : helpText
              ? helpTextId
              : undefined
          }
          aria-invalid={status === 'error'}
        />
        <span className="combobox__icon">
          <CaretDownIcon width={16} height={16} />
        </span>

        {isOpen && (
          <div
            id={`${fieldId}-listbox`}
            className="combobox__dropdown"
            role="listbox"
            ref={listRef}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div
                  key={option.value}
                  className={[
                    'combobox__option',
                    option.value === value ? 'combobox__option--selected' : '',
                    index === highlightedIndex ? 'combobox__option--highlighted' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => handleOptionClick(option.value)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="combobox__empty">No options found</div>
            )}
          </div>
        )}
      </div>

      {status === 'error' && errorMessage && (
        <span className="field__error-message" id={errorId}>
          <WarningIcon width={12} height={12} />
          {errorMessage}
        </span>
      )}

      {status !== 'error' && helpText && (
        <span className="field__help-text" id={helpTextId}>
          {helpText}
        </span>
      )}
    </div>
  );
};
