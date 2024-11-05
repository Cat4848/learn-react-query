import { Reducer } from "@reduxjs/toolkit";

interface Store {
  value: number;
}

export default function reducer(
  state: Reducer<Store>,
  action: { type: string }
) {
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
