import { Outlet  } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout(){

    return (
        <div className="min-h-[100vh] bg-my-cream">
            <Navbar />
            <Outlet />
		</div>
    )
}