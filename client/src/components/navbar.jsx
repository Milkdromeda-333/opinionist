import { useState } from "react";import { Link } from "react-router-dom";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

export default function Navbar() {

	const [isNavOpen, setIsNavOpen] = useState(false);

	function toggleHamburger() {
		setIsNavOpen(prev => !prev)
	} 

	return (
		<navbar
			className='
			w-full
			bg-my-dark-blue
			text-my-cream
			relative
			flex flex-col justify-center items-center
			p-4
			border-b-2 border-my-cream
			sm:justify-between sm:flex-row sm:border-none'>
			
			{/* LOGO */}
			<Link to='/'className='
				flex flex-row items-center 
				font-decor
				xtra-sm:text-xl
				min-xtra-sm:text-2xl
				sm:text-2xl'
			>
				<span className='mr-1'>Opinionist</span>
				<FiThumbsDown />
				<FiThumbsUp />
			</Link>

			{/* HAMBURGER ICON*/}
			{isNavOpen ?
				<RxCross2 onClick={toggleHamburger}
				className="
				absolute right-0
				text-4xl
				m-4
				max-xtra-sm:text-2xl
				sm:hidden"/>
				: <RxHamburgerMenu onClick={ toggleHamburger } className="
				absolute right-0
				text-4xl
				m-4
				max-xtra-sm:text-2xl
				sm:hidden"/>
			}

			{/* NAV MENU */}
			<div className={`
            flex flex-col justify-center items-center gap-4
			absolute left-0 -z-10
			${isNavOpen ? 'top-full' : '-top-[110vh]'}
			transtion-all duration-150 ease
			p-4
			w-full
			bg-my-dark-blue
            sm:flex-row sm:static sm:w-auto sm:p-0 z-0`}
			>
				<Link to='/profile' className='hover:text-my-cream-tone'>
					Profile
				</Link>
				<button className='no-underline list-none hover:text-my-cream-tone'>
					Logout
				</button>

			</div>
		</navbar>
	);
}
