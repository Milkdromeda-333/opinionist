import { useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { BiSend } from 'react-icons/bi'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import { VscCommentDiscussion } from 'react-icons/vsc'

import ResizableTextArea from './ResizableTextarea';
import PostMenu from './PostMenu';
import CommentsSection from './CommentsSection'
import { userAxios } from './utils/axiosHandlers.js';
import formatDate from './utils/formatDate.js';

import { appContext } from '../components/context/App';
import { context } from './context/User'

 
export default function Post(data) {
    const { title, description, datePosted, username, _id, upvotes, downvotes } = data;

    const location = useLocation();

    const { user } = useContext(context);
    const { updatePost, allPosts, updateFeed } = useContext(appContext);

    const [btnEffect, setBtnEffect] = useState(false)
    const [isCommentsActive, setIsCommentsActive] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [toggleMenu, setToggleMenu] = useState(false);
    const [commentsArr, setCommentsArr] = useState([]);
    const [postData, setPostData] = useState({
        title: title,
        description: description,
        datePosted: datePosted,
        username: username,
        _id: _id,
        upvotes: upvotes,
        downvotes: downvotes
    });

    const [isVoted, setIsVoted] = useState({
        upvoted: upvotes.includes(user._id),
        downvoted: downvotes.includes(user._id)
    });

    const handlePostComment = () => {
        
        setBtnEffect(true);

        const commentObj = {
            "comment": textInput,
            "user": user,
            "post": postId,
            "username": user.username
        }

        if (textInput) {
            userAxios.post('/api/comments/new-comment', commentObj)
            .then(res => {
                userAxios.get(`/api/comments/${postData._id}`)
                    .then(res => {
                        setCommentsArr(res.data);
                    })
                    .catch(err => console.log(err));
            }).catch(err => console.log(err))
        
        setTextInput('');
        }
    }

    const toggleCommentSec = () => {
        setIsCommentsActive(prev => !prev);
    }

    const togglePostMenu = () => {
        setToggleMenu(prev => !prev);
    }

    const handleDownvote = () => {
        userAxios.put(`/api/posts/vote/${postData._id}/downvote`)
            .then(async () => {
                setIsVoted(prev => ({
                    upvoted: false,
                    downvoted: !prev.downvoted
                }));
                const newData = await updatePost(postData._id);
                setPostData(newData.data);
            })
            .catch(err => console.log(err));
    }

    const handleUpvote = () => {
        userAxios.put(`/api/posts/vote/${postData._id}/upvote`)
            .then(async () => {
                setIsVoted(prev => ({
                    downvoted: false,
                    upvoted: !prev.upvoted
                }));
                const newData = await updatePost(postData._id);
                setPostData(newData.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        userAxios.get(`/api/comments/${postData._id}`)
            .then(res => {
                setCommentsArr(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    
    return (
        <div className={`
        w-full
        ${location.pathname == '/home' ? 'w-full' : 'md:w-2/3'}
        p-4
        text-my-cream
        bg-my-light-blue
        rounded-md
        `}>
            <div className="flex flex-row justify-between">

                {/* card header */}
                <div className='flex flex-row justify-start gap-2'>
                    <img
                        src={`https://ui-avatars.com/api/?name=${postData.username}&rounded=true`} alt='avater'
                        className='w-10'
                    />
                    <div className='flex flex-col justify-start'>
                        <span> @{postData.username}</span>
                        <span className='text-xs'> {formatDate(postData.datePosted)}</span>
                    </div>
                </div>

                {postData.username === user.username &&
                    <div className="relative z-0">

                        <HiOutlineDotsVertical
                            className='
                            text-2xl
                            rounded-full
                            hover:text-my-tan
                            hover:outline'
                            onClick={togglePostMenu}
                        />

                        {toggleMenu && <PostMenu postId={postData._id} />}
                        
                    </div>
                }

            </div>

            {/* post contents */}
            <div className='mb-2'>
                <h2 className='font-bold text-lg my-2'>{postData.title}</h2>
                <p className='break-words'>{ postData.description }</p>
            </div>

            {/* options */}
            
                <div className='
                    flex flex-row justify-evenly items-center gap-4
                    border-t-2
                    py-2'>
                        { postData.username !== user.username ?
                            <>
                                <div
                                onClick={handleDownvote}    
                                className={`
                                flex flex-row justify-center items-center gap-2
                                cursor-pointer
                                hover:text-red-500
                                ${isVoted.downvoted && 'text-red-600'}
                                `}>
                                    {postData.downvotes.length}
                                    <span>Disagree</span>
                                    <FiThumbsDown />
                                </div>
                                <div
                                onClick={handleUpvote}
                                className={`
                                flex flex-row justify-center items-center gap-2
                                hover:text-green-500
                                cursor-pointer
                                ${isVoted.upvoted && 'text-green-600'}
                                `}>
                                    <FiThumbsUp />
                                    {postData.upvotes.length}
                                    <span>Agree</span>
                                </div>
                            </>
                            :
                            <>
                                <div    
                                className={`
                                flex flex-row justify-center items-center gap-2
                                `}>
                                    {downvotes.length}
                                    <span>Disagree</span>
                                    <FiThumbsDown />
                                </div>
                                <div
                                className={`
                                flex flex-row justify-center items-center gap-2
                                `}>
                                    <FiThumbsUp />
                                    {postData.upvotes.length}
                                    <span>Agree</span>
                                </div>
                            </>
                        }
            </div>

            {/* comment input */}
            <div className='flex flex-row justify-evenly items-center gap-2'>
               
                <ResizableTextArea
                    textInput={textInput}
                    setTextInput={setTextInput}
                    name='comment'
                    id='comment'
                    placeholder='Comment'
                    height='30px'
                />
                
                <button className={`
                ${btnEffect && 'animate-wiggle'}
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
                <div className='
                p-2
                cursor-pointer
                flex flex-row justify-center items-center gap-2
                hover:text-my-tan'
                onClick={toggleCommentSec}
                >
                    <VscCommentDiscussion className='text-2xl' />
                    {/*!TODO add number of comments */}
                    <span className=''>view {commentsArr.length} comments</span>
                    </div>
            }
            {isCommentsActive &&
                <CommentsSection comments={commentsArr} toggleComments={setIsCommentsActive} setCommentsArr={setCommentsArr} />}
        </div>
    )
}