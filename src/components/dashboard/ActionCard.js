/* eslint-disable react/prop-types */
import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const linkStyles = {
	textDecoration: "none"
};

export default function ActionCard ({ cardName }) {
	const linkTo = `/${cardName.toLowerCase()}`;

	return (
		<Box sx={{ textAlign: "center" }}>
			<Link to={linkTo} style={linkStyles}>
				<Paper sx={{ paddingY: 10, backgroundColor: "primary.main" }} >
					<Typography variant="h6" sx={{ color: "white" }}>{cardName}</Typography>
				</Paper>
			</Link>
		</Box>
	);
}
