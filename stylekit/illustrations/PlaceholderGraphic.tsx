import type { HTMLAttributes } from 'react';
import svgContent from './placeholder-graphic.svg?raw';
import './PlaceholderGraphic.css';

export interface PlaceholderGraphicProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Decorative empty-state illustration. Aspect ratio is preserved (~1.92:1).
 * Set the container width via `style` or wrap in a sized parent; the SVG
 * scales to fit.
 */
export const PlaceholderGraphic = ({
  className = '',
  ...props
}: PlaceholderGraphicProps) => {
  const classes = ['placeholder-graphic', className].filter(Boolean).join(' ');
  return (
    <div
      className={classes}
      role="img"
      aria-hidden="true"
      {...props}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
