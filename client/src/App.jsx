import {useContext} from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import {context} from './components/context/User'
// routes
import Layout from './components/Layout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'

function App() {
	const { user } = useContext(context);
	
	return (
		<div>
			<Routes>
				<Route path='/' element={<Auth/> }/>
				<Route element={<Layout />}>
					<Route path='/app' element={user ? <Home /> : <Navigate to='/' />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
