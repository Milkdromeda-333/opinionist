import { RxCross2 } from 'react-icons/rx';

export default function Error({ message = 'Sorry, something went wrong.', toggleErr, top }) {
    // DOCS: pass in function to close component
    // DOCS: top is set for different positions that will make the positioning work for the different contexts this component will be in.

    const closeComp = () => {
        toggleErr(false);
    }

    return (
        <div className={`
        text-white 
        bg-red-600
        w-full
        h-8
        px-4
        transition-all
        flex flex-row items-center
        text-center
        absolute left-0
        ${top === 0 ? '-top-8' : 'top-100'} 
        ${top === 0 ? 'justify-center': 'justify-between'}
        `}
        >
            {message}
            {top === 100 && <RxCross2 className='text-2xl hover:text-gray-200' onClick={closeComp} />}
        </div>
    )
}