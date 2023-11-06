import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import useAxios from "../../hooks/useAxios";

const getAllStudentsURL = "http://localhost:5287/api/Student/GetAllStudents";

export default function Students() {
	const { data, loading, error } = useAxios(getAllStudentsURL);
	console.log(data);

	return (
		<>
			<h1>Students page</h1>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error.message}</p>
			) : (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>First Name</TableCell>
								<TableCell>Last Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((student) => (
								<TableRow
									key={student.studentId}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{student.studentId}
									</TableCell>
									<TableCell align="left">{student.firstName}</TableCell>
									<TableCell align="left">{student.lastName}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</>
	);
}
