import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<div></div>} />
				<Route path="/projects" element={<div></div>} />
			</Routes>
		</Layout>
	);
};

export default App;
