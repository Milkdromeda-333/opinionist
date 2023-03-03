import { useContext, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ResizableTextArea from './ResizableTextarea';
import { context } from './context/User';
import { appContext } from './context/App';
import { userAxios } from './utils/axiosHandlers';
import Error from './src/components/Error';

export default function AddNewPost({ closeModal, isNewPostOpen }) {
    
    const { user } = useContext(context);
    const { setAllPosts } = useContext(appContext);

    const [textInput, setTextInput] = useState('');
    const [titleInput, setTitleInput] = useState('');

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setTitleInput(value);
    }

    // TODO! add error component
    const handleSubmit = (e) => {
        e.preventDefault();

        userAxios.post('/api/posts/new', {
            title: titleInput,
            description: textInput,
            username: user.username
        })
        .then(res => {
            setTextInput('');
            setTitleInput('');
            closeModal();
            userAxios.get('/api/posts')
                .then(res => setAllPosts(res.data))
                .catch(err => console.log(err))

    }).catch(err => {
        console.log(err)
    })
        
    }

    const handleClear = (e) => {
        e.preventDefault();
        setTextInput('');
        setTitleInput('');
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
        ${isNewPostOpen ? 'top-0' : 'top-full'}`}
        >
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
                    flex flex-row justify-end items-end gap-2
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
                            >Clear</button>
                        
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
                            >Submit</button>
                    </div>
                        
                </div>

            </form>

        </div>
    )
}