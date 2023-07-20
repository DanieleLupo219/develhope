import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleReset = () => {
    setItems([]);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button type="reset" onClick={handleReset}>
        Reset List
      </button>
    </>
  );
};

export default TodoList;
