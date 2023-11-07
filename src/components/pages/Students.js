import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import useAxios from "../../hooks/useAxios";
import StudentFormPopUp from "./students/StudentFormPopUp";

const getAllStudentsURL = "http://localhost:5287/api/Student/GetAllStudents";

export default function Students() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(!open);
		console.log(open);
	};

	const handleClose = () => {
		setOpen(!open);
		console.log(open);
	};

	const { data, loading, error } = useAxios(getAllStudentsURL);

	return (
		<div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
			<div>
				<h1>Students page</h1>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>Error: {error.message}</p>
				) : (
					<TableContainer component={Paper} sx={{ minWidth: "60vw" }}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									<TableCell />
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((student) => (
									<TableRow key={student.studentId}>
										<TableCell component="th" scope="row">
											{student.studentId}
										</TableCell>
										<TableCell align="left">{student.firstName}</TableCell>
										<TableCell align="left">{student.lastName}</TableCell>
										<TableCell align="center">
											<IconButton onClick={handleClickOpen}>
												<EditIcon/>
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				)}
				<StudentFormPopUp open={open} onClose={handleClose} />
			</div>
		</div>
	);
}
