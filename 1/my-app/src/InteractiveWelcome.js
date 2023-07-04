import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome(props) {
  const [name, setName] = useState();
  return (
    <div>
      <input
        name={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <Welcome name={name} />
    </div>
  );
}

export default InteractiveWelcome;
