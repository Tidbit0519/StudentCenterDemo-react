/* eslint-disable react/prop-types */
import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { useGetByIdRequest } from "../../../hooks/useAxios";

const getStudentByIdURL = "http://localhost:5287/api/Student/GetStudentById";

export default function StudentFormPopUp({ open, handleClose, idToFetch }) {
	const { getByIdData } = useGetByIdRequest(getStudentByIdURL, idToFetch);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Edit Student Information</DialogTitle>
			<DialogContent>
				<TextField
					id="firstname"
					label="First Name"
					type="text"
					fullWidth
					variant="standard"
					defaultValue={getByIdData ? getByIdData.firstName : ""}
				/>
				<TextField
					id="lastname"
					label="Last Name"
					type="text"
					fullWidth
					variant="standard"
					margin="normal"
					defaultValue={getByIdData ? getByIdData.lastName : ""}
				/>

			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
							Submit
				</Button>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
}
