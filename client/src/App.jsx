import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="min-h-[100vh] bg-my-cream">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
