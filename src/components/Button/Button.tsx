import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size' | 'color'> {
  /**
   * The variant of the button
   */
  variant?: 'text' | 'outlined' | 'contained';
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The color of the button
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   * Button contents
   */
  label: string;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
}

/**
 * Primary UI component for user interaction using Material-UI
 */
export const Button = ({
  label,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      {label}
    </MuiButton>
  );
};
