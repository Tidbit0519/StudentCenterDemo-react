import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:5287/api/Student/GetAllStudents";

export default function useAxios () {
	const [ data, setData ] = useState();
	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setData(response.data);
		});
	}, []);

	return data;
}