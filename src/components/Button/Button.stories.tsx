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
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'white'],
      description: 'Button color variant',
    },
    variant: {
      control: 'select',
      options: ['contained', 'text'],
      description: 'Button style variant',
    },
    contrastColor: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Contrast color theme',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    active: {
      control: 'boolean',
      description: 'Active state (for text variant)',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
};

export const SecondaryContained: Story = {
  args: {
    label: 'LABEL',
    color: 'secondary',
    variant: 'contained',
    size: 'medium',
  },
};

export const TertiaryContained: Story = {
  args: {
    label: 'LABEL',
    color: 'tertiary',
    variant: 'contained',
    size: 'medium',
  },
};

export const PrimaryText: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'text',
    size: 'medium',
  },
};

export const SecondaryText: Story = {
  args: {
    label: 'LABEL',
    color: 'secondary',
    variant: 'text',
    size: 'medium',
  },
};

export const WhiteText: Story = {
  args: {
    label: 'LABEL',
    color: 'white',
    variant: 'text',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#021B79' },
      ],
    },
  },
};

export const Large: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    loading: true,
  },
};

export const Active: Story = {
  args: {
    label: 'LABEL',
    color: 'primary',
    variant: 'text',
    size: 'medium',
    active: true,
  },
};

export const AllSizesContained: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="LABEL" size="large" color="primary" variant="contained" />
      <Button label="LABEL" size="medium" color="primary" variant="contained" />
      <Button label="LABEL" size="small" color="primary" variant="contained" />
    </div>
  ),
};

export const AllColorsContained: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="LABEL" color="primary" variant="contained" />
      <Button label="LABEL" color="secondary" variant="contained" />
      <Button label="LABEL" color="tertiary" variant="contained" />
    </div>
  ),
};

export const AllColorsText: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="LABEL" color="primary" variant="text" />
      <Button label="LABEL" color="secondary" variant="text" />
      <Button label="LABEL" color="white" variant="text" />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="ENABLED" color="primary" variant="contained" />
      <Button label="DISABLED" color="primary" variant="contained" disabled />
      <Button label="LOADING" color="primary" variant="contained" loading />
    </div>
  ),
};
