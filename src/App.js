import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Students from "./components/pages/Students";
import Professors from "./components/pages/Professor";
import Courses from "./components/pages/Courses";
import Grades from "./components/pages/Grades";

function App () {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Dashboard />} />
				<Route path="/students" element={<Students />} />
				<Route path="/professors" element={<Professors />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/grades" element={<Grades />} />
			</Routes>
		</Router>
	);
}

export default App;
