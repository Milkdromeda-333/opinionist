import Comment from './Comment'
import {AiOutlineCloseSquare} from 'react-icons/ai'

export default function CommentsSection(props) {
    
    const { comments, toggleComments } = props
    const commentsArr = comments?.map(data => <Comment {...data} />)

    const handleToggle = () => {
        toggleComments(false);
    }
    return (
        <div
        className='
        border-t-2
        mt-4
        text-center
       '>
            {commentsArr || 'No comments yet.'}
            <div 
            onClick={handleToggle}
            className='
             cursor-pointer
            flex flex-row justify-end items-center p-2 gap-[1px]
            hover:text-my-tan'
            >
                <div>
                    <AiOutlineCloseSquare  className='inline text-lg' />
                </div>
                <span>close comments</span>
            </div>
        </div>
    )
}