import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div style={{backgroundColor:'white', border:'2px solid green', color:'#000', padding:'20px', display:'flex', flexDirection:'column'}}>
                <h2>{title}</h2>
                <p style={{flexGrow:'1'}}>{body}</p>
                <Link to={`/post/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;