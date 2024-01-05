import React, { useState } from "react";
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

import { useGetRequest } from "../../../hooks/useAxios";
import ProfessorFormPopUp from "./ProfessorFormPopUp";

const getAllProfessorsURL = "http://localhost:5287/api/Professor/GetAllProfessors";
const deleteUrl = "http://localhost:5287/api/Professor/DeleteProfessorById";

export default function Professors() {
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState();
	const [selectedProfessor, setSelectedProfessor] = useState({});
	const { getData, getLoading, getError } = useGetRequest(getAllProfessorsURL);
	
	const handleClickOpen = (act, professor) => {
		setAction(act);
		if(professor) {
			setSelectedProfessor(professor);
		} else {
			setSelectedProfessor({});
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = (id) => {
		axios.delete(`${deleteUrl}/${id}`)
			.then(() => {
				window.location.reload();
			})
			.catch((error) => {
				throw error;
			});
	};

	
	return (
		<div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
			<div>
				<h1>Professors page</h1>
				{getLoading ? (
					<p>Loading...</p>
				) : getError ? (
					<p>Error: {getError.message}</p>
				) : (
					<Stack spacing={2}>
						<Stack direction="row" spacing={2}>
							<Button variant="contained" startIcon={<AddIcon />} onClick={() => handleClickOpen("add", null)}>
								Add New Professor
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
									{getData.map((professor) => (
										<TableRow key={professor.professorId}>
											<TableCell component="th" scope="row">
												{professor.professorId}
											</TableCell>
											<TableCell align="left">{professor.firstName}</TableCell>
											<TableCell align="left">{professor.lastName}</TableCell>
											<TableCell align="right">
												<Stack direction="row" spacing={2} justifyContent="center">
													<IconButton onClick={() => handleClickOpen("edit", professor)}>
														<EditIcon />
													</IconButton>
													<IconButton onClick={() => handleDelete(professor.professorId)}>
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
				)}

				<ProfessorFormPopUp open={open} action={action} handleClose={handleClose} professor={selectedProfessor}/>
			</div>
		</div>
	);
}
