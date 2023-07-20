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

  const handleClear = (index) => {
    const clearedItems = [...items];
    clearedItems.splice(index, 1);
    setItems(clearedItems);
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
          <div>
            <li key={index}>{item}</li>
            <button type="button" onClick={() => handleClear(index)}>
              clear item
            </button>
          </div>
        ))}
      </ul>
      <button type="reset" onClick={handleReset}>
        Reset List
      </button>
    </>
  );
};

export default TodoList;
