import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
 
    const handleAddUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;

        const newUsers = { name, email }
        console.log(newUsers);
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="submit" value="Add user" />
            </form>
            {
                users.map(user => <p key={user.id}> {user.id} : {user.name} : {user.email} </p>)
            }
        </div>
    );
};

export default Users;

