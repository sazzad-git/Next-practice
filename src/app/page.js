"use client";

import { useRouter } from "next/navigation";
import State from "./State";

export default function Home() {
  const handleFun = () => {
    alert("Hello Hablu Programmers");
  };

  const Router = useRouter();

  return (
    <main>
      <h1>Hello Hablu Programmers</h1>
      <button onClick={handleFun}>Set Alert</button>
      <State />

      <br />
      <br />
      <button type="button" onClick={() => Router.push("/class")}>
        {" "}
        Go TO class page
      </button>
    </main>
  );
}
