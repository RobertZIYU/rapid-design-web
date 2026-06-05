import { useState, type HTMLAttributes } from 'react';
import './Avatar.css';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Image source URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback text (usually initials) */
  fallback?: string;
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Shape variant */
  shape?: 'circle' | 'square';
  /** Additional CSS class */
  className?: string;
}

export function Avatar({
  src,
  alt = '',
  fallback = '?',
  size = 'md',
  shape = 'circle',
  className = '',
  ...rest
}: AvatarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const showImage = src && imageLoaded && !imageError;
  const showFallback = !src || imageError || !imageLoaded;

  return (
    <span
      className={`avatar avatar--${size} avatar--${shape} ${className}`.trim()}
      role="img"
      aria-label={alt || fallback}
      {...rest}
    >
      {src && (
        <img
          className={`avatar__image ${showImage ? 'avatar__image--loaded' : ''}`}
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      {showFallback && (
        <span className="avatar__fallback" aria-hidden="true">
          {fallback}
        </span>
      )}
    </span>
  );
}
