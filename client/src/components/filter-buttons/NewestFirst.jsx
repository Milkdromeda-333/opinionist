
export default function NewestFirst({cb,activeBtns, setActiveBtns}) {
const handleClick = () => {
        cb();
        setActiveBtns({
            newestFirst: true,
            oldestFirst: false,
            mostControversial : false,
            mostPopular: false
        })
    }
    return (
        <button
            className={`
            border-2 rounded
            px-4 py-2
            ${activeBtns.newestFirst ? ' hover:bg-my-dark-blue-tone': 'hover:bg-my-light-blue-tone'}
            ${activeBtns.newestFirst  ? 'bg-my-dark-blue': 'bg-my-light-blue'}
            `}
            onClick={handleClick}
            >
                newest first
            </button>
    )
}