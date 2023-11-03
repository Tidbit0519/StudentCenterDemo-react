import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./dashboard/NavBar";
import ActionCardLayout from "./dashboard/ActionCardLayout";

const defaultTheme = createTheme();

export default function Dashboard () {
	return (
		<ThemeProvider theme={defaultTheme}>
			<NavBar />
			<ActionCardLayout />
		</ThemeProvider>
	);
}
