import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * The text label of the button
   */
  label: string;
  /**
   * Button size variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button color variant
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'white';
  /**
   * Button style variant
   */
  variant?: 'contained' | 'text';
  /**
   * Contrast color theme
   */
  contrastColor?: 'default' | 'primary';
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Active state
   */
  active?: boolean;
  /**
   * Show icon at the start of the button
   */
  startIcon?: React.ReactNode;
  /**
   * Show icon at the end of the button
   */
  endIcon?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const LoadingSpinner = () => (
  <svg className="button-spinner" width="16" height="16" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1C9.05057 1 10.0909 1.20693 11.0615 1.60896C12.0321 2.011 12.914 2.60028 13.6569 3.34315C14.3997 4.08602 14.989 4.96793 15.391 5.93853C15.7931 6.90914 16 7.94943 16 9C16 10.0506 15.7931 11.0909 15.391 12.0615C14.989 13.0321 14.3997 13.914 13.6568 14.6569C12.914 15.3997 12.0321 15.989 11.0615 16.391C10.0909 16.7931 9.05057 17 7.99999 17C6.94942 17 5.90913 16.7931 4.93853 16.391C3.96792 15.989 3.08601 15.3997 2.34314 14.6569" stroke="currentColor" strokeOpacity="0.38" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
  </svg>
);

/**
 * Button component with multiple variants matching the design system
 */
export const Button = ({
  label,
  size = 'medium',
  color = 'primary',
  variant = 'contained',
  contrastColor = 'default',
  disabled = false,
  loading = false,
  active = false,
  startIcon,
  endIcon,
  onClick,
  ...props
}: ButtonProps) => {
  const classNames = [
    'button',
    `button--${size}`,
    `button--${color}`,
    `button--${variant}`,
    `button--contrast-${contrastColor}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
    active && 'button--active',
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <div className="button-base">
        {loading && <LoadingSpinner />}
        {!loading && startIcon && <span className="button-icon-start">{startIcon}</span>}
        {!loading && <span className="button-label">{label}</span>}
        {!loading && endIcon && <span className="button-icon-end">{endIcon}</span>}
      </div>
    </button>
  );
};
