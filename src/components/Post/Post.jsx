import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={{backgroundColor:'white', border:'2px solid green', color:'#000', padding:'20px', display:'flex', flexDirection:'column'}}>
                <h2>{title}</h2>
                <p style={{flexGrow:'1'}}>{body}</p>
                <Link to={`/post/${id}`}><button>Show Details</button></Link>
                
                <button style={{marginTop:'20px'}} onClick={handleShowDetails}>Click to Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}
export default Post;