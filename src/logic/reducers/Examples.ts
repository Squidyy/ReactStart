import { IReduxStore } from "./IReduxStore";

import * as actions from "../actions";
import { List } from "immutable";

import { Example as ExampleType, ExampleStore } from "../types";

// reducers are how do we map our objects to the state and return as a new collection of objects
// these are effectivle how and where we "manipulate" our store objects
// We must ALWAY return a new object and not mutate the current object. this is how redux knows to trigger rerender.
export function Examples(
  state = new ExampleStore(),
  action: any /*cpp add in a actions.BaseAction as an ENUM possible or better yet a interface? that way we dont have to do string matching?*/
) {
  switch (action.type) {
    case "ExampleState":
      state.Status = action.newState;
      return { ...state };
    case "AddExample":
      return state;
    case "DeleteExample":
      return state;
    case "LoadExample":
      state.examples = action.AllExamples;
      return { ...state };
    default:
      return state;
  }
}
