import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import React from "react";
import { fn } from "@storybook/test";
import { Alert, Button } from "my-design-system";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label element to display in the alert.",
    },
    action: {
      control: "object",
      description: "The action element to display in the alert.",
    },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
      defaultValue: {},
    },
    closeText: {
      control: "text",
      description: "The text to display as the close button.",
      defaultValue: "Close",
    },
    color: {
      control: {
        type: "radio",
        options: [
          "default",
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
        labels: {
          default: "Default",
          primary: "Primary",
          secondary: "Secondary",
          success: "Success",
          error: "Error",
          info: "Info",
          warning: "Warning",
        },
      },
      description:
        "The color of the component. It supports both default and custom theme colors.",
      defaultValue: "default",
    },
    icon: {
      control: "object",
      description: "The icon element to display in the alert.",
    },
    iconMapping: {
      control: "object",
      description: "The icon mapping to use.",
    },
    onClose: {
      type: "function",
      action: "closed",
      description: "Callback fired when the component requests to be closed.",
    },
    severity: {
      control: {
        type: "radio",
        options: ["error", "info", "success", "warning"],
        labels: {
          error: "Error",
          info: "Info",
          success: "Success",
          warning: "Warning",
        },
      },
      description: "The severity of the alert.",
      defaultValue: "info",
    },
    variant: {
      control: {
        type: "radio",
        options: ["filled", "outlined", "standard"],
      },
      description: "The variant to use.",
      defaultValue: "standard",
    },
    sx: {
      control: "object",
      description:
        "The system prop that allows defining system overrides as well as additional CSS styles.",
      defaultValue: {},
    },
  },
  args: {
    action: undefined,
    severity: "info",
    variant: "standard",
    label: "This is an alert",
    onClose: undefined,
    icon: undefined,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: (props) => (
    <Stack direction="column" spacing={2}>
      <Stack spacing={2} direction="row">
        <Alert {...props} label="This is an Info alert" severity="info" />
        <Alert {...props} label="This is a Warning alert" severity="warning" />
        <Alert {...props} label="This is a Success alert" severity="success" />
        <Alert {...props} label="This is an Error alert" severity="error" />
      </Stack>
      <Stack spacing={2} direction="row">
        <Alert
          {...props}
          label="This is an alert with close action"
          severity="info"
          onClose={fn()}
        />
        <Alert
          {...props}
          label="This is an alert with custom action"
          severity="info"
          action={<Button variant="text">Action</Button>}
        />
      </Stack>
    </Stack>
  ),
};

export const Default: Story = {
  args: {
    severity: "info",
    label: "Default alert",
  },
  render: (props) => <Alert {...props} />,
};

export const Action: Story = {
  args: {
    severity: "info",
    action: <Button variant="text">Action</Button>,
    label: "Action alert",
  },
  render: (props) => <Alert {...props} />,
};

export const CloseButton: Story = {
  args: {
    severity: "info",
    label: "Alert with close button",
    onClose: fn(),
  },
  render: (props) => <Alert {...props} />,
};
