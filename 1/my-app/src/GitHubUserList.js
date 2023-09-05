import React, { useState } from "react";
import GithubUser from "./GitHubUser";
import { Link, Outlet } from "react-router-dom";

function GitHubUserList() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = e.target.username.value;
    if (newUser !== "") {
      setUsers([...users, newUser]);
    }
    e.target.username.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>

      <Link to={`/users/${users}`}>{users}</Link>
      <Outlet />
    </div>
  );
}

export default GitHubUserList;
