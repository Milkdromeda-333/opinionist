import { useContext, useEffect, useState} from 'react';

import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { BiSend } from 'react-icons/bi'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import { VscCommentDiscussion } from 'react-icons/vsc'

import ResizableTextArea from './ResizableTextarea';
import PostMenu from './PostMenu';
import CommentsSection from './CommentsSection'
import { userAxios } from './utils/axiosHandlers.js';
import { formatDate } from './utils/formatDate.js';

import { appContext } from '../components/context/App';
import { context } from './context/User'

 
export default function Post(data) {
    const { title, description, datePosted, username, _id: postId, upvotes, downvotes } = data;

    const { user } = useContext(context);
    const { updateFeed, allPosts } = useContext(appContext);

    const [btnEffect, setBtnEffect] = useState(false)
    const [isCommentsActive, setIsCommentsActive] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [toggleMenu, setToggleMenu] = useState(false);
    const [commentsArr, setCommentsArr] = useState([]);
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
                userAxios.get(`/api/comments/${postId}`)
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
        userAxios.put(`/api/posts/vote/${postId}/downvote`)
            .then(() => {
                setIsVoted(prev => ({
                    upvoted: false,
                    downvoted: !prev.downvoted
                }));
                updateFeed();
            })
            .catch(err => console.log(err))
    }

    const handleUpvote = () => {
        userAxios.put(`/api/posts/vote/${postId}/upvote`)
            .then(() => {
                setIsVoted(prev => ({
                    downvoted: false,
                    upvoted: !prev.upvoted
                }));
                updateFeed()
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        userAxios.get(`/api/comments/${postId}`)
            .then(res => {
                setCommentsArr(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    // useEffect(() => {
    //     updateFeed()
    // }, [isVoted])

    return (
        <div className='
        w-full
        p-4
        text-my-cream
        bg-my-light-blue
        rounded-md
        '>
            <div className="flex flex-row justify-between">

                {/* card header */}
                <div className='flex flex-row justify-start gap-2'>
                    <img
                        src={`https://ui-avatars.com/api/?name=${username}&rounded=true`} alt='avater'
                        className='w-10'
                    />
                    <div className='flex flex-col justify-start'>
                        <span> @{username}</span>
                        <span className='text-xs'> {formatDate(datePosted)}</span>
                    </div>
                </div>

                {username === user.username &&
                    <div className="relative z-0">

                        <HiOutlineDotsVertical
                            className='
                            text-2xl
                            rounded-full
                            hover:text-my-tan
                            hover:outline'
                            onClick={togglePostMenu}
                        />

                        {toggleMenu && <PostMenu postId={postId} />}
                        
                    </div>
                }

            </div>

            {/* post contents */}
            <div className='mb-2'>
                <h2 className='font-bold text-lg my-2'>{title}</h2>
                <p className='break-words'>{ description }</p>
            </div>

            {/* options */}
            
                <div className='
                    flex flex-row justify-evenly items-center gap-4
                    border-t-2
                    py-2'>
                        { username !== user.username ?
                            <>
                                <div
                                onClick={handleDownvote}    
                                className={`
                                flex flex-row justify-center items-center gap-2
                                cursor-pointer
                                hover:text-red-500
                                ${isVoted.downvoted && 'text-red-600'}
                                `}>
                                    {downvotes.length}
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
                                    {upvotes.length}
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
                                    {upvotes.length}
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
                    <VscCommentDiscussion className='text-3xl' />
                    {/*!TODO add number of comments */}
                    <span className=''>view {commentsArr.length} comments</span>
                    </div>
            }
            {isCommentsActive &&
                <CommentsSection comments={commentsArr} toggleComments={setIsCommentsActive} setCommentsArr={setCommentsArr} />}
        </div>
    )
}