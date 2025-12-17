import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The color of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLarge: Story = {
  args: {
    color: 'primary',
    size: 'large',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const PrimaryMedium: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const PrimarySmall: Story = {
  args: {
    color: 'primary',
    size: 'small',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const SecondaryLarge: Story = {
  args: {
    color: 'secondary',
    size: 'large',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const SecondaryMedium: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const SecondarySmall: Story = {
  args: {
    color: 'secondary',
    size: 'small',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const TertiaryLarge: Story = {
  args: {
    color: 'tertiary',
    size: 'large',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const TertiaryMedium: Story = {
  args: {
    color: 'tertiary',
    size: 'medium',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const TertiarySmall: Story = {
  args: {
    color: 'tertiary',
    size: 'small',
    variant: 'contained',
    children: 'LABEL',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'contained',
    disabled: true,
    children: 'LABEL',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button color="primary" size="small" variant="contained">LABEL</Button>
      <Button color="primary" size="medium" variant="contained">LABEL</Button>
      <Button color="primary" size="large" variant="contained">LABEL</Button>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button color="primary" size="medium" variant="contained">LABEL</Button>
      <Button color="secondary" size="medium" variant="contained">LABEL</Button>
      <Button color="tertiary" size="medium" variant="contained">LABEL</Button>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button color="primary" size="medium" variant="contained">ENABLED</Button>
      <Button color="primary" size="medium" variant="contained" disabled>DISABLED</Button>
    </div>
  ),
};
