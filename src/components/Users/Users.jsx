import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div style={{display:'grid', gridTemplateColumns:'auto auto auto', gap:'20px'}}>
                {
                    users.map( user => <User key={users.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;