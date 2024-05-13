import type { Preview } from "@storybook/react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
} from "@storybook/blocks";
import React from "react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultThemeProvider, defaultTheme } from "my-design-system";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: defaultTheme,
      },
      defaultTheme: "default",
      Provider: DefaultThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <DefaultThemeProvider>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </DefaultThemeProvider>
      ),
    },
  },
};

export default preview;
