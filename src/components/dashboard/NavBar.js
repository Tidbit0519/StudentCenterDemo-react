import React from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	Box,
	Button,
	Menu,
	MenuItem
} from "@mui/material";

const pages = ["Students", "Professors", "Courses", "Grades"];

export default function NavBar () {
	return (
		<AppBar position="static">
			<Container maxWidth="false">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						sx={{
							mr: 2,
							display: "flex",
							fontWeight: 700,
							letterSpacing: ".1rem"
						}}
					>
            Student Center Demo |
					</Typography>

					<Menu
						id="menu-appbar"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left"
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left"
						}}
						sx={{
							display: { xs: "block", md: "none" }
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page}>
								<Typography textAlign="center">{page}</Typography>
							</MenuItem>
						))}
					</Menu>
					<Box sx={{ flexGrow: 1, display: "flex" }}>
						{pages.map((page) => (
							<Button
								key={page}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
