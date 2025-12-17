import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Text: Story = {
  args: {
    label: 'Button',
    variant: 'text',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
    variant: 'contained',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
    variant: 'contained',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    variant: 'contained',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'success',
    variant: 'contained',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    color: 'error',
    variant: 'contained',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
    variant: 'contained',
  },
  parameters: {
    layout: 'padded',
  },
};
