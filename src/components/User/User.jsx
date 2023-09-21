import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user; 
    return (
        <div style={{backgroundColor:'white', border:'2px solid green', color:'#000', padding:'20px'}}>
            <h2>{name}</h2>
            <h3>E-mail : {email}</h3>
            <h3>Phone : {phone}</h3>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;