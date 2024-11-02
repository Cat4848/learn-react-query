"use client";
import { store } from "./redux/store/createStore";

const storeValue = store.getState();
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>store value {store.getState().value}</div>
      <button onClick={() => store.dispatch({ type: "increment" })}>
        Increment
      </button>
    </div>
  );
}

store.subscribe(Home);
