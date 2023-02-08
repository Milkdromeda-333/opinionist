import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Navbar />
			<Home className='font-regular' />
		</>
	);
}

export default App;
