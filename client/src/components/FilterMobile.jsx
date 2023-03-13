import { appContext } from "./context/App"
import { useContext, useState } from "react";

import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

export default function FilterMobile() {

    const { newestFirst,
        oldestFirst,
        popularFirst,
        mostControversial } = useContext(appContext);
    
    const [isMobileFilterActive, setIsMobileFilterActive] = useState(false);

    const [currentFilter, setCurrentFilter] = useState('Newest first');

    const toggleFilterMobile = (filter) => {
        setIsMobileFilterActive(prev => !prev);
    }

    const setFIlter = (filter) => {
        setCurrentFilter(filter);
    }

    return (
        <div className='w-full flex flex-col justify-center items-center my-4 relative md:hidden'>

            <div
                className="text-my-dark-blue rounded-full bg-white p-4 flex flex-row justify-between items-center w-full"
                onClick={toggleFilterMobile}
            >
                <span>
                    Sort by : {currentFilter}
                </span>

                {isMobileFilterActive ? <BiUpArrow/>:<BiDownArrow />}
            </div>

            {
                isMobileFilterActive &&
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
                                toggleFilterMobile();
                                setFIlter('Newest first');
                        }}
                        className="w-full 
                            bg-white 
                            text-black 
                            px-4 py-2 
                            border-b-2"
                    > Newest First</span>

                    <span
                        onClick={() => {
                            oldestFirst();
                            toggleFilterMobile();
                            setFIlter('Oldest first')
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
                            toggleFilterMobile();
                            setFIlter('Most popular')
                                
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
                            toggleFilterMobile();
                            setFIlter('Most controversial')
                                
                        }}
                        className="w-full 
                        bg-white 
                        text-black 
                        px-4 py-2"
                    >Most controversial</span>
            
                </div>
            }
        </div>


        
    )
}