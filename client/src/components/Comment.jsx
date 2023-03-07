import { formatDate } from './utils/formatDate.js';
import {context} from '../components/context/User'
import { useContext, useEffect, useState } from 'react';
import {TbTrashX} from 'react-icons/tb'

export default function Comment(props) {
    const { comment, username, createdAt, user:postUser } = props;

    const { user: currentUser } = useContext(context);

    const [isCurrentUserComment, setIsCurrentUserComment] = useState(false);


    useEffect(() => {
        if (currentUser._id === postUser) {
        setIsCurrentUserComment(true);
        }
    }, [])
    
    return (
        <div className='border-b-2 py-4 bg-my-purple border-x p-4 text-white'>
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <span>@{username || 'anonymous'}</span>
                    <span className='text-xs mx-1'>{formatDate(createdAt)}</span>
                </div>
                
            {isCurrentUserComment &&
                <button>
                    <TbTrashX className='text-lg hover:text-red-600' />
                </button>
            }
            </div>
            <p>{comment}</p>
            
        </div>
    )
}