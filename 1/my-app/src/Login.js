import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = username == "" || password == "";

  const loginFunc = () => {
    onLogin({ username, password });
  };

  return (
    <div>
      <input
        value={username}
        type="login"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        value={password}
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button disabled={isDisabled} onClick={loginFunc}>
        Login
      </button>
    </div>
  );
}

export default Login;
