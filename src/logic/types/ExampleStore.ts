import { BaseStoreType } from "./BaseStoreType";
import { Example } from "./Example";

export class ExampleStore extends BaseStoreType {
  public examples: Example[] = [];

  constructor() {
    super();
  }
}
