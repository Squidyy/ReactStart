import { IReduxStore } from "../reducers/IReduxStore";
import { Example } from "../types";
import { RemoteStatus } from "../types/RemoteStatus";

export const LoadExamples = () => async (
  dispatch: any,
  getState: () => IReduxStore
) => {
  // await new Promise(x => setTimeout(x, 3000));
  dispatch({
    type: "LoadExample",
    AllExamples: [{ Id: 30 }, { Id: 8 }, { Id: 43 }, { Id: 10 }]
  });
  dispatch({ type: "ExampleState", newState: RemoteStatus.Success });
};
