import { useState, useEffect } from "react";

function ClickTracker() {
  const [lastClicked, setlastClicked] = useState("");

  const handleButtonClick = (button) => {
    setlastClicked(button);
  };
  return (
    <div>
      <h1>{lastClicked}</h1>
      <button onClick={() => handleButtonClick("Button 1")}>Button 1</button>
      <button onClick={() => handleButtonClick("Button 2")}>Button 2</button>
      <button onClick={() => handleButtonClick("Button 3")}>Button 3</button>
    </div>
  );
}

export default ClickTracker;
