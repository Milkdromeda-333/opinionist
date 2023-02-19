import { useState} from "react";
import CommentsSection from "./CommentsSection"
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { BiSend } from 'react-icons/bi'
import { VscCommentDiscussion } from 'react-icons/vsc'
import ResizableTextArea from "./ResizableTextarea";

// TODO add a function that handles dates that shows how long ago the post was posted
 
export default function Post(data) {
    const { title, description, datePosted, userName } = data;

    const [btnEffect, setBtnEffect] = useState(false)
    const [isCommentsActive, setIsCommentsActive] = useState(false);

    const [textInput, setTextInput] = useState('');

    const handlePostComment = () => {
        setBtnEffect(true);
        setTextInput('');
    }
    
    const fakeCommentsArr = [
        {
            comment: "ccdvdvrgtg",
            username: "jjrr",
            isUpdated: false,
            createdAt: "11/07"
        },
        {
            comment: "frnvuihbfguivurhuguirghbrhbv hfuiefgivb fedfgbhevb. nesdbvhfvbe. efefef .",
            username: "vfrr45",
            isUpdated: true,
            createdAt: "11/07"
        }
    ];

    const toggleCommentSec = () => {
        setIsCommentsActive(prev => !prev)
    }

    return (
        <div className="
        w-full
        p-4
        text-my-cream
        bg-my-light-blue
        rounded-md
        ">
            {/* card header */}
            <div className="flex flex-row justify-start gap-2">
                <img
                    src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
                    className="w-10"
                />
                <div className="flex flex-col justify-start">
                    <span> @{userName}</span>
                    <span className="text-xs"> {datePosted}</span>
                </div>
            </div>

            {/* post contents */}
            <div className="">
                <h2 className="font-bold text-lg my-2">{title}</h2>
                <p>{ description }</p>
            </div>

            {/* options */}
            <div className="
            flex flex-row justify-evenly items-center gap-4
            border-t-2
            mt-2
            py-2">
                <div className="
                flex flex-row justify-center items-center gap-2
                hover:text-red-500
                cursor-pointer">
                    <span>Disagree</span>
                    <FiThumbsDown />
                </div>
                <div className="
                flex flex-row justify-center items-center gap-2
                hover:text-green-500
                cursor-pointer">
                    <FiThumbsUp />
                    <span>Agree</span>
                </div>
            </div>

            {/* comment input */}
            <div className="flex flex-row justify-evenly items-center gap-2">
               
                <ResizableTextArea
                    textInput={textInput}
                    setTextInput={setTextInput}
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    height="30px"
                />
                
                <button className={`
                ${btnEffect && "animate-wiggle"}
                    p-1
                    text-xl
                    border-2
                    rounded-full
                    hover:text-my-cream-tone
                    hover:border-my-cream-tone`}
                    onClick={handlePostComment}
                    onAnimationEnd={() => setBtnEffect(false)}>
                    <BiSend/>
                </button>
            </div>

            {/* view comments */}
            {!isCommentsActive &&
                <div className="
                p-2
                cursor-pointer
                flex flex-row justify-center items-center gap-2
                hover:text-my-tan"
                onClick={toggleCommentSec}>
                    <VscCommentDiscussion className="text-3xl" />
                    {/*!TODO add number of comments */}
                     <span className="">view comments</span>
                    </div>
            }
            {isCommentsActive &&
                <CommentsSection comments={fakeCommentsArr} toggleComments={setIsCommentsActive} />}
        </div>
    )
}