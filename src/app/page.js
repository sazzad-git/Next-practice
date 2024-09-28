"use client";

import State from "./State";

export default function Home() {
  const handleFun = () => {
    alert("Hello Hablu Programmers");
  };

  return (
    <main>
      <h1>Hello Hablu Programmers</h1>
      <button onClick={handleFun}>Set Alert</button>
      <State />
    </main>
  );
}
