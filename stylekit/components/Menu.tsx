import { type ReactNode, type HTMLAttributes } from 'react';
import './Menu.css';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Menu items */
  children: ReactNode;
  /** Width of the menu */
  width?: number | string;
}

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Menu item content */
  children: ReactNode;
  /** Icon to show before the label */
  icon?: ReactNode;
  /** Shows selected state */
  selected?: boolean;
  /** Shows bullet indicator when selected (instead of background) */
  showBullet?: boolean;
  /** Disables the menu item */
  disabled?: boolean;
  /** Destructive/delete variant */
  destructive?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export interface MenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  /** Label text */
  children: string;
}

export interface MenuCheckboxItemProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** Checkbox label */
  children: string;
  /** Checked state */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MenuDividerProps extends HTMLAttributes<HTMLDivElement> {}

export interface MenuButtonRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Button row content (typically buttons) */
  children: ReactNode;
}

export interface MenuSearchProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Search placeholder */
  placeholder?: string;
  /** Search value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
}

export const Menu = ({ children, width = 242, className = '', ...props }: MenuProps) => {
  const menuClasses = ['menu', className].filter(Boolean).join(' ');
  const style = typeof width === 'number' ? { width: `${width}px` } : { width };

  return (
    <div className={menuClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export const MenuItem = ({
  children,
  icon,
  selected = false,
  showBullet = false,
  disabled = false,
  destructive = false,
  onClick,
  className = '',
  ...props
}: MenuItemProps) => {
  const itemClasses = [
    'menu__item',
    selected ? 'menu__item--selected' : '',
    showBullet ? 'menu__item--bullet' : '',
    disabled ? 'menu__item--disabled' : '',
    destructive ? 'menu__item--destructive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="menuitem"
      aria-disabled={disabled}
      {...props}
    >
      {showBullet && <span className="menu__item-bullet" />}
      {icon && <span className="menu__item-icon">{icon}</span>}
      <span className="menu__item-label">{children}</span>
    </div>
  );
};

export const MenuLabel = ({ children, className = '', ...props }: MenuLabelProps) => {
  const labelClasses = ['menu__label', className].filter(Boolean).join(' ');

  return (
    <div className={labelClasses} role="presentation" {...props}>
      {children}
    </div>
  );
};

export const MenuCheckboxItem = ({
  children,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}: MenuCheckboxItemProps) => {
  const itemClasses = [
    'menu__checkbox-item',
    disabled ? 'menu__checkbox-item--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={itemClasses} {...props}>
      <input
        type="checkbox"
        className="menu__checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="menu__checkbox-label">{children}</span>
    </label>
  );
};

export const MenuDivider = ({ className = '', ...props }: MenuDividerProps) => {
  const dividerClasses = ['menu__divider', className].filter(Boolean).join(' ');

  return <div className={dividerClasses} role="separator" {...props} />;
};

export const MenuButtonRow = ({ children, className = '', ...props }: MenuButtonRowProps) => {
  const rowClasses = ['menu__button-row', className].filter(Boolean).join(' ');

  return (
    <div className={rowClasses} {...props}>
      {children}
    </div>
  );
};

export const MenuSearch = ({
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  ...props
}: MenuSearchProps) => {
  const searchClasses = ['menu__search', className].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="menu__search-wrapper">
      <input
        type="text"
        className={searchClasses}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
