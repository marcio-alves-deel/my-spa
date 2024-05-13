import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Stack } from "@mui/material";
import React from "react";
import { Button } from "my-design-system";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      type: "function",
      action: "clicked",
      description: "Click event handler",
    },
    children: {
      control: "text",
      description: "The content of the component",
      defaultValue: "Button",
    },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
      defaultValue: {},
    },
    color: {
      control: {
        type: "radio",
        options: [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          success: "Success",
          error: "Error",
          info: "Info",
          warning: "Warning",
        },
      },
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added.",
      defaultValue: "primary",
    },
    component: {
      control: "text",
      description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
      defaultValue: undefined,
    },
    disabled: {
      control: "boolean",
      description: "If true, the component is disabled.",
      defaultValue: false,
    },
    disableElevation: {
      control: "boolean",
      description: "If true, no elevation is used.",
      defaultValue: false,
    },
    disableFocusRipple: {
      control: "boolean",
      description: "If true, the keyboard focus ripple is disabled",
      defaultValue: false,
    },
    disableRipple: {
      control: "boolean",
      description: "If true, the ripple effect is disabled.",
      defaultValue: false,
    },
    endIcon: {
      control: "text",
      description: "Element placed after the children.",
      defaultValue: undefined,
    },
    fullWidth: {
      control: "boolean",
      description:
        "If true, the button will take up the full width of its container.",
      defaultValue: false,
    },
    href: {
      control: "text",
      description: "The URL to link to when the button is clicked.",
      defaultValue: undefined,
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
      description: "The size of the component.",
      defaultValue: "medium",
    },
    startIcon: {
      control: "text",
      description: "Element placed before the children.",
      defaultValue: undefined,
    },
    sx: {
      control: "object",
      description:
        "The system prop that allows defining system overrides as well as additional CSS styles.",
      defaultValue: {},
    },
    variant: {
      control: {
        type: "radio",
        options: ["text", "outlined", "contained"],
      },
      description: "The variant to use.",
      defaultValue: "contained",
    },
  },
  args: {
    onClick: fn(),
    children: "",
    classes: {},
    color: "primary",
    component: undefined,
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    endIcon: undefined,
    fullWidth: false,
    href: undefined,
    size: "medium",
    startIcon: undefined,
    sx: {},
    variant: "contained",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (props) => (
    <Stack spacing={2}>
      <Button {...props} color="primary">
        Primary
      </Button>
      <Button {...props} color="secondary">
        Secondary
      </Button>
      <Button {...props} variant="outlined">
        Outlined
      </Button>
      <Button {...props} variant="text">
        Text
      </Button>
      <Button {...props} color="primary" size="large">
        Large
      </Button>
      <Button {...props} color="primary" size="small">
        Small
      </Button>
      <Button {...props} color="primary" disabled>
        Disabled
      </Button>
    </Stack>
  ),
};

export const Primary: Story = {
  render: (props) => <Button {...props}>Primary</Button>,
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
  render: (props) => <Button {...props}>Secondary</Button>,
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  render: (props) => <Button {...props}>Outlined</Button>,
};

export const Text: Story = {
  args: {
    variant: "text",
  },
  render: (props) => <Button {...props}>Text</Button>,
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: (props) => <Button {...props}>Large</Button>,
};

export const Small: Story = {
  args: {
    size: "small",
  },
  render: (props) => <Button {...props}>Small</Button>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => <Button {...props}>Disabled</Button>,
};

export const Loading: Story = {
  args: {
    size: "small",
  },
};
