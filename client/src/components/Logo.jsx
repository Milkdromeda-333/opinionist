import { Link } from "react-router-dom";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

export default function Logo(){

    return (
        <Link to='/app'className='
				flex flex-row items-center 
				font-decor
				xtra-sm:text-xl
				min-xtra-sm:text-2xl
				sm:text-2xl'
			>
				<span className='mr-1'>Opinionist</span>
				<FiThumbsDown className='text-my-cream-tone' />
				<FiThumbsUp className='text-my-cream-tone' />
			</Link>
    )
}