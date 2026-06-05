import { type ReactNode } from 'react'

interface ComponentPreviewProps {
  title?: string
  children: ReactNode
  align?: 'center' | 'left'
  direction?: 'row' | 'column'
}

export function ComponentPreview({
  title,
  children,
  align = 'center',
  direction = 'row',
}: ComponentPreviewProps) {
  return (
    <div className="component-preview">
      {title && (
        <div className="component-preview__header">
          <span className="component-preview__title">{title}</span>
        </div>
      )}
      <div
        className={`component-preview__stage${align === 'left' ? ' component-preview__stage--left' : ''}${direction === 'column' ? ' component-preview__stage--col' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
