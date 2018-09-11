import { List, Map } from "immutable";

import { ExampleStore } from "../types/index";

// keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists
// AKA dont use deep objects when possible
export interface IReduxStore {
  examples: ExampleStore;
}
