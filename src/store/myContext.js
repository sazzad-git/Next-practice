"use client";

// Context Api
import { createContext, useContext, useState } from "react";

const myContext = createContext(null);

export function MyProvider({ children }) {
  const info = "Please subscribe my channel";
  const [subscriber, setSubscriber] = useState(1000)
  return (
    <myContext.Provider value={{ info, subscriber, setSubscriber }}>{children}</myContext.Provider>
  );
}

export function useMyContext() {
  const contextValue = useContext(myContext);

  if (!contextValue) {
    throw new Error("Error");
  }
  return contextValue;
}
