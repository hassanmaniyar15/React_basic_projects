import React, { useEffect, useState } from "react";

const Github = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            });
    }, []);

    return (
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl ">
            {users.map((user) => (
                <div key={user.id}>
                    <p>Username: {user.login}</p>
                    <p>Followers: {user.followers}</p>
                    <img src={user.avatar_url} alt="Git picture" width={300} />
                </div>
            ))}
        </div>
    );
};

export default Github;
