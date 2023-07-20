import {useState} from "react";

function Login ({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isDisabled = username == "" | password == "";

    const handleLogin = () => {
        if(!isDisabled){
            onLogin({username, password})
        }
    }

    return (
        <>
        <input type="username" value={username} placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}></input>
        <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}></input>
        <button type="button" disabled={isDisabled} onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login;
