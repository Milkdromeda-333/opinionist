import Img from "../assets/undraw_like_dislike_re_dwcj.svg"
import AuthForm from "../components/AuthForm"
import Logo from "../components/Logo";

export default function Auth(){

    return (
        <div className="bg-my-cream">
            
            <nav className="
            w-full
			bg-my-dark-blue
			text-my-cream
			fixed
			flex flex-col justify-center items-center
			p-4
			border-b-2 border-my-cream-tone
			shadow-lg
			sm:justify-between sm:flex-row sm:border-none
            ">
                <Logo />
            </nav>

            {/* page */}
            <div className="
            text-my-dark-blue
            flex flex-row justify-center items-center
            min-h-[100vh]
            ">
                <div className="
                flex flex-col justify-evenly items-center gap-8
                w-full"
                >
                    <div>
                        <span className="">Got an opinion? Share it here.</span>
                        {/* change to be dynamic */}
                        <h1 className="text-4xl">Login/Signup</h1>
                    </div>

                    <img src={Img} alt="girl voting" className="w-min h-[300px]" />
                </div>

                <AuthForm />
            </div>
        </div>
    )
}