import baseStyled, { ThemedBaseStyledInterface } from "styled-components";

const colors = {
	primary: "#2B8285",
	secondary: "green",
	tertiary: "red",
	quaternary: "black",
	white: "#ffffff",
	green: "green",
	blue: "blue",
	background: "#313036",      
};

export const theme = {
	colors,
};

export type Theme = typeof theme;

export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;
