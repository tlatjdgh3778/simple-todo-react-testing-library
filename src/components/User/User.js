import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UserList from "../UserList/UserList";

const User = () => {
    return (
        <div>
            <Header title="Simple User" />
            <UserList />
            <Footer footer="user" />
        </div>
    );
};

export default User;
