

export default function Error({message}){

    return (
        <div className='text-white bg-red-600 w-full p-2 absolute top-100 left-0 transition-all'>
            {message}
        </div>
    )
}