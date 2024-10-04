import React, { useState } from "react";

const CustomTel = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    console.log("Input value changed:", newValue);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
    </>
  );
};

export default CustomTel;
