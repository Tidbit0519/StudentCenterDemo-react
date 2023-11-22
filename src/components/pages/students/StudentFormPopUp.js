/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

const url = "http://localhost:5287/api/Student/CreateNewStudent";

export default function StudentFormPopUp({ open, action, handleClose, studentData }) {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.id]: value,
		});
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		const studentData = [
			{
				firstName: data.firstName,
				lastName: data.lastName,
			}
		];
		console.log(studentData);
		axios.post(url, studentData)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(studentData);
				console.log(error.response);
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
					defaultValue={studentData ? studentData.firstName : ""} 
					onChange={handleChange}
				/>
				<TextField
					id="lastName"
					label="Last Name"
					type="text"
					fullWidth
					variant="standard"
					margin="normal"
					defaultValue={studentData ? studentData.lastName : ""} 
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleSubmit}>
					Submit
				</Button>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
}
