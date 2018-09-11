import { IReduxStore } from "../reducers/IReduxStore";
import { Example } from "../types";

export const setExample = (x: Example) => async (
  dispatch: any,
  getState: () => IReduxStore
) => {
  // dispatch({ type: "addTile", x: x, y: y, z: z, TileType: tileType })
};
