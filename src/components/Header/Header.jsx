import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{backgroundColor:'green', display:'flex', gap: '20px', justifyContent:'center', color:'white', fontSize:'2rem', padding:'20px'}}>
            <Link style={{color:'white'}} to="/">Home</Link>
            <Link style={{color:'white'}} to="/about">About</Link>
            <Link style={{color:'white'}} to="users">Users</Link>
            <Link style={{color:'white'}} to="post">Post</Link>
            <Link style={{color:'white'}} to="/contact">Contact</Link>
        </div>
    );
};

export default Header;