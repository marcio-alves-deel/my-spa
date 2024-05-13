import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import React from "react";
import { Chip } from "my-design-system";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    avatar: {
      control: "object",
      description: "The avatar element to display in the chip.",
    },
    children: {
      control: "text",
      description: "The content of the component.",
    },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
      defaultValue: {},
    },
    clickable: {
      control: "boolean",
      description: "If true, the chip is clickable.",
      defaultValue: false,
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
    deleteIcon: {
      control: "object",
      description: "The icon element to display as the delete icon.",
    },
    icon: {
      control: "object",
      description: "The icon element to display in the chip.",
    },
    label: {
      control: "text",
      description: "The label element to display in the chip.",
    },
    onDelete: {
      description: "Callback fired when the delete icon is clicked.",
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        labels: {
          small: "Small",
          medium: "Medium",
        },
      },
      description: "The size of the component.",
      defaultValue: "medium",
    },
  },
  args: {
    avatar: undefined,
    classes: {},
    clickable: false,
    color: "default",
    deleteIcon: undefined,
    icon: undefined,
    label: undefined,
    onDelete: undefined,
    size: "medium",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleChip = (props: any) => <Chip {...props} label="Chip" />;
const ColorChip = (props: any) => <Chip {...props} label="Color" />;
const ClickableChip = (props: any) => (
  <Chip {...props} label="Clickable" clickable />
);
const DeletableChip = (props: any) => (
  <Chip {...props} label="Deletable" onDelete={() => alert("Delete")} />
);

export const Example: Story = {
  render: (props) => (
    <Stack spacing={2} direction="row">
      <SimpleChip {...props} />
      <ColorChip {...props} color="success" />
      <ClickableChip {...props} />
      <DeletableChip {...props} />
    </Stack>
  ),
};

export const Default: Story = {
  render: (props) => <SimpleChip {...props} />,
};

export const Color: Story = {
  args: {
    color: "success",
  },
  render: (props) => <ColorChip {...props} />,
};

export const Clickable: Story = {
  render: (props) => <ClickableChip {...props} />,
};

export const Deletable: Story = {
  render: (props) => <DeletableChip {...props} />,
};
