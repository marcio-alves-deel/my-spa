import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { List, utils } from "my-design-system";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "The elements to populate the list with.",
    },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
      defaultValue: {},
    },
    component: {
      control: "text",
      description:
        "The component used for the root node. Either a string to use a HTML element or a component.",
      defaultValue: "ul",
    },
    disablePadding: {
      control: "boolean",
      description: "If true, vertical padding is removed from the list.",
      defaultValue: false,
    },
    sx: {
      control: "object",
      description:
        "The system prop that allows defining system overrides as well as additional CSS styles.",
      defaultValue: {},
    },
  },
  args: {
    classes: {},
    component: "ul",
    disablePadding: false,
    sx: {},
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleList = (props: any) => (
  <List
    items={utils.people.map(({ name, email }) => (
      <Stack>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">{email}</Typography>
      </Stack>
    ))}
    {...props}
  />
);

export const Example: Story = {
  render: (props) => (
    <Stack spacing={2} direction="row">
      <SimpleList {...props} />
    </Stack>
  ),
};
