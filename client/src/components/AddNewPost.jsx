import { useContext, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ResizableTextArea from './ResizableTextarea';
import { context } from './context/User';
import { appContext } from './context/App';
import { userAxios } from './utils/axiosHandlers';
import Error from './Error';

export default function AddNewPost({ closeModal, isNewPostOpen }) {
    
    const { user, getUserPosts } = useContext(context);
    const { updateFeed } = useContext(appContext);

    const [textInput, setTextInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [showErr, setShowErr] = useState(false);
    const [errMessage, setErrMessage] = useState();

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setTitleInput(value);
    }

    // TODO! add error component
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!textInput || !titleInput) {
            showErrComponent(true,"Please fill out both text fields.");
            return;
        }

        userAxios.post('/api/posts/new', {
            title: titleInput,
            description: textInput,
            username: user.username
        })
        .then(() => {
            setTextInput('');
            setTitleInput('');
            closeModal();
            updateFeed();
            getUserPosts();
    }).catch(err => {
        console.log(err)
        showErrComponent(true)
    })
    }

    const handleClear = (e) => {
        e.preventDefault();
        setTextInput('');
        setTitleInput('');
    }

    const showErrComponent = (state, message) => {
        setShowErr(state);
        setErrMessage(message)
        // DOCS: if false, do not set state back to true lol.
        if (state) {
            setTimeout(() => {
            setShowErr(false);
        }, 2000);
        }
    }

    return (
            <div className={`
            bg-my-light-blue
            w-full
            h-[100vh]
            p-4
            fixed
            left-0
            z-[999]
            flex flex-col justify-center
            transition-all
            ${isNewPostOpen ? 'top-0' : 'top-full'}
            ${showErr && 'top-[32px]'}
            `}
            >
            {showErr && <Error toggleErr={showErrComponent} top={0} message={errMessage} /> }
            
                <RxCross2 onClick={closeModal}
                className='
                absolute
                top-4
                right-4
                ml-auto
                text-4xl
                max-xtra-sm:text-2xl
                text-my-cream
                hover:text-my-cream-tone'
                />
                
                <form className='
                flex flex-col justify-center items-center gap-4
                text-my-cream'
                >
                    <h1 className='text-xl'>Create a new post:</h1>
                    <div className='
                    flex flex-col items-center
                    w-11/12
                    md:w-1/2'
                    >
                        <label htmlFor='title'
                            className='
                            mr-auto
                            text-lg'
                        > Title:</label>
                        
                        <input type='title'
                        placeholder='Enter title here.'
                        onChange={handleTitleChange}
                        value={titleInput}
                        name='title'
                        className='
                        w-full
                        rounded-md
                        p-2
                      text-my-dark-blue
                        text-base
                        focus:outline focus:outline-[3px]'
                        />
                        
                    </div>
                    
                    <div className='
                    flex flex-col items-center
                    w-11/12
                    md:w-1/2'
                    >
                        <label htmlFor='title'
                        className='
                        mr-auto
                        text-lg'
                        > Post details:</label>
                        
                        <ResizableTextArea
                        textInput={textInput}
                        setTextInput={setTextInput}
                        name='post'
                        id='post'
                        placeholder='Enter your post details here.'
                        height='200px'
                        />
                    
                        <div className='
                        flex flex-row-reverse justify-start items-end gap-2
                        w-full
                        '>
                            <button
                            onClick={ handleClear }
                            className='
                            rounded-md
                            bg-red-500
                            text-my-cream
                            px-4 py-2
                            mt-4
                            outline-my-cream
                            w-full
                            md:w-auto
                            hover:outline'
                            > Clear </button>
            
                            <button
                            onClick={ handleSubmit }
                            className='
                            rounded-md
                            bg-my-dark-blue
                            text-my-cream
                            px-4 py-2
                            mt-4
                            outline-my-cream
                            w-full
                            md:w-auto
                            hover:outline'
                            > Submit </button>
                        </div>
                    </div>
                </form>
            </div>
    )
}