/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

const postUrl = "http://localhost:5287/api/Student/CreateNewStudent";
const putUrl = "http://localhost:5287/api/Student/UpdateStudentById";

export default function StudentFormPopUp({ open, action, handleClose, student }) {
	const [data, setData] = useState({
		id: "",
		firstName: "",
		lastName: "",
	});

	useEffect(() => {
		if (student) {
			setData({
				id: student.studentId,
				firstName: student.firstName,
				lastName: student.lastName,
			});
		}
	}, [student]);

	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.id]: value,
		});
	};

	const handleSubmit = (e) => {
		console.log(data);
		e.preventDefault();
		const student = [
			{
				firstName: data.firstName,
				lastName: data.lastName,
			}
		];
		axios.post(postUrl, student)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				throw error;
			});
		handleClose();
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const student = {
			firstName: data.firstName,
			lastName: data.lastName,
		};
		axios.put(`${putUrl}/${data.id}`, student)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
		handleClose();
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{action == "add" ? "Add New Student" : "Edit Student Information"}</DialogTitle>
			<DialogContent>
				<TextField
					id="firstName"
					label="First Name"
					type="text"
					fullWidth
					variant="standard"
					defaultValue={student ? student.firstName : ""} 
					onChange={handleChange}
				/>
				<TextField
					id="lastName"
					label="Last Name"
					type="text"
					fullWidth
					variant="standard"
					margin="normal"
					defaultValue={student ? student.lastName : ""} 
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={action == "add" ? handleSubmit : handleUpdate}>
					Submit
				</Button>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
}
