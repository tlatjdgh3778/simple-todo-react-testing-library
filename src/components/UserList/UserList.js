import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://randomuser.me/api/?results=5");
            const data = await response.json();

            setUsers(data.results);
        };

        fetchData();
    }, []);

    console.log(users);
    return (
        <div>
            {users.map((user) => (
                <div className="user-container">
                    <img className="picture" src={user.picture.large} alt={user.name.first} />
                    <div className="name">
                        {user.name.first} {user.name.last}
                    </div>
                    <div className="city">{user.location.city}</div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
