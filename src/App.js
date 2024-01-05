import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./components/pages/students/Students";
import Professors from "./components/pages/professors/Professors";
import Courses from "./components/pages/Courses";
import Grades from "./components/pages/Grades";

function App() {
	return (
		<>
			<NavBar />
			<Router>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route path="/students" element={<Students />} />
					<Route path="/professors" element={<Professors />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/grades" element={<Grades />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
