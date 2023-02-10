
export default function Comment(props) {
    const { comment, username, isUpdated, createdAt } = props;
    return (
        <div className="border-b-2 py-4">
            <div>
                <span>@{username}</span>
                <span className="text-xs mx-1">{createdAt}</span>
                {isUpdated &&
                    <span className="text-my-purple text-xs"> (updated)</span>}
            </div>
            <p>{comment}</p>
            
        </div>
    )
}