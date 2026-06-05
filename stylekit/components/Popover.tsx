import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  type ReactNode,
  type ReactElement,
  type CSSProperties,
} from 'react';
import { createPortal } from 'react-dom';
import './Popover.css';

export type PopoverSide = 'top' | 'bottom' | 'left' | 'right';
export type PopoverAlign = 'start' | 'center' | 'end';

export interface PopoverProps {
  /** The trigger element (usually a button) */
  children: ReactElement;
  /** Popover content */
  content: ReactNode;
  /** Which side of the trigger to show the popover */
  side?: PopoverSide;
  /** Alignment along the side */
  align?: PopoverAlign;
  /** Additional CSS class for the popover */
  className?: string;
}

const GAP = 8;

function computePosition(
  triggerRect: DOMRect,
  popupRect: DOMRect,
  side: PopoverSide,
  align: PopoverAlign,
): CSSProperties {
  const { top, left, width, height } = triggerRect;
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  let position: CSSProperties = {};

  // Calculate position based on side
  switch (side) {
    case 'top':
      position.top = top + scrollY - popupRect.height - GAP;
      switch (align) {
        case 'start':
          position.left = left + scrollX;
          break;
        case 'end':
          position.left = left + scrollX + width - popupRect.width;
          break;
        case 'center':
        default:
          position.left = left + scrollX + width / 2 - popupRect.width / 2;
      }
      break;

    case 'bottom':
      position.top = top + scrollY + height + GAP;
      switch (align) {
        case 'start':
          position.left = left + scrollX;
          break;
        case 'end':
          position.left = left + scrollX + width - popupRect.width;
          break;
        case 'center':
        default:
          position.left = left + scrollX + width / 2 - popupRect.width / 2;
      }
      break;

    case 'left':
      position.left = left + scrollX - popupRect.width - GAP;
      switch (align) {
        case 'start':
          position.top = top + scrollY;
          break;
        case 'end':
          position.top = top + scrollY + height - popupRect.height;
          break;
        case 'center':
        default:
          position.top = top + scrollY + height / 2 - popupRect.height / 2;
      }
      break;

    case 'right':
      position.left = left + scrollX + width + GAP;
      switch (align) {
        case 'start':
          position.top = top + scrollY;
          break;
        case 'end':
          position.top = top + scrollY + height - popupRect.height;
          break;
        case 'center':
        default:
          position.top = top + scrollY + height / 2 - popupRect.height / 2;
      }
      break;
  }

  return position;
}

export const Popover = ({
  children,
  content,
  side = 'bottom',
  align = 'center',
  className = '',
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<CSSProperties>({});
  const triggerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current || !popupRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popupRect = popupRef.current.getBoundingClientRect();
    const pos = computePosition(triggerRect, popupRect, side, align);
    setPosition(pos);
  }, [isOpen, side, align]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        popupRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
    // Call original onClick if it exists
    const originalOnClick = (children.props as any)?.onClick;
    if (originalOnClick) {
      originalOnClick(e);
    }
  };

  const popoverClasses = ['popover', className].filter(Boolean).join(' ');

  return (
    <>
      <span
        ref={triggerRef as any}
        onClick={handleTriggerClick}
        style={{ display: 'inline-block' }}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {children}
      </span>
      {isOpen &&
        createPortal(
          <div
            ref={popupRef}
            className={popoverClasses}
            style={position}
            role="dialog"
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  );
};
