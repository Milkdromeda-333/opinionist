import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="min-h-[100vh] bg-my-cream">
			<Navbar />
			<Home className='font-regular' />
		</div>
	);
}

export default App;
