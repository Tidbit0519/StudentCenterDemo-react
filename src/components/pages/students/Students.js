import React from "react";
import { useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
	Button,
	Stack
} from "@mui/material";
import  EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { useGetRequest } from "../../../hooks/useAxios";
import StudentFormPopUp from "./StudentFormPopUp";

const getAllStudentsURL = "http://localhost:5287/api/Student/GetAllStudents";

export default function Students() {
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState();
	const [selectedStudent, setSelectedStudent] = useState({});
	const { getData, getLoading, getError } = useGetRequest(getAllStudentsURL);
	
	const handleClickOpen = (act, student) => {
		setAction(act);
		if(student) {
			setSelectedStudent(student);
		} else {
			setSelectedStudent({});
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
			<div>
				<h1>Students page</h1>
				{getLoading ? (
					<p>Loading...</p>
				) : getError ? (
					<p>Error: {getError.message}</p>
				) : (
					<Stack spacing={2}>
						<Stack direction="row" spacing={2}>
							<Button variant="contained" startIcon={<AddIcon />} onClick={() => handleClickOpen("add", null)}>
								Add New Student
							</Button>
						</Stack>
						
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
									{getData.map((student) => (
										<TableRow key={student.studentId}>
											<TableCell component="th" scope="row">
												{student.studentId}
											</TableCell>
											<TableCell align="left">{student.firstName}</TableCell>
											<TableCell align="left">{student.lastName}</TableCell>
											<TableCell align="center">
												<IconButton onClick={() => handleClickOpen("edit", student)}>
													<EditIcon />
												</IconButton>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Stack>
				)}

				<StudentFormPopUp open={open} action={action} handleClose={handleClose} studentData={selectedStudent}/>
			</div>
		</div>
	);
}
