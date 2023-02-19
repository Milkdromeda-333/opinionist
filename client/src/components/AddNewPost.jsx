import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ResizableTextArea from './ResizableTextarea'

export default function AddNewPost({closeModal, isNewPostOpen}) {

    const [textInput, setTextInput] = useState('');
    console.log(isNewPostOpen)

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
        ${isNewPostOpen ? "top-0" : "top-full"}`}
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

                <div className="
                flex flex-col items-center
                w-11/12
                md:w-1/2"
                >

                    <label htmlFor="title"
                        className='
                        mr-auto
                        text-lg'
                    >
                        Title:</label>

                    <input type="title" placeholder='Enter title here.' className='
                    w-full
                    rounded-md
                    p-2
                  text-my-dark-blue
                  focus:outline focus:outline-[3px]'/>

                </div>

                <div className="
                flex flex-col items-center 
                w-11/12
                md:w-1/2"
                >

                    <label htmlFor="title"
                    className='
                    mr-auto
                    text-lg'
                    > Post details:</label>

                    <ResizableTextArea
                    textInput={textInput}
                    setTextInput={setTextInput}
                    name="post"
                    id="post"
                    placeholder="Enter your post details here."
                    height="200px"
                    />
                    
                    <button className='
                    rounded-md 
                    bg-my-dark-blue
                    text-my-cream
                    px-4 py-2
                    ml-auto
                    mt-4
                    outline-my-cream
                    w-full
                    md:w-auto
                    hover:outline'
                        >Submit</button>
                        
                </div>

            </form>

        </div>
    )
}