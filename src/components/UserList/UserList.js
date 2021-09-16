import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://randomuser.me/api/?results=5");

            setUsers(response.data.results);
        };

        fetchData();
    }, []);

    console.log(users);
    return (
        <div className="userlist-container">
            {users.map((user, index) => (
                <div key={index} className="user-container" data-testid={`user-${index}`}>
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
