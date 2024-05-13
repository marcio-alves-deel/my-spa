import type { Meta, StoryObj } from "@storybook/react";

import { Stack, Typography } from "@mui/material";
import React from "react";

import { fn } from "@storybook/test";
import { RadioGroup, utils } from "my-design-system";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "The option elements to populate the select with.",
      defaultValue: utils.gender,
    },
    disabled: {
      control: "boolean",
      description: "If true, the radio group is disabled.",
      defaultValue: false,
    },
    defaultValue: {
      control: "text",
      description:
        "The default value. Use when the component is not controlled.",
      defaultValue: "M",
    },
    name: {
      control: "text",
      description:
        "The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.",
    },
    onChange: {
      type: "function",
      action: "changed",
      description: "Callback fired when a radio button is selected.",
    },
    value: {
      control: "text",
      description:
        "Value of the selected radio button. The DOM API casts this to a string.",
    },
  },
  args: {
    options: utils.gender,
    disabled: false,
    defaultValue: "M",
    name: "country",
    onChange: fn((e) => e),
    value: "M",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultRadioGroup = (props: any) => (
  <Stack spacing={1}>
    <Typography variant="body1">Default</Typography>
    <RadioGroup {...props} />
  </Stack>
);

const DisabledRadioGroup = (props: any) => (
  <Stack spacing={1}>
    <Typography variant="body1">Disabled</Typography>
    <RadioGroup {...props} disabled />
  </Stack>
);

export const Example: Story = {
  render: (props) => (
    <Stack spacing={2} direction="row">
      <DefaultRadioGroup {...props} />
      <DisabledRadioGroup {...props} />
    </Stack>
  ),
};

export const Single: Story = {
  render: (props) => <DefaultRadioGroup {...props} />,
};

export const Disabled: Story = {
  render: (props) => <DisabledRadioGroup {...props} />,
};
