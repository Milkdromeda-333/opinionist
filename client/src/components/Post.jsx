import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import {BiSend} from 'react-icons/bi'
import { useState } from "react";

export default function Post(data) {
    const { title, description, datePosted, userName } = data;

    const [btnEffect, setBtnEffect] = useState(false)

    // TODO add a function that handles dates that shows how long ago the post was posted

    return (
        // <div className="
        // w-full
        // p-4
        // pb-2
        // text-my-cream
        // bg-my-light-blue
        // "
        // >   

        //     <h2>{title}</h2>
        //     <span className=" max-md:hidden">@{userName}</span>
        //     <p className="break-all">{description}</p>

        //     {/* is hidden for larger screens */}
        //     <div className="flex flex-row justify-between items-center gap-4 mt-2 md:hidden">
        //         <div className="flex flex-row justify-center items-center gap-2">
        //             <img
        //                 src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
        //                 className="w-10"
        //             />
        //             <span> @{userName}</span>
        //         </div>
        //         <span>{datePosted}</span>
        //     </div>

        //     {/* CARD FOOTER */}
        //     <div className="
        //     border-t-2
        //     w-full
        //     mt-4
        //     p-2
        //     flex flex-row justify-center items-center
        //     md:justify-between"
        //     >
        //         <div className="flex flex-row justify-evenly items-center gap-4 ">
        //             <div className="hover:text-red flex flex-row justify-center items-center gap-2">
        //                 <span>Disagree</span>
        //                 <FiThumbsDown />
        //             </div>
        //             <div className="hover:text-green flex flex-row justify-center items-center gap-2">
        //                 <FiThumbsUp />
        //                 <span>Agree</span>
        //             </div>
                    
        //         </div>
                
        //         {/* is hidden for smaller screens */}
        //         <div className="flex flex-row justify-end items-center gap-4 max-md:hidden">
        //             <span className="flex flex-col">@{userName} </span>
        //             <img
        //                 src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
        //                 className="w-10"
        //             />
        //         </div>
        //     </div>

        // </div>
        <div className="
        w-full
        p-4
        text-my-cream
        bg-my-light-blue
        ">
            {/* card header */}
            <div className="flex flex-row justify-start gap-2">
                <img
                    src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
                    className="w-10"
                />
                <div className="flex flex-col justify-start">
                    <span> @{userName}</span>
                    <span className="text-xs"> {datePosted}</span>
                </div>
            </div>

            {/* post contents */}
            <div className="">
                <h2 className="font-bold text-lg m-2">{title}</h2>
                <p>{ description }</p>
            </div>

            {/* options */}
            <div className="
            flex flex-row justify-evenly items-center gap-4
            border-t-2
            mt-2
            py-2">
                <div className="
                flex flex-row justify-center items-center gap-2
                hover:text-red-500
                cursor-pointer">
                    <span>Disagree</span>
                    <FiThumbsDown />
                </div>
                <div className="
                flex flex-row justify-center items-center gap-2
                hover:text-green-500
                cursor-pointer">
                    <FiThumbsUp />
                    <span>Agree</span>
                </div>
            </div>

            {/* comment input */}
            <div className="flex flex-row justify-evenly items-center gap-2">
                <textarea type="text" name="comment" id="comment" placeholder="Comment" className="
                w-full
                rounded-lg
                text-my-dark-blue
                h-8
                " />
                <button className={`
                ${btnEffect && "animate-wiggle"}
                    p-1
                    text-xl
                    border-2
                    rounded-full
                    hover:text-my-cream-tone
                    hover:border-my-cream-tone`}
                    onClick={() => {
                         setBtnEffect(true);
                    }}
                    onAnimationEnd={() => setBtnEffect(false)}>
                    <BiSend/>
                </button>
            </div>
        </div>
    )
}