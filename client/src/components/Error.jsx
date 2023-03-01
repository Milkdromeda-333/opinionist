import { RxCross2 } from 'react-icons/rx';

export default function Error({ message = 'Sorry, something went wrong.', toggleErr }) {
    // DOCS: pass in function to close component

    const closeComp = () => {
        toggleErr(false);
    }

    return (
        <div className='
        text-white 
        bg-red-600
        w-full
        p-2
        absolute top-100 left-0
        transition-all
        flex flex-row justify-between items-center'
        >
            {message}
            <RxCross2 className='text-2xl hover:text-gray-200' onClick={closeComp} />
        </div>
    )
}