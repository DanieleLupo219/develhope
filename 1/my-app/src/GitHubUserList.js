import React, { useState } from "react";
import GitHubUser from "./GitHubUser";

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
            <GitHubUser username={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubUserList;
