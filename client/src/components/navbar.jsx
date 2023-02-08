import { Link } from "react-router-dom";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi"

export default function Navbar() {
  return (
      <navbar className="
    w-full
    bg-my-dark-blue
    text-my-cream
    flex flex-col
    justify-between
    p-4">
          
          <Link to='/' className="
          flex 
          flex-row 
          items-center 
          font-decor
          text-3xl">
              <span className="mr-1">Opinionist</span>
              <FiThumbsDown />
              <FiThumbsUp />
          </Link>

    </navbar>
  );
}
