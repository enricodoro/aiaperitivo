import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface CustomButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<CustomButtonProps> = ({
  color = 'primary',
  size = 'medium',
  variant = 'contained',
  disabled = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
