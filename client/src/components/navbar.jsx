import Logo from './Logo';
import { context } from './context/User';
import {appContext} from './context/App'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

export default function Navbar() {

	const navigate = useNavigate();
	const { setUser, setToken } = useContext(context);
	const { setIsNewPostOpen } = useContext(appContext);

	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleHamburger = () => {
		setIsNavOpen(prev => !prev)
	}

	const handleLogout = () => {
		setUser({
			username: '',
			id: ''
		})
		localStorage.clear();
		setToken("");
		return navigate('/')
	}

	const toggleNewPostModal = () => {
		setIsNavOpen(prev => !prev)
		setIsNewPostOpen(true);
	}

	return (
		<nav
			className='
			w-full
			bg-my-dark-blue
			text-my-cream
			fixed
			flex flex-col justify-center items-center
			p-4
			border-b-2 border-my-cream-tone
			shadow-lg
			sm:justify-between sm:flex-row sm:border-none'>
			
			<Logo />

			{/* HAMBURGER ICON*/}
			{isNavOpen ?
				<RxCross2 onClick={toggleHamburger}
				className='
				absolute right-0
				text-4xl
				m-4
				max-xtra-sm:text-2xl
				sm:hidden'/>
				: <RxHamburgerMenu onClick={ toggleHamburger } className='
				absolute right-0
				text-4xl
				m-4
				max-xtra-sm:text-2xl
				sm:hidden'/>
			}

			{/* NAV MENU */}
			<div className={`
            flex flex-col justify-center items-center gap-4
			absolute left-0
			${isNavOpen ? 'top-[calc(100%+2px)]' : '-top-[100vh]'}
			transtion-all duration-150 ease
			p-4
			w-full
			bg-my-dark-blue
			shadow-lg
            sm:flex-row sm:static sm:w-auto sm:p-0 sm:z-0`}
			>
				<button onClick={toggleNewPostModal}
					className='
					no-underline
					list-none
					hover:text-my-cream-tone'
				>
					New Post
				</button>

				<Link to='/home' className='hover:text-my-cream-tone'>
					Home
				</Link>

				<Link to='/profile' className='hover:text-my-cream-tone'>
					Profile
				</Link>
				
				<button onClick={handleLogout} className='no-underline list-none hover:text-my-cream-tone'>
					Logout
				</button>

			</div>

		</nav>
	);
}
