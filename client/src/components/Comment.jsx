import { formatDate } from './utils/formatDate.js';
import {context} from '../components/context/User'
import { useContext, useState } from 'react';

export default function Comment(props) {
    const { comment, username, createdAt, user } = props;

    const { user: currentUser } = useContext(context);

    const [isCurrentUserComment, setIsCurrentUserComment] = useState(false);

    if (currentUser._id === user) setIsCurrentUserComment(true);

    return (
        <div className='border-b-2 py-4'>
            <div>
                <span>@{username || 'anonymous'}</span>
                <span className='text-xs mx-1'>{formatDate(createdAt)}</span>
            </div>
            <p>{comment}</p>
            
        </div>
    )
}