import { appContext } from "./context/App"
import { useContext } from "react";

export default function FilterMobile({toggleFilterMobile}) {

    const { newestFirst,
        oldestFirst,
        popularFirst,
        mostControversial  } = useContext(appContext);

    return (
        <div
            className='
            w-[100%]
            mb-4
            mt-1
            text-my-cream
            flex flex-col justify-center items-center
            absolute top-full left-1/2 translate-y-0 -translate-x-2/4 z-30'
        >
            <span 
                onClick={() => {
                    newestFirst();
                    toggleFilterMobile()
                }}
            className="w-full 
            bg-white 
            text-black 
            px-4 py-2 
            border-b-2"
            >Newest First</span>

            <span 
                onClick={() => {
                    oldestFirst();
                    toggleFilterMobile()
                }}
            className="w-full 
            bg-white 
            text-black 
            px-4 py-2 
            border-b-2"
            >Oldest first</span>

            <span 
                onClick={() => {
                    popularFirst();
                    toggleFilterMobile()
                }}
            className="w-full 
            bg-white 
            text-black 
            px-4 py-2 
            border-b-2"
            >Most popular</span>

            <span 
                onClick={() => {
                    mostControversial();
                    toggleFilterMobile()
                }}
            className="w-full 
            bg-white 
            text-black 
            px-4 py-2"
            >Most controversial</span>
            
        </div>
    )
}