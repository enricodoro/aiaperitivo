# React Storybook App

A React application with Storybook for component development and documentation.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

Install dependencies:

```bash
npm install
```

### Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Building Storybook

Build a static version of Storybook:

```bash
npm run build-storybook
```

## Project Structure

```
.
├── .storybook/          # Storybook configuration
│   ├── main.ts         # Main Storybook config
│   └── preview.ts      # Preview configuration
├── src/
│   └── components/     # React components
│       └── Button/      # Example Button component
│           ├── Button.tsx
│           ├── Button.css
│           └── Button.stories.tsx
└── package.json
```

## Adding New Components

1. Create your component in `src/components/`
2. Create a `.stories.tsx` file for your component
3. Storybook will automatically pick it up

## Example Component

The project includes an example `Button` component with stories demonstrating different variants and use cases.
