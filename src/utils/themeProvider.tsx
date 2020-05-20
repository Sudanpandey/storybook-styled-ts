import React from "react";

import { ThemeProvider } from "styled-components";

import { Theme } from "../theme";

export const withThemeProvider = (theme: Theme) => (
  story: () => JSX.Element
): JSX.Element => <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
