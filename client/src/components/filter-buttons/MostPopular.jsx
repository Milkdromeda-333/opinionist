
export default function MostPopular({cb}) {

    return (
        <button
            className="
            border-2 rounded
            px-4 py-2
            hover:bg-my-cream hover:text-black"
            onClick={cb}
            >
                most popular
            </button>
    )
}