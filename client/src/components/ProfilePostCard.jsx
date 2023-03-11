import { TbTrashX } from 'react-icons/tb'

export default function ProfilePostCard({input, deleteFunc, postId}){

    const deleteItem = () => {
        deleteFunc(postId);
    }

    return (
        <div
            className='border-t-2
            p-2
            flex flex-row justify-between items-center'
        >
            {input}

            <TbTrashX
                onClick={ deleteItem }
                className='text-lg hover:text-red-600'
            />

        </div>
    )
}