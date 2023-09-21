import { Link, NavLink } from "react-router-dom";
import App from '../../App.css'

const Header = () => {
    return (
        <div style={{backgroundColor:'green', display:'flex', gap: '20px', justifyContent:'center', color:'white', fontSize:'2rem', padding:'20px'}}>
            <NavLink style={{color:'white'}} to="/">Home</NavLink>
            <NavLink style={{color:'white'}} to="/about">About</NavLink>
            <NavLink style={{color:'white'}} to="users">Users</NavLink>
            <NavLink style={{color:'white'}} to="post">Post</NavLink>
            <NavLink style={{color:'white'}} to="/contact">Contact</NavLink>
        </div>
    );
};

export default Header;