import { Outlet  } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

export default function Layout(){

    return (
        <div
            className='
            flex flex-col
            bg-my-cream'
        >
            <Navbar />
            <Outlet />
            <Footer />
		</div>
    )
}