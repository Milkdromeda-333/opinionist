import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

export default function Post(data) {
    const { title, description, datePosted, userName } = data;

    // TODO add a function that handles dates that shows how long ago the post was posted

    return (
        <div className="
        w-full
        p-4
        pb-2
        text-my-cream
        bg-my-light-blue
        "
        >

            <h2>{title}</h2>
            <span className=" max-md:hidden">@{userName}</span>
            <p className="break-all">{description}</p>

            {/* is hidden for larger screens */}
            <div className="flex flex-row justify-between items-center gap-4 mt-2 md:hidden">
                <div className="flex flex-row justify-center items-center gap-2">
                    <img
                        src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
                        className="w-10"
                    />
                    <span> @{userName}</span>
                </div>
                <span>{datePosted}</span>
            </div>

            {/* CARD FOOTER */}
            <div className="
            border-t-2
            w-full
            mt-4
            p-2
            flex flex-row justify-center items-center
            md:justify-between"
            >
                <div className="flex flex-row justify-evenly items-center gap-4 ">
                    <div className="hover:text-red flex flex-row justify-center items-center gap-2">
                        <span>Disagree</span>
                        <FiThumbsDown />
                    </div>
                    <div className="hover:text-green flex flex-row justify-center items-center gap-2">
                        <FiThumbsUp />
                        <span>Agree</span>
                    </div>
                    
                </div>
                
                {/* is hidden for smaller screens */}
                <div className="flex flex-row justify-end items-center gap-4 max-md:hidden">
                    <span className="flex flex-col">@{userName} </span>
                    <img
                        src="https://api.multiavatar.com/Starcrasher.png" alt="avater"
                        className="w-10"
                    />
                </div>
            </div>

        </div>
    )
}