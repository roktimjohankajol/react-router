import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;
    const navigate = useNavigate();
    const handleBackToPost = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>Post Title : {title}</h2>
            <p>{body}</p>
            <button style={{background:'white', color:'black'}} onClick={handleBackToPost}>Go Back</button>
        </div>
    );
};

export default PostDetails;