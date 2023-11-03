import React from "react";
import { Container, Grid } from "@mui/material";
import ActionCard from "./ActionCard";

const cardNames = ["Students", "Professors", "Courses", "Grades"];

export default function ActionCards () {
	return (
		<Container maxWidth='lg' sx={{ marginY: 20 }}>
			<Grid container spacing={4}>
				{cardNames.map((item) => (
					<Grid item xs={6} key={item} column>
						<ActionCard cardName={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
