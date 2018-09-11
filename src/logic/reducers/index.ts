// It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer,
//  ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:
//
// Mutate its arguments;
// Perform side effects like API calls and routing transitions;
// Call non-pure functions, e.g. Date.now() or Math.random().

import { combineReducers } from "redux";
import { Examples } from "./Examples";

const reducer = combineReducers({
  examples: Examples
});

export default reducer;
