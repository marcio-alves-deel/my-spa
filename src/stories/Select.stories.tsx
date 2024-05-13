import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { fn } from "@storybook/test";
import { Select, utils } from "my-design-system";

const countryOptions = utils.countries.map(({ sigla, nome_pais }) => ({
  label: nome_pais,
  value: sigla,
}));

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "The option elements to populate the select with.",
      defaultValue: countryOptions,
    },
    autoWidth: {
      control: "boolean",
      description:
        "If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.",
      defaultValue: true,
    },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
      defaultValue: {},
    },
    defaultOpen: {
      control: "boolean",
      description:
        "If true, the component is initially open. Use when the component open state is not controlled (i.e. the open prop is not defined).",
      defaultValue: false,
    },
    defaultValue: {
      control: "text",
      description:
        "The default value. Use when the component is not controlled.",
      defaultValue: "BR",
    },
    displayEmpty: {
      control: "boolean",
      description:
        "If true, a value is displayed even if no items are selected.",
      defaultValue: false,
    },
    IconComponent: {
      control: "text",
      description: "The icon that displays the arrow.",
      defaultValue: "ArrowDropDownIcon",
    },
    id: {
      control: "text",
      description:
        "The id of the wrapper element or the select element when native.",
      defaultValue: "select",
    },
    input: {
      control: "object",
      description:
        "An Input element; does not have to be a material-ui specific Input.",
      defaultValue: undefined,
    },
    inputProps: {
      control: "object",
      description: "Attributes applied to the input element.",
      defaultValue: {},
    },
    label: {
      control: "text",
      description: "The label content.",
      defaultValue: "Label",
    },
    labelId: {
      control: "text",
      description: "The id of the label.",
      defaultValue: "select-label",
    },
    MenuProps: {
      control: "object",
      description: "Props applied to the Menu element.",
      defaultValue: {},
    },
    multiple: {
      control: "boolean",
      description: "If true, the component will allow multiple selections.",
      defaultValue: false,
    },
    native: {
      control: "boolean",
      description: "If true, the component will be using a native select.",
      defaultValue: false,
    },
    onChange: {
      description: "Callback when the value changes.",
      defaultValue: undefined,
    },
    onClose: {
      description: "Callback when the menu is closed.",
      defaultValue: undefined,
    },
    onOpen: {
      description: "Callback when the menu is opened.",
      defaultValue: undefined,
    },
    open: {
      control: "boolean",
      description: "Control the open state of the component.",
      defaultValue: false,
    },
    renderValue: {
      description:
        "Render the selected value. You can only use it when the native prop is false (default).",
      defaultValue: undefined,
    },
    SelectDisplayProps: {
      control: "object",
      description: "Props applied to the clickable div element.",
      defaultValue: {},
    },
    value: {
      control: "text",
      description: "The value of the component.",
      defaultValue: "BR",
    },
    variant: {
      control: {
        type: "radio",
        options: ["standard", "outlined", "filled"],
        labels: {
          standard: "Standard",
          outlined: "Outlined",
          filled: "Filled",
        },
      },
      description: "The variant to use.",
      defaultValue: "standard",
    },
  },
  args: {
    autoWidth: true,
    classes: {},
    defaultOpen: false,
    defaultValue: "BR",
    displayEmpty: false,
    IconComponent: undefined,
    id: "demo-controlled-open-select",
    input: undefined,
    inputProps: {},
    label: "Países",
    labelId: "demo-controlled-open-select-label",
    MenuProps: {},
    multiple: false,
    native: false,
    onChange: fn(),
    renderValue: undefined,
    SelectDisplayProps: {},
    value: "BR",
    variant: "outlined",
    options: countryOptions,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const SingleSelect = (props: any) => (
  <Stack spacing={1}>
    <Typography variant="body1">Single select</Typography>
    <Select {...props} />
  </Stack>
);

const MultiSelect = (props: any) => (
  <Stack spacing={1}>
    <Typography variant="body1">Multi select</Typography>
    <Select {...props} multiple value={["BR", "BN"]} />
  </Stack>
);

const DisabledSelect = (props: any) => (
  <Stack spacing={1}>
    <Typography variant="body1">Disabled</Typography>
    <Select {...props} disabled />
  </Stack>
);

export const Example: Story = {
  render: (props) => (
    <Stack spacing={2} direction="row">
      <SingleSelect {...props} />
      <MultiSelect {...props} />
      <DisabledSelect {...props} />
    </Stack>
  ),
};

export const Single: Story = {
  render: (props) => <SingleSelect {...props} />,
};

export const Multi: Story = {
  render: (props) => <MultiSelect {...props} />,
};

export const Disabled: Story = {
  render: (props) => <DisabledSelect {...props} />,
};
