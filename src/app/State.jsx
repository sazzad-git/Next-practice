import { useState } from "react";

function State() {
  const [value, setValue] = useState(1);
  const [title, setTitle] = useState("Hablu Programmer");

  const add = () => {
    setValue(value + 1);
  };

  const changeValue = () => {
    setTitle("Everyone");
  };
  return (
    <div>
      <h2>This is State component from state.jsx</h2>
      <p>Hello{title}</p>
      <button onClick={changeValue}>Change Title</button>

      <p> {value}</p>
      <button onClick={add}>increase value </button>
      <button onClick={() => setValue(value - 1)}>Decrease value</button>
    </div>
  );
}

export default State;
