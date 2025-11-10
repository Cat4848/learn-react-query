"use client";
import { store } from "./redux/store/createStore";
import { useSelector, UseSelector } from "react-redux";/

export default function Home() {
  const state = useSelector<{ value: number }>((state) => state);
  return (
    <div>
      <h1>Home Page</h1>
      <div>store value {state}</div>
      <button onClick={() => store.dispatch({ type: "increment" })}>
        Increment
      </button>
    </div>
  );
}

store.subscribe(Home);
