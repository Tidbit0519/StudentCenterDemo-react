import { useState, useEffect } from "react";
import axios from "axios";

function useGetRequest(url) {
	const [getData, setGetData] = useState(null);
	const [getLoading, setGetLoading] = useState(true);
	const [getError, setGetError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				setGetData(response.data);
				setGetLoading(false);
			} catch (err) {
				setGetError(err);
				setGetLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { getData, getLoading, getError };
}

function useGetByIdRequest(url, id) {
	console.log("getting student by ID");
	const [getByIdData, setGetByIdData] = useState(null);
	const [getByIdLoading, setGetByIdLoading] = useState(true);
	const [getByIdError, setGetByIdError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${url}/${id}`);
				setGetByIdData(response.data);
				setGetByIdLoading(false);
			} catch (err) {
				setGetByIdError(err);
				setGetByIdLoading(false);
			}
		};

		fetchData();
	}, [url, id]);

	return { getByIdData, getByIdLoading, getByIdError };
}

function usePostRequest() {
	const [postData, sePostData] = useState(null);
	const [postLoading, setPostLoading] = useState(false);
	const [postError, setPostError] = useState(null);

	const sendPostRequest = async (url, postData) => {
		setPostLoading(true);
		try {
			const response = await axios.post(url, postData);
			sePostData(response.data);
		} catch (error) {
			setPostError(error);
		} finally {
			setPostLoading(false);
		}
	};

	return { postData, postLoading, postError, sendPostRequest };
}

function usePutRequest() {
	const [putData, setPutData] = useState(null);
	const [putLoading, setPutLoading] = useState(false);
	const [putError, setPutError] = useState(null);
  
	const sendPutRequest = async (url, id, putData) => {
		setPutLoading(true);
		try {
			const response = await axios.put(`${url}/${id}`, putData);
			setPutData(response.data);
		} catch (error) {
			setPutError(error);
		} finally {
			setPutLoading(false);
		}
	};
  
	return { putData, putLoading, putError, sendPutRequest };
}


export { useGetRequest, useGetByIdRequest, usePostRequest, usePutRequest };
