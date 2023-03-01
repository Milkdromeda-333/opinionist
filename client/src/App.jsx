import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { context } from './components/context/User';
import { appContext } from './components/context/App'
// routes
import Layout from './components/Layout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import AddNewPost from './components/AddNewPost';

export default function App() {

	const { token } = useContext(context);
	const { isNewPostOpen, setIsNewPostOpen } = useContext(appContext);

    const toggleModal = () => {
        setIsNewPostOpen(false);
    }
	
	return (
		<>
			<Routes>

				<Route path='/' element={token ? <Navigate to='/home' /> : <Auth />} />
				
				<Route element={<Layout />}>
					<Route path='/home' element={token ? <Home /> : <Navigate to='/' />} />
					<Route path='/profile' element={token ? <Profile /> : <Navigate to='/' />} />
				</Route>

			</Routes>

			
            <AddNewPost closeModal={toggleModal} isNewPostOpen={isNewPostOpen}  />
		</>
	);
}


