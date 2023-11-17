/* eslint-disable react/prop-types */
import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";


export default function StudentFormPopUp({ open, handleClose, studentData }) {

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
					defaultValue={studentData ? studentData.firstName : ""}
				/>
				<TextField
					id="lastname"
					label="Last Name"
					type="text"
					fullWidth
					variant="standard"
					margin="normal"
					defaultValue={studentData ? studentData.lastName : ""}
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
