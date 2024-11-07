import { Reducer } from "@reduxjs/toolkit";

interface Store {
  value: number;
}

export default function reducer(state: Store, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1
      };

    default:
      return state;
  }
}

const nextFunct = (input: string) => {
  // console.log("log from next function -> ", input);
};

const print1 = (greeting: string) => (next: (input: string) => void) => {
  console.log("print 1");
  next(greeting);
};

const innerFunct = print1("hello 1");
const res = innerFunct(nextFunct);
console.log("res", res);
