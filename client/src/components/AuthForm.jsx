import { useNavigate } from "react-router-dom"

export default function AuthForm() {
    
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/app");
    }

    return (
        <form className="
            flex flex-col justify-center items-center gap-4
            w-full"
        >
            <div className="w-1/2">

                {/* username sec */}
                <div className="
                flex flex-col justify-center items-start gap-4
                w-full
                mb-4">
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                     name="username"
                     id="username"
                     placeholder="Enter your username"
                     required
                
                     className="
                     bg-slate-300
                     w-full
                     py-2"
                    />
                </div>

                {/* password sec */}
                <div className="
                flex flex-col justify-start items-start gap-4
                w-full"
                >
                    <label htmlFor="password">Password:</label>
                    <input
                    type="text"
                     name="password"
                     id="password"
                     placeholder="Enter your password"
                     required
                
                     className="
                     bg-slate-300
                     w-full
                     py-2"
                    />
                
                </div>
            </div>

            <button onClick={ handleSignIn } className="
            bg-my-dark-blue
            text-white
            w-1/2
            py-2
            mt-2">Login</button>

            <span className="cursor-pointer">Forgot you password?</span>
        </form>
    )
}