import { Routes, Route, Navigate } from 'react-router-dom';
// routes
import Layout from './components/Layout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import { useContext } from 'react';
import { context } from './components/context/User';

export default function App() {

	const { token } = useContext(context);
	
	return (
		<>
			<Routes>

				<Route path='/' element={token ? <Navigate to='/home' /> : <Auth />} />
				
				<Route element={<Layout />}>
					<Route path='/home' element={token ? <Home /> : <Navigate to='/' />} />
					<Route path='/profile' element={token ? <Profile /> : <Navigate to='/' />} />
				</Route>

			</Routes>
		</>
	);
}


