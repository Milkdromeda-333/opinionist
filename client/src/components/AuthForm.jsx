import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { context } from "./context/User";

export default function AuthForm() {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const { userState, setUserState, setIsLoggedIn } = useContext(context);
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    } 

    const handleSignIn = (e) => {
        e.preventDefault()
        setUserState(inputs)
        setIsLoggedIn(true)
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
                     onChange={handleInput}
                     placeholder="Enter your username"
                     required
                
                     className="
                     bg-neutral-300
                     w-full
                     p-2"
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
                     onChange={handleInput}
                     placeholder="Enter your password"
                     required
                
                     className="
                     bg-neutral-300
                     w-full
                     p-2"
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