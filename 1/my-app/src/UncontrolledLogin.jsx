import {useEffect, useRef} from "react";

function UncontrolledLogin ({onLogin}) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
      usernameRef.current.focus();
    }, []);

    const handleLogin = () => {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      onLogin({username, password});
    }

    const handleReset = () => {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    }
  
    return (
        <>
        <input type="username" ref={usernameRef} placeholder="Enter your username"></input>
        <input type="password" ref={passwordRef} placeholder="Enter your password"></input>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="reset" onClick={handleReset}>Reset</button>
        </>
    )
  }
  
  export default UncontrolledLogin;