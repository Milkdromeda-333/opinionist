import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { context } from './context/User';
import axios from 'axios';

export default function AuthForm({ isUserCreatingAcc, setIsUserCreatingAcc, showErrComponent }) {
    
    const inputDefault = {
        username: '',
        password: ''
    }

    const [inputs, setInputs] = useState(inputDefault);

    const { user, setUser, setToken } = useContext(context);
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    } 

    const handleSignIn = (e) => {
        e.preventDefault();

        if (inputs.username && inputs.password) {

            axios.post('/auth/login', inputs)
            .then(res => {
            localStorage.setItem('auth', res.data.token);
            setUser(res.data.user)
            setToken(localStorage.getItem('auth'))
            setInputs(inputDefault);
            // this navigates straight to /home because it detects a token
            })
            .catch(err => {
                e.preventDefault();
                showErrComponent(true);
                console.log(err);
                setInputs(inputDefault);
            });

        } else {
        showErrComponent(true, "Please provide credentials.");
        setInputs(inputDefault);
        }
    }

    const handleCreateNewUser = (e) => {
        e.preventDefault()
        if (!user) {
            setShowErr(true);
            return;
        }
        setUserState(inputs)
        createUser(inputs)
        navigate('/home');
    }

    const toggleForm = () => {
        setIsUserCreatingAcc(prev => !prev)
    }

    return (
        <form className='
            flex flex-col justify-center items-center gap-4
            w-full'
        >
            <div className='
            w-11/12
            md:w-1/2'>

                {/* username sec */}
                <div className='
                flex flex-col justify-center items-start gap-4
                w-full
                mb-4'>
                    <label htmlFor='username'>Username:</label>

                    <input
                    type='text'
                    name='username'
                    value={inputs.username}
                     id='username'
                     onChange={handleInput}
                     placeholder={isUserCreatingAcc ? 'Create a username' : 'Enter your username'}
                     required
                     className='
                     bg-neutral-300
                     w-full
                     p-2
                     outline-[3px]
                     outline-my-dark-blue
                     focus:outline'
                    />
                </div>

                {/* password sec */}
                <div className='
                flex flex-col justify-start items-start gap-4
                w-full'
                >
                    <label htmlFor='password'>Password:</label>

                    <input
                    type='password'
                    name='password'
                    value={inputs.password}
                    onChange={handleInput}
                    id='password'
                    required
                    autoComplete='true'
                    placeholder={isUserCreatingAcc ? 'Create new password':'Enter your password'}
                    className='
                    bg-neutral-300
                    p-2
                    w-full
                    outline-my-dark-blue
                    outline-[3px]
                    focus:outline'
                    />
                
                </div>
            </div>

            <button onClick={ isUserCreatingAcc ? handleCreateNewUser : handleSignIn} className='
            bg-my-dark-blue
            text-white
            w-1/2
            py-2
            mt-2
            outline-my-light-blue
            outline-[3px]
            hover:outline'>
                {isUserCreatingAcc ? 'Sign up' : 'Login'}
            </button>

            <span className='cursor-pointer underline'>Forgot you password?</span>
            <span onClick={toggleForm}
                className='cursor-pointer underline'>
                {isUserCreatingAcc ? 'Have an account already? Signup' : 'Create a new account.'}
            </span>
        </form>
    )
}