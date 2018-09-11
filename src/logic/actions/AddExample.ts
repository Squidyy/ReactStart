import { IReduxStore } from "../reducers/IReduxStore";
import { Example } from "../types";

export const AddExample = (x: any) => async (dispatch: any) => {
  await dispatch({
    type: "example"
  });
};
