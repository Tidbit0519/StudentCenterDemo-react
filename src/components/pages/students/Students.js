import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Delete } from "@mui/icons-material";

import StudentFormPopUp from "./StudentFormPopUp";

const getAllStudentsURL = "http://localhost:5287/api/Student/GetAllStudents";
const postStudentUrl = "http://localhost:5287/api/Student/CreateNewStudent";
const deleteUrl = "http://localhost:5287/api/Student/DeleteStudentById";

export default function Students() {
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState();

	const [students, setStudents] = useState([]);
	const [selectedStudent, setSelectedStudent] = useState({});
	
	useEffect(() => {
		fetchStudents();
	}, []);

	const fetchStudents = async () => {
		try {
			const response = await axios.get(getAllStudentsURL);
			setStudents(response.data);
		} catch (error) {
			console.error("Error fetching students:", error);
		}
	};

	const addStudent = async (newStudent) => {
		try {
			await axios.post(postStudentUrl, newStudent)
				.then(() => {
					fetchStudents();
				});
		} catch (error) {
			console.error("Error adding student:", error);
		}
	};

	// Function for deleting a student
	const handleDelete = (id) => {
		axios.delete(`${deleteUrl}/${id}`)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				throw error;
			});
	};

	// Functions for opening and closing the pop-up form
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
				<Stack spacing={2}>
					<Stack direction="row" spacing={2}>
						<Button variant="contained" startIcon={<AddIcon />} onClick={() => handleClickOpen("add", null)}>
							Add New Student
						</Button>
					</Stack>
					
					<TableContainer component={Paper} sx={{ minWidth: "40vw" }}>
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
								{students && students.map((student) => (
									<TableRow key={student.studentId}>
										<TableCell component="th" scope="row">
											{student.studentId}
										</TableCell>
										<TableCell align="left">{student.firstName}</TableCell>
										<TableCell align="left">{student.lastName}</TableCell>
										<TableCell align="right">
											<Stack direction="row" spacing={2} justifyContent="center">
												<IconButton onClick={() => handleClickOpen("edit", student)}>
													<EditIcon />
												</IconButton>
												<IconButton onClick={() => handleDelete(student.studentId)}>
													<Delete />
												</IconButton>
											</Stack>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Stack>

				<StudentFormPopUp open={open} action={action} handleClose={handleClose} student={selectedStudent} addStudent={addStudent} />
			</div>
		</div>
	);
}
