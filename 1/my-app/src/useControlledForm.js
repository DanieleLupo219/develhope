import { useState } from "react";

function useControlledForm() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
    setPassword(e.target.value);
  };

  return {
    username,
    password,
    handleChange,
  };
}

export default useControlledForm;
