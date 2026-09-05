import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
function UserList() {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <main className="user-list-page">
            <header className="user-list-header">
                <p className="eyebrow">Community directory</p>
                <h1>User List</h1>
                <p className="user-list-intro">Meet the people in your community.</p>
            </header>
            <ul className="user-grid">
                {listOfUser.map(user => (
                    <li className="user-card" key={user.id}>
                        <div className="user-avatar" aria-hidden="true">
                            {user.name.charAt(0)}
                        </div>
                        <div className="user-card-content">
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <a href={`mailto:${user.email}`}>Send email</a>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default UserList;