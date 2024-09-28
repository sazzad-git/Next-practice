"use client";

import { useMyContext } from "@/store/myContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import State from "./State";

export default function Home() {
  const handleFun = () => {
    alert("Hello Hablu Programmers");
  };

  const Router = useRouter();

  const { info, subscriber } = useMyContext();

  // use react hot toast
  const handleToast = () => {
    toast.success("Successfully created");
  };

  const handleToastError = () => {
    toast.error("This is an error!");
  };

  return (
    <>
    <br /><br />
      <button onClick={handleToast}> Click me for toast</button> <br /> <br />
      <button onClick={handleToastError}> Click me for error toast</button>
      <br /> <br />
      <h1>Hello Hablu Programmers</h1>
      <button onClick={handleFun}>Set Alert</button>
      <State />
      <br />
      <br />
      <button type="button" onClick={() => Router.push("/class")}>
        {" "}
        Go TO class page
      </button>
      {/* For Context Api */}
      <br />
      <br />
      <h1>{info}</h1>
      <h1>{subscriber}</h1>
    </>
  );
}
